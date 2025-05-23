import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, Platform, View } from "react-native";

// Glowing underline for active tab
const GlowingLine = ({ visible }: { visible: boolean }) => {
  const scaleX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleX, {
        toValue: visible ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 4,
        width: 24,
        height: 4,
        backgroundColor: "#6EC1E4",
        borderRadius: 4,
        opacity: opacity,
        transform: [{ scaleX }],
        shadowColor: "#6EC1E4",
        shadowOpacity: visible ? 0.9 : 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
      }}
    />
  );
};

const TabIcon = ({ source, focused }: { source: any; focused: boolean }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", height: 65 }}>
      <Image
        source={source}
        style={{
          width: 26,
          height: 26,
          resizeMode: "contain",
          tintColor: focused ? "#6EC1E4" : "#1F2937",
        }}
      />
      <GlowingLine visible={focused} />
    </View>
  );
};

// Import icons
import ExploreIcon from "./assets/explore.png"; // or search.png
import HomeIcon from "./assets/home.png";
const CalendarIcon = require("./assets/calendar.png");
const ProfileIcon = require("./assets/profile.png");

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS === "android" ? 20 : 30,
          height: 70,
          backgroundColor: "#F3DE83",
          borderRadius: 16,
          marginHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 8,
          elevation: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={HomeIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={ExploreIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={CalendarIcon} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={ProfileIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
