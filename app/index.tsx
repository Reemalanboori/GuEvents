import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0A0E21] px-6 pt-32 pb-10">
      {/* Spacer at top is now pt-32 instead of pt-24 */}

      {/* Welcome Text */}
      <Text className="text-5xl font-extrabold text-[#6EC1E4] mb-2">
        Welcome
      </Text>
      <Text className="text-white text-base opacity-80 mb-6">
        Today’s a great day to discover events!
      </Text>

      {/* Center Icon */}
      <Image
        source={require('../assets/icon.png')}
        className="w-64 h-64 mb-6 self-center"
        resizeMode="contain"
      />

      {/* Yellow Highlight Card */}
      <View className="bg-[#F3DE83] rounded-3xl p-5 mb-6">
        <Text className="text-black text-lg font-bold">What’s Happening?</Text>
        <Text className="text-black text-sm mt-1">
          Explore university clubs, sports, and trending activities around you.
        </Text>
      </View>

      {/* CTA Button */}
      <TouchableOpacity
        onPress={() => router.replace('/select-role')}
        className="bg-[#6EC1E4] py-4 rounded-xl items-center shadow-lg"
      >
        <Text className="text-white text-lg font-bold">Get Started</Text>
      </TouchableOpacity>

    
      
    </View>
  );
}
