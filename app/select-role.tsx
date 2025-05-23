import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SelectRoleScreen() {
  const router = useRouter();

  const handleSelectRole = async (role: 'student' | 'club') => {
    try {
      await AsyncStorage.setItem('userType', role);
      router.push('/signup');
    } catch (error) {
      console.error('Failed to save user type:', error);
    }
  };

  return (
    <View className="flex-1 bg-[#0A0E21] px-6 py-12">
      <View className="flex-1 justify-center">
        {/* Heading right above the buttons */}
        <View className="items-center mb-10">
          <Text className="text-4xl font-extrabold text-[#6EC1E4] mb-2">
            Register As
          </Text>
          <Text className="text-white opacity-80 text-center text-base">
            Choose your role to begin exploring events
          </Text>
        </View>

        {/* Role Buttons */}
        <View>
          <TouchableOpacity
            onPress={() => handleSelectRole('student')}
            className="bg-[#F3DE83] py-4 rounded-xl mb-4 items-center shadow-md"
          >
            <Text className="text-[#0A0E21] text-xl font-bold">Student</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelectRole('club')}
            className="bg-[#6EC1E4] py-4 rounded-xl mb-6 items-center shadow-md"
          >
            <Text className="text-white text-xl font-bold">Club</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Link */}
        <View className="items-center mt-10">
          <Text className="text-white opacity-70 mb-2">
            Create an account to get started
          </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-[#6EC1E4] underline">Already registered?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
