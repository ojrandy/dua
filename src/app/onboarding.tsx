import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 px-6 pt-4 pb-6 justify-between">

        {/* Top Logo */}
        <View className="flex-row items-center justify-center gap-x-2">
          <Image source={images.mascotLogo} className="w-[44px] h-[44px]" resizeMode="contain" />
          <Text className="text-[28px] font-['Poppins-Bold'] text-text-primary mt-1">Dua</Text>
        </View>

        {/* Text Content */}
        <View className="items-center mt-8">
          <Text className="h1 text-center text-text-primary">
            Your AI language{"\n"}
            <Text className="color-primary">teacher.</Text>
          </Text>
          <Text className="body-lg text-text-secondary text-center mt-4 px-2">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot Image */}
        <View className="flex-1 w-full justify-center items-center mt-2">
          <Image
            source={images.mascotWelcome}
            className="w-[115%] h-[115%]"
            resizeMode="contain"
          />

          {/* Floating Bubbles */}
          <View
            className="absolute top-[5%] left-[2%] bg-[#F4F7FF] px-3 py-1.5 rounded-xl"
            style={{ transform: [{ rotate: '-8deg' }] }}
          >
            <Text className="font-['Poppins-Medium'] text-[12px] text-text-primary">Hello!</Text>
          </View>

          <View
            className="absolute -top-[2%] right-[5%] bg-[#F5F1FF] px-3 py-1.5 rounded-xl"
            style={{ transform: [{ rotate: '8deg' }] }}
          >
            <Text className="font-['Poppins-Medium'] text-[12px] color-primary">¡Hola!</Text>
          </View>

          <View
            className="absolute top-[32%] right-[-2%] bg-[#FFF2EE] px-3 py-1.5 rounded-xl"
            style={{ transform: [{ rotate: '8deg' }] }}
          >
            <Text className="font-['Poppins-Medium'] text-[12px] color-error">你好!</Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          className="bg-primary flex-row items-center justify-center py-[18px] rounded-[32px] mt-auto"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="text-white h3 mr-2">Get Started</Text>
          <SymbolView name="chevron.right" size={24} tintColor="white" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});
