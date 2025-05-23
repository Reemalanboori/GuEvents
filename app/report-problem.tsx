
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function ReportProblemScreen() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!message.trim()) {
      Alert.alert('Please describe the problem.');
      return;
    }
    Alert.alert('Thank you!', 'Your problem has been reported.');
    setMessage('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64, paddingHorizontal: 24 }}>
      <TouchableOpacity
        onPress={() => router.replace('/settings')}
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 10 }}
      >
        <Ionicons name="arrow-back" size={28} color="#F3DE83" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 28,
          fontWeight: '800',
          color: '#6EC1E4',
          textAlign: 'center',
          marginBottom: 32,
        }}
      >
        Report a Problem
      </Text>

      <Text style={{ color: 'white', fontSize: 16, marginBottom: 12 }}>
        Describe the issue:
      </Text>

      <TextInput
        placeholder="Type your message here..."
        placeholderTextColor="#888"
        multiline
        numberOfLines={6}
        value={message}
        onChangeText={setMessage}
        style={{
          backgroundColor: '#1D1E33',
          color: 'white',
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#3B3C4E',
          paddingHorizontal: 16,
          paddingVertical: 12,
          marginBottom: 24,
          textAlignVertical: 'top',
        }}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#EF4444',
          paddingVertical: 14,
          borderRadius: 14,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
