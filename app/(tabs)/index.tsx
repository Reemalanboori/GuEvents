import { useState } from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const clubs = [
  { id: 'eventmanagement', name: 'Event Management', image: require('../assets/eventmanagement.png'), phone: '', instagram: 'https://www.instagram.com/gu.evmaclub?igsh=MTYwdnM5ejdscDN6OA==' },
  { id: 'parnasse', name: 'Parnasse Club', image: require('../assets/parnasse.png'), phone: '', instagram: 'https://www.instagram.com/parnasse_club?igsh=MWR2cmdkeGRrZzNiNg==' },
  { id: 'communityservice', name: 'Community Service', image: require('../assets/communityservice.png'), phone: '', instagram: 'https://www.instagram.com/gutech_community_ser?igsh=OW91M3RnZzYya3J6' },
  { id: 'ageo', name: 'Ageo Club', image: require('../assets/ageo.png'), phone: '', instagram: 'https://www.instagram.com/gutech_ageoclub?igsh=MWFkb3NsNnhyMDRlZw==' },
  { id: 'gubridge', name: 'Gubridge Society', image: require('../assets/gubridge.png'), phone: '', instagram: 'https://www.instagram.com/gus.club.gutech?igsh=aGJ0YmNiaDN1cGV6' },
  { id: 'engineering', name: 'Engineering Club', image: require('../assets/engineering.png'), phone: '', instagram: 'https://www.instagram.com/eng.gutech?igsh=N3FtOGd3Zzkwc2ox' },
  { id: 'cs', name: 'CS Club', image: require('../assets/cs.png'), phone: '', instagram: 'https://www.instagram.com/gutech_csc?igsh=MWRxYW8xeXIwM3pwMQ==' },
  { id: 'entrepreneurship', name: 'Entrepreneurship', image: require('../assets/entrepreneurship.png'), phone: '', instagram: 'https://www.instagram.com/gu_entrepreneurshipclub?igsh=bW00MHp0aTE1ejgw' },
  { id: 'international', name: 'International Club', image: require('../assets/international.png'), phone: '', instagram: 'https://www.instagram.com/ic_gutech?igsh=Mmt3Mm9nNjdkdnZz' },
  { id: 'japanese', name: 'Japanese Club', image: require('../assets/japanese.png'), phone: '', instagram: 'https://www.instagram.com/gu_jcc.club?igsh=MTUyd29pbDV5YXZxMA==' },
  { id: 'gusport', name: 'Sports Club', image: require('../assets/gusport.png'), phone: '', instagram: 'https://www.instagram.com/gu.sports?igsh=MXhoaHZoaWJ2M3prcw==' },
  { id: 'mellow', name: 'Mellow Club', image: require('../assets/mellow.png'), phone: '', instagram: 'https://www.instagram.com/mellow.gu?igsh=bjZ4YWoyd3A2YnJt' },
  { id: 'fineart', name: 'Fine Art Club', image: require('../assets/fineart.png'), phone: '', instagram: 'https://www.instagram.com/artclub.gutech?igsh=MnM5MWdocTNpZTgw' },
  { id: 'greenearth', name: 'Green Earth', image: require('../assets/greenearth.png'), phone: '', instagram: 'https://www.instagram.com/gec.gutech?igsh=MTRnaTl0dGd2aHNs' },
  { id: 'logistics', name: 'Logistics Club', image: require('../assets/logistics.png'), phone: '', instagram: 'https://www.instagram.com/gu_logistics?igsh=MWE2bmZjamt6cjYwdA==' },
  { id: 'carclub', name: 'Car Club', image: require('../assets/carclub.png'), phone: '', instagram: 'https://www.instagram.com/gucarclub?igsh=YmQxd2d1cGU5YWU1' },
];

const events = [
  {
    title: 'Hackathon 2025',
    date: 'June 25',
    time: '10:00 AM',
    club: 'Tech Club',
    color: '#B2E7F7',
    image: require('../assets/event1.png'),
  },
  {
    title: 'Live Acoustic Night',
    date: 'June 27',
    time: '6:30 PM',
    club: 'Music Club',
    color: '#F9EEB4',
    image: require('../assets/event2.png'),
  },
  {
    title: 'Science Fair Showdown',
    date: 'July 3',
    time: '2:00 PM',
    club: 'Science Club',
    color: '#DAF3E3',
    image: require('../assets/event3.png'),
  },
  {
    title: 'Literary Debate Finals',
    date: 'July 10',
    time: '4:00 PM',
    club: 'Debate Team',
    color: '#FDE5CF',
    image: require('../assets/event4.png'),
  },
  {
    title: 'Drama Club Premiere',
    date: 'July 15',
    time: '7:00 PM',
    club: 'Drama Club',
    color: '#F5D0E6',
    image: require('../assets/event5.png'),
  },
];

export default function HomeScreen() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openClubModal = (club) => {
    setSelectedClub(club);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedClub(null);
    setSelectedEvent(null);
  };

  const openInstagram = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64, paddingBottom: 120 }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: '#6EC1E4', marginBottom: 24, paddingHorizontal: 16 }}>Home</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16, marginBottom: 24 }}>
        {clubs.map((club, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openClubModal(club)}
            style={{ alignItems: 'center', marginRight: 16 }}
          >
            <Image source={club.image} style={{ width: 56, height: 56, borderRadius: 28, marginBottom: 4 }} resizeMode="contain" />
            <Text style={{ color: 'white', fontSize: 11, textAlign: 'center', width: 64 }}>{club.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 18, fontWeight: '700', color: '#6EC1E4', marginBottom: 12, paddingHorizontal: 16 }}>
        Trending Events
      </Text>

      {events.map((event, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedEvent(event)}
          style={{
            backgroundColor: event.color,
            marginBottom: 12,
            marginHorizontal: 16,
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
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent
        visible={showModal || !!selectedEvent}
        onRequestClose={closeModal}
      >
        <Pressable onPress={closeModal} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: '#fff',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              padding: 24,
            }}
          >
            {selectedClub && (
              <>
                <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}>{selectedClub.name}</Text>
                <Text style={{ fontSize: 14, marginBottom: 4 }}>
                  📞 {selectedClub.phone || 'No phone listed'}
                </Text>
                <Text style={{ fontSize: 14, marginBottom: 16 }}>
                  📸 Instagram: {selectedClub.instagram.replace('https://www.instagram.com/', '').split('?')[0]}
                </Text>
                <TouchableOpacity
                  onPress={() => openInstagram(selectedClub.instagram)}
                  style={{
                    backgroundColor: '#6EC1E4',
                    paddingVertical: 10,
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'white', fontWeight: '600' }}>Open Instagram</Text>
                </TouchableOpacity>
              </>
            )}

            {selectedEvent && (
              <>
                <Image source={selectedEvent.image} style={{ width: '100%', height: 180, borderRadius: 12, marginBottom: 16 }} resizeMode="cover" />
                <Text style={{ fontSize: 20, fontWeight: '800', marginBottom: 8 }}>{selectedEvent.title}</Text>
                <Text style={{ fontSize: 16, marginBottom: 4 }}>{selectedEvent.date} at {selectedEvent.time}</Text>
                <Text style={{ fontSize: 14, color: '#333' }}>Hosted by {selectedEvent.club}</Text>
              </>
            )}
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
}