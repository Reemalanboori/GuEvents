
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function NotificationsScreen() {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadSetting = async () => {
      const stored = await AsyncStorage.getItem('notificationsEnabled');
      if (stored !== null) setEnabled(stored === 'true');
    };
    loadSetting();
  }, []);

  const toggleSwitch = async () => {
    const newValue = !enabled;
    setEnabled(newValue);
    await AsyncStorage.setItem('notificationsEnabled', newValue.toString());
    Alert.alert('Notification setting updated');
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
        Push Notifications
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1D1E33',
          borderRadius: 16,
          borderWidth: 1,
          borderColor: '#3B3C4E',
          padding: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Enable Event Reminders</Text>
        <Switch value={enabled} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
}
