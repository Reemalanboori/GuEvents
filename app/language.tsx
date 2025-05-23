
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function LanguageScreen() {
  const [language, setLanguage] = useState('en');
  const router = useRouter();

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
        Language
      </Text>

      <View
        style={{
          backgroundColor: '#1D1E33',
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#3B3C4E',
          padding: 16,
          marginBottom: 24,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, marginBottom: 12 }}>
          Select App Language
        </Text>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          dropdownIconColor="#F3DE83"
          style={{ color: 'white' }}
        >
          <Picker.Item label="English" value="en" />
        </Picker>
      </View>

      <Text style={{ color: '#888', fontSize: 14, textAlign: 'center' }}>
        Currently, the app is only available in English. More languages coming soon!
      </Text>
    </View>
  );
}
