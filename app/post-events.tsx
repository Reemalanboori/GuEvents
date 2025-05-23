
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function PostEventScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const handlePost = () => {
    if (!title || !date || !time || !location || !description) {
      Alert.alert('Please fill out all fields.');
      return;
    }
    Alert.alert('Event Posted!', `${title} has been submitted.`);
    setTitle('');
    setLocation('');
    setDescription('');
    setImage(null);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Please enable photo permissions in settings.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64 }}>
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/profiles')}
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={28} color="#F3DE83" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 80, paddingBottom: 100 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#6EC1E4', textAlign: 'center', marginBottom: 24 }}>
          Post New Event
        </Text>

        <TouchableOpacity onPress={pickImage} style={{ marginBottom: 16, alignItems: 'center' }}>
          {image ? (
            <Image source={{ uri: image }} style={{ width: '100%', height: 180, borderRadius: 12 }} resizeMode="cover" />
          ) : (
            <View style={{ width: '100%', height: 180, borderRadius: 12, backgroundColor: '#1D1E33', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#aaa' }}>Tap to add image</Text>
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          placeholder="Event Title"
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
          style={{
            borderWidth: 1,
            borderColor: '#3B3C4E',
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#1D1E33',
            color: 'white',
            marginBottom: 16,
          }}
        />

        <TouchableOpacity onPress={() => setShowDate(true)} style={{
          backgroundColor: '#1D1E33',
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#3B3C4E',
          marginBottom: 16,
        }}>
          <Text style={{ color: 'white' }}>
            📅 {date.toDateString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowTime(true)} style={{
          backgroundColor: '#1D1E33',
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#3B3C4E',
          marginBottom: 16,
        }}>
          <Text style={{ color: 'white' }}>
            🕒 {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Location"
          placeholderTextColor="#888"
          value={location}
          onChangeText={setLocation}
          style={{
            borderWidth: 1,
            borderColor: '#3B3C4E',
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#1D1E33',
            color: 'white',
            marginBottom: 16,
          }}
        />

        <TextInput
          placeholder="Event Description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          style={{
            borderWidth: 1,
            borderColor: '#3B3C4E',
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#1D1E33',
            color: 'white',
            marginBottom: 24,
            textAlignVertical: 'top',
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#6EC1E4',
            paddingVertical: 14,
            borderRadius: 14,
            alignItems: 'center',
          }}
          onPress={handlePost}
        >
          <Text style={{ color: '#0A0E21', fontWeight: '700', fontSize: 16 }}>
            Post Event
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal transparent visible={showDate} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ margin: 24, backgroundColor: '#fff', borderRadius: 12, padding: 16 }}>
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDate(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showTime} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ margin: 24, backgroundColor: '#fff', borderRadius: 12, padding: 16 }}>
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowTime(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
