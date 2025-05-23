import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', 'Failed to save user information.');
    }
  };

  return (
    <View className="flex-1 bg-[#0A0E21] px-6 py-12">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-12 left-6 z-10"
        >
          <Ionicons name="arrow-back" size={28} color="#6EC1E4" />
        </TouchableOpacity>

        <View>
          {/* Heading */}
          <View className="items-center mb-10 mt-10">
            <Text className="text-4xl font-extrabold text-[#6EC1E4] mb-2">
              Create Account
            </Text>
            <Text className="text-white opacity-80 text-center text-base">
              Let’s get you set up to explore university events.
            </Text>
          </View>

          {/* Form */}
          <View>
            <Text className="text-white font-semibold mb-1">Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-5"
            />

            <Text className="text-white font-semibold mb-1">Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-5"
            />

            <Text className="text-white font-semibold mb-1">Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-8"
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            className="bg-[#6EC1E4] py-4 rounded-xl items-center shadow-lg mb-6"
            onPress={handleSignUp}
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
          </TouchableOpacity>

          {/* Footer Link */}
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-[#6EC1E4] text-center underline">
              Already registered?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
