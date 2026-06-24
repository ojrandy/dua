import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="h1 text-center color-primary"> Smart Meals </Text>
      <Text className="body-lg text-center color-primary">
        Healthy Meals Tailored to Your Needs
      </Text>
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
