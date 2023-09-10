import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, View, TouchableOpacity } from "react-native";

import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";

export function FoodDetails() {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);

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

      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14 mt-2"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-8 bg-white"
        >
          <ChevronLeftIcon size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          className="p-2 rounded-full  bg-white"
        >
          {isFavorite ? (
            <HeartIconSolid size={28} color="red" />
          ) : (
            <HeartIcon size={28} color="grey" />
          )}
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
