import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blue,
      },
      title: 'Stock options lookup 🐈‍🐈'
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
