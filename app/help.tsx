
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HelpScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64 }}>
      <TouchableOpacity
        onPress={() => router.replace('/settings')}
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={28} color="#F3DE83" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 48, paddingBottom: 100 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '800',
            color: '#6EC1E4',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Help & FAQ
        </Text>

        {[
          {
            question: 'How do I find events?',
            answer: 'Use the Explore tab to browse by category or search for events.',
          },
        
          {
            question: 'How do I post a new event?',
            answer: 'If you are a club, go to Profile > My Events > + Post New Event.',
          },
          {
            question: 'Who can see my posted events?',
            answer: 'All users of the app can see your events on the Explore and Calendar pages.',
          },
          {
            question: 'What is GUEvents and who can use it?',
            answer: 'GUEvents is a mobile platform designed for students and university clubs at GUtech to discover, share, and manage events happening on campus.',
          },
          
        ].map((item, index) => (
          <View key={index} style={{
            marginBottom: 24,
            backgroundColor: '#1D1E33',
            padding: 16,
            borderRadius: 16,
            borderColor: '#3B3C4E',
            borderWidth: 1,
          }}>
            <Text style={{ color: '#F3DE83', fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
              {item.question}
            </Text>
            <Text style={{ color: 'white', fontSize: 15 }}>{item.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
