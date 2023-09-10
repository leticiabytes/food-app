import React, { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { View, Text, Image } from "react-native";

import { RootStackParamList } from "../../navigation";

export default function Welcome() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + 18)),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + 19)),
      300
    );

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <Image
            source={require("../../../assets/images/welcome.png")}
            style={{ width: 60, height: 60 }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest">Foody</Text>
        <Text className="font-medium text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
}
