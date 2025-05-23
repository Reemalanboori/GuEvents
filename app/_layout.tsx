import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";
import { EventsProvider } from "../hooks/EventsContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "FjallaOne-Regular": require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <EventsProvider>
      <Slot />
    </EventsProvider>
  );
}
