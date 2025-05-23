import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0A0E21] px-6 py-12">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-6 z-10"
      >
        <Ionicons name="arrow-back" size={28} color="#6EC1E4" />
      </TouchableOpacity>

      <View className="flex-1 justify-center">
        {/* Heading */}
        <View className="items-center mb-10 mt-10">
          <Text className="text-4xl font-extrabold text-[#6EC1E4] mb-2">
            Welcome Back
          </Text>
          <Text className="text-white opacity-80 text-center text-base">
            Log in to see what's happening around you.
          </Text>
        </View>

        {/* Form */}
        <View>
          <Text className="text-white font-semibold mb-1">Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
            className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-5"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text className="text-white font-semibold mb-1">Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#ccc"
            secureTextEntry
            className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-8"
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className="bg-[#6EC1E4] py-4 rounded-xl items-center shadow-lg mb-6"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-white text-lg font-bold">Login</Text>
        </TouchableOpacity>

        {/* Footer */}
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text className="text-[#6EC1E4] text-center underline">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
