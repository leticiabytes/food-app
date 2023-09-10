import React, { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { View, Text, Image } from "react-native";

import { RootStackParamList } from "../../navigation";

export default function Welcome() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + 20)),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + 50)),
      300
    );

    setTimeout(() => navigation.navigate("Home"), 1000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-orange-500">
      <StatusBar style="light" />
      <View className="flex items-center space-y-2">
        <Text className="text-4xl font-bold text-white tracking-widest">
          Fast Food
        </Text>
        <Text className="font-medium text-center text-white tracking-widest max-w-[220px]">
          Your favourite foods delivered fast at your door.
        </Text>
      </View>
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <Image
            source={require("../../../assets/images/Pizza.png")}
            style={{ width: 300, height: 300 }}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
