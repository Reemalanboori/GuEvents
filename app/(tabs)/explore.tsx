
import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const categoryColors = {
  Academic: '#B2E7F7',
  Business: '#F9EEB4',
  Sports: '#F5D0E6',
  Music: '#DAF3E3',
  Tech: '#FDE5CF',
  Art: '#E8D0FF',
  Science: '#D0F0FD',
  Culture: '#FFD6C9',
};

const categories = Object.keys(categoryColors);

const events = [
  {
    title: 'AI Workshop',
    category: 'Tech',
    date: 'July 1',
    time: '2:00 PM',
    club: 'CS Club',
    image: require('../assets/event1.png'),
  },
  {
    title: 'Open Stage Music Night',
    category: 'Music',
    date: 'July 5',
    time: '6:30 PM',
    club: 'Music Club',
    image: require('../assets/event2.png'),
  },
  {
    title: 'Startup Pitch Fest',
    category: 'Business',
    date: 'July 8',
    time: '1:00 PM',
    club: 'Entrepreneurship Club',
    image: require('../assets/event3.png'),
  },
  {
    title: 'Cultural Showcase',
    category: 'Culture',
    date: 'July 10',
    time: '5:00 PM',
    club: 'International Club',
    image: require('../assets/event4.png'),
  },
  {
    title: 'Painting Marathon',
    category: 'Art',
    date: 'July 12',
    time: '11:00 AM',
    club: 'Fine Art Club',
    image: require('../assets/event5.png'),
  },
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEvents = events.filter(
    (event) => selectedCategory === null || event.category === selectedCategory
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#0A0E21',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 80,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: '800',
          color: '#6EC1E4',
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        Explore Events
      </Text>

      {!selectedCategory && (
        <>
          <TextInput
            style={{
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingVertical: 10,
              fontSize: 16,
              backgroundColor: '#fff',
              marginBottom: 24,
              color: '#333',
            }}
            placeholder="Search for a category"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <Text style={{ fontSize: 18, fontWeight: '700', color: '#F3DE83', marginBottom: 12 }}>
            Browse by Category
          </Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {filteredCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: categoryColors[category],
                  width: '48%',
                  height: 120,
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#0A0E21' }}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {selectedCategory && (
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#F3DE83' }}>
              {selectedCategory} Events
            </Text>
            <TouchableOpacity onPress={() => setSelectedCategory(null)}>
              <Text style={{ color: '#6EC1E4', fontWeight: '600' }}>← Back</Text>
            </TouchableOpacity>
          </View>

          {filteredEvents.map((event, index) => (
            <View
              key={index}
              style={{
                backgroundColor: categoryColors[event.category],
                marginBottom: 12,
                padding: 16,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#444', fontSize: 12, marginBottom: 4 }}>{event.club}</Text>
                <Text style={{ fontWeight: '700', fontSize: 16, color: '#000', marginBottom: 2 }}>{event.title}</Text>
                <Text style={{ fontSize: 13, color: '#222' }}>{event.date} · {event.time}</Text>
              </View>
              <Image source={event.image} style={{ width: 50, height: 50, borderRadius: 8, marginLeft: 12 }} resizeMode="cover" />
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}
