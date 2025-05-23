
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const dummyEvents = [
  {
    title: 'Business Showcase',
    date: '2025-06-22',
    time: '2:00 PM',
    location: 'Main Hall',
    image: require('./assets/event1.png'),
  },
  {
    title: 'Startup Pitch Night',
    date: '2025-06-25',
    time: '6:30 PM',
    location: 'Auditorium',
    image: require('./assets/event2.png'),
  },
];

export default function MyEventsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64 }}>
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/profiles')}
        style={{
          position: 'absolute',
          top: 40,
          left: 20,
          zIndex: 10,
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#F3DE83" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 80, paddingBottom: 100 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '800',
            color: '#6EC1E4',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          My Events
        </Text>

        {dummyEvents.map((event, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#1D1E33',
              borderColor: '#3B3C4E',
              borderWidth: 1,
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 1, marginRight: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#F3DE83', marginBottom: 4 }}>
                {event.title}
              </Text>
              <Text style={{ fontSize: 14, color: '#ccc', marginBottom: 2 }}>📅 {event.date}</Text>
              <Text style={{ fontSize: 14, color: '#ccc', marginBottom: 2 }}>🕒 {event.time}</Text>
              <Text style={{ fontSize: 14, color: '#ccc' }}>📍 {event.location}</Text>
            </View>
            <Image
              source={event.image}
              style={{ width: 60, height: 60, borderRadius: 10 }}
              resizeMode="cover"
            />
          </View>
        ))}

        <TouchableOpacity
          style={{
            backgroundColor: '#6EC1E4',
            paddingVertical: 14,
            borderRadius: 50,
            marginTop: 32,
            alignItems: 'center',
          }}
          onPress={() => router.push('/post-events')}
        >
          <Text style={{ color: '#0A0E21', fontWeight: '700', fontSize: 16 }}>+ Post New Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
