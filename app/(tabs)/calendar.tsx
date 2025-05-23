import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const events = [
  {
    date: '2025-06-21',
    title: 'Open Mic Night',
    start: '7:00 PM',
    end: '9:00 PM',
    location: 'Amphitheater',
    organizer: 'Music Club',
    color: '#A6E3E9',
    avatar: require('../assets/music.png'),
  },
  {
    date: '2025-06-24',
    title: 'Tech Talk',
    start: '2:00 PM',
    end: '4:00 PM',
    location: 'Innovation Lab',
    organizer: 'CS club',
    color: '#FFD972',
    avatar: require('../assets/cs.png'),
  },
  {
    date: '2025-06-27',
    title: 'Culture Day',
    start: '3:00 PM',
    end: '6:00 PM',
    location: 'Open Grounds',
    organizer: 'International Club',
    color: '#FFB6B9',
    avatar: require('../assets/international.png'),
  },
  {
    date: '2025-06-28',
    title: 'Design Sprint Workshop',
    start: '11:00 AM',
    end: '2:30 PM',
    location: 'UX Lab',
    organizer: 'GuBridge',
    color: '#C3F584',
    avatar: require('../assets/gubridge.png'),
  },
  {
    date: '2025-06-28',
    title: 'Coding Dojo',
    start: '5:00 PM',
    end: '7:00 PM',
    location: 'Tech Hub',
    organizer: 'CS club',
    color: '#B5EAEA',
    avatar: require('../assets/cs.png'),
  },
];

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const markedDates = events.reduce((acc, event) => {
    if (event.date) {
      acc[event.date] = {
        marked: true,
        dotColor: '#6EC1E4',
      };
    }
    return acc;
  }, {});

  const eventsForDate = events.filter((event) => event.date === selectedDate);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0E21', paddingHorizontal: 16, paddingTop: 64, paddingBottom: 200 }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: '#6EC1E4', textAlign: 'center', marginBottom: 24 }}>
        Event Calendar
      </Text>

      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...markedDates,
          ...(selectedDate && {
            [selectedDate]: {
              selected: true,
              selectedColor: '#6EC1E4',
              marked: markedDates[selectedDate]?.marked,
              dotColor: '#F3DE83',
            },
          }),
        }}
        theme={{
          calendarBackground: '#1D1E33',
          dayTextColor: '#fff',
          monthTextColor: '#F3DE83',
          todayTextColor: '#6EC1E4',
          arrowColor: '#6EC1E4',
        }}
      />

      {selectedDate && (
        <View style={{ marginTop: 24 }}>
          {eventsForDate.length > 0 ? (
            eventsForDate.map((event, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: event.color,
                  borderRadius: 20,
                  padding: 16,
                  marginBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image source={event.avatar} style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0A0E21' }}>{event.title}</Text>
                  <Text style={{ fontSize: 13, color: '#444' }}>{event.start} → {event.end}</Text>
                  <Text style={{ fontSize: 13, color: '#555' }}>📍 {event.location}</Text>
                  <Text style={{ fontSize: 13, color: '#555' }}>👤 {event.organizer}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={{ color: '#888', textAlign: 'center', marginTop: 24 }}>
              No events on this day.
            </Text>
          )}
        </View>
      )}
    </ScrollView>

  );
}