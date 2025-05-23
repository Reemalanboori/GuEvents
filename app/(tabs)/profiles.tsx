import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<'student' | 'club' | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserType = async () => {
      const storedType = await AsyncStorage.getItem('userType');
      if (storedType === 'student' || storedType === 'club') {
        setUserType(storedType);
      }
    };
    fetchUserType();
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera roll access is required.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  if (!userType) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0E21' }}>
        <Text style={{ color: 'white' }}>Loading profile...</Text>
      </View>
    );
  }

  const studentData = {
    name: 'Mariam Al Said',
    email: '25-0123@student.gutech.edu.om',
  };

  const clubData = {
    name: 'Business Club',
    email: 'BusinessClub@club.gutech.edu.om',
  };

  const userData = userType === 'student' ? studentData : clubData;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      style={{ backgroundColor: '#0A0E21', paddingTop: 64, paddingBottom: 100 }}
    >
      {/* Settings icon */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 40, right: 24, zIndex: 10 }}
        onPress={() => router.push('/settings')}
      >
        <Ionicons name="settings-outline" size={28} color="#F3DE83" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={{ fontSize: 28, fontWeight: '800', color: '#6EC1E4', textAlign: 'center', marginBottom: 24 }}>
        Profile
      </Text>

      {/* Profile Image */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={{ width: 128, height: 128, borderRadius: 64 }} />
        ) : (
          <View style={{ width: 128, height: 128, backgroundColor: '#3A3B5C', borderRadius: 64, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 48, color: 'white' }}>👤</Text>
          </View>
        )}
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            onPress={pickImage}
            style={{ backgroundColor: '#6EC1E4', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, marginRight: 8 }}
          >
            <Text style={{ color: 'white', fontWeight: '600' }}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCamera}
            style={{ backgroundColor: '#F3DE83', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 }}
          >
            <Text style={{ color: '#0A0E21', fontWeight: '700' }}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Name + Email */}
      <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', marginBottom: 4 }}>
        {userData.name}
      </Text>
      <Text style={{ fontSize: 14, color: '#aaa', marginBottom: 24 }}>
        {userData.email}
      </Text>

      {/* Club-Only Menu */}
      {userType === 'club' && (
        <TouchableOpacity
          onPress={() => router.push('/my-events')}
          style={{ backgroundColor: '#1D1E33', borderRadius: 12, padding: 16, marginBottom: 12, width: '85%' }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>My Events</Text>
        </TouchableOpacity>
      )}

      {/* Universal Options */}
      <TouchableOpacity
        onPress={() => router.push('/change-password')}
        style={{ backgroundColor: '#1D1E33', borderRadius: 12, padding: 16, marginBottom: 12, width: '85%' }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Logging out...')}
        style={{ backgroundColor: '#6EC1E4', borderRadius: 12, padding: 16, marginTop: 12, width: '85%' }}
      >
        <Text style={{ color: '#0A0E21', fontWeight: '700', textAlign: 'center' }}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
