import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();

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
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-5"
            />

            <Text className="text-white font-semibold mb-1">Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-5"
              keyboardType="email-address"
            />

            <Text className="text-white font-semibold mb-1">Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              secureTextEntry
              className="bg-[#1D1E33] text-white rounded-xl px-4 py-3 mb-8"
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            className="bg-[#6EC1E4] py-4 rounded-xl items-center shadow-lg mb-6"
            onPress={() => router.replace('/(tabs)')}
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
