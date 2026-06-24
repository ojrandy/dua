import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image as ExpoImage } from 'expo-image';
import { images } from '../../constants/images';
import { VerificationModal } from '../../components/VerificationModal';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = () => {
    if (email.trim() && password.trim()) {
      setShowModal(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {/* Title */}
        <Text className="text-[32px] font-['Poppins-Bold'] text-text-primary leading-tight">
          Create your account
        </Text>
        <Text className="body-lg text-text-secondary mt-2">
          Start your language journey today ✨
        </Text>

        {/* Mascot */}
        <View className="items-center mt-6 -mb-5 relative z-10">
          <View className="relative">
            <Image 
              source={images.mascotAuth} 
              className="w-[220px] h-[160px]" 
              resizeMode="contain" 
            />
            {/* Decorative Stars */}
            <Text className="absolute top-10 left-4 text-[#FFA033] text-2xl">✦</Text>
            <Text className="absolute top-8 right-10 text-[#7EB1FF] text-xl">✦</Text>
            <Text className="absolute top-20 right-4 text-[#FFD338] text-2xl">✦</Text>
          </View>
        </View>

        {/* Form */}
        <View className="mb-6 gap-y-4 z-0">
          <View className="border border-gray-200 rounded-2xl p-4 bg-white">
            <Text className="text-sm font-['Poppins-Medium'] text-text-secondary mb-1">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View className="border border-gray-200 rounded-2xl p-4 bg-white flex-row items-center">
            <View className="flex-1">
              <Text className="text-sm font-['Poppins-Medium'] text-text-secondary mb-1">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)} 
              className="p-2"
              accessibilityRole="button"
              accessibilityLabel={showPassword ? "Hide password" : "Show password"}
            >
              <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="#87909F" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-primary flex-row items-center justify-center py-4 rounded-full w-full"
          onPress={handleSignUp}
        >
          <Text className="text-white h3">Sign Up</Text>
        </TouchableOpacity>

        {/* Or separator */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="mx-4 text-text-secondary font-['Poppins-Medium']">or continue with</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* Social Buttons */}
        <View className="gap-y-4 mb-8">
          <TouchableOpacity className="flex-row items-center justify-center py-4 rounded-2xl border border-gray-200 bg-white">
            <View className="absolute left-6">
              <ExpoImage 
                source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} 
                style={{ width: 24, height: 24 }} 
              />
            </View>
            <Text className="h4 text-text-primary">Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center py-4 rounded-2xl border border-gray-200 bg-white">
            <View className="absolute left-6">
              <ExpoImage 
                source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }} 
                style={{ width: 26, height: 26 }} 
              />
            </View>
            <Text className="h4 text-text-primary">Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center py-4 rounded-2xl border border-gray-200 bg-white">
            <View className="absolute left-6">
              <ExpoImage 
                source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }} 
                style={{ width: 24, height: 24 }} 
              />
            </View>
            <Text className="h4 text-text-primary">Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Link */}
        <View className="flex-row justify-center items-center mt-auto pb-4">
          <Text className="text-text-secondary font-['Poppins-Medium']">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
            <Text className="text-primary font-['Poppins-Bold']">Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal 
        visible={showModal} 
        onClose={() => setShowModal(false)} 
        email={email}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#111827',
    padding: 0,
  }
});
