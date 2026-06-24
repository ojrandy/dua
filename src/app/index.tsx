import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-y-4">
      <Text className="h1 text-center color-primary"> Smart Meals </Text>
      <Text className="body-lg text-center color-primary">
        Healthy Meals Tailored to Your Needs
      </Text>
      <Link href="/onboarding" className="mt-8 color-primary h3">
        Go to Onboarding Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
