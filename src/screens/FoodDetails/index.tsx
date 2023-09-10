import { ScrollView, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

export function FoodDetails() {
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 16 }}
    >
      <StatusBar style={"dark"} />

      <View className="flex-row justify-center">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80",
          }}
          resizeMode="center"
          style={{
            width: "100%",
            height: 250,
            borderRadius: 10,
            marginTop: 48,
          }}
        />
      </View>
    </ScrollView>
  );
}
