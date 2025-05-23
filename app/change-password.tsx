
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChangePasswordScreen() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Your password has been updated.');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0E21', paddingHorizontal: 24, paddingTop: 80 }}>
      <TouchableOpacity onPress={() => router.replace('/(tabs)/profiles')}
 style={{ position: 'absolute', top: 40, left: 20 }}>
        <Ionicons name="arrow-back" size={28} color="#F3DE83" />
      </TouchableOpacity>

      <Text style={{ fontSize: 28, fontWeight: '800', color: '#6EC1E4', textAlign: 'center', marginBottom: 24 }}>
        Change Password
      </Text>

      <Text style={{ color: '#F3DE83', marginBottom: 6, fontWeight: '600' }}>New Password</Text>
      <TextInput
        secureTextEntry
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
        placeholder="Enter new password"
        placeholderTextColor="#888"
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <Text style={{ color: '#F3DE83', marginBottom: 6, fontWeight: '600' }}>Confirm New Password</Text>
      <TextInput
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#3B3C4E',
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: '#1D1E33',
          color: 'white',
          marginBottom: 24,
        }}
        placeholder="Confirm password"
        placeholderTextColor="#888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#6EC1E4',
          paddingVertical: 14,
          borderRadius: 14,
          alignItems: 'center',
        }}
        onPress={handleUpdate}
      >
        <Text style={{ color: '#0A0E21', fontSize: 16, fontWeight: '700' }}>
          Update Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
