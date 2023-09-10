import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, View, TouchableOpacity, Text } from "react-native";

import {
  ChevronLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon as HeartIconSolid,
  StarIcon,
} from "react-native-heroicons/solid";

export function FoodDetails() {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [countUnit, setCountUnit] = useState(1);

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

      <View className="flex justify-between space-y-4 pt-3">
        <Animated.View
          entering={FadeInDown.duration(700).springify().damping(12)}
          className="space-y-2"
        >
          <Text className="text-3xl font-bold flex-1 text-primary">
            Buguer Mesh
          </Text>

          <View className="flex-row items-center gap-x-2">
            <StarIcon size={20} color="#FFC529" />

            <View className="flex-row">
              <Text className="font-bold">4.5</Text>
              <Text className="text-neutral-400 ml-2">(30+)</Text>
              <Text className="text-amber-500 ml-2 text underline">
                See Review
              </Text>
            </View>
          </View>

          <View className="pt-2 flex-row justify-between">
            <Text className="font-bold text-2xl text-amber-500">$ 12.50</Text>

            <View className="flex-row gap-x-4 items-center">
              <TouchableOpacity
                onPress={() => setCountUnit(countUnit - 1)}
                className="p-2 rounded-full border-2 border-amber-500 bg-white"
              >
                <MinusIcon size={18} color="#FFC529" />
              </TouchableOpacity>
              <Text className="text-2xl">{countUnit}</Text>
              <TouchableOpacity
                onPress={() => setCountUnit(countUnit + 1)}
                className="p-2 rounded-full bg-amber-500"
              >
                <PlusIcon size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
}
