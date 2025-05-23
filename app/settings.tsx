
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingTop: 64 }}>
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/profiles')}
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
          Settings
        </Text>

        {[
          { label: 'Push Notifications', route: '/notifications' },
          { label: 'Language', route: '/language' },
          { label: 'Help / FAQ', route: '/help' },
          { label: 'Report a Problem', route: '/report-problem' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#1D1E33',
              padding: 16,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#3B3C4E',
              marginBottom: 16,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>{item.label}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#F3DE83" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
