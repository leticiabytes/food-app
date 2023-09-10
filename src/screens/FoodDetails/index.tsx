import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, View, TouchableOpacity, Text } from "react-native";

import {
  ChevronLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon as HeartIconSolid,
  StarIcon,
} from "react-native-heroicons/solid";

import { IFood } from "../../interfaces/IFood";

import { AddOn } from "../../components/AddOn";

export default function FoodDetails(props: NativeStackScreenProps<any, any>) {
  const navigation = useNavigation();
  const item = props.route.params as IFood;

  const [isFavorite, setIsFavorite] = useState(false);
  const [countUnit, setCountUnit] = useState(1);

  return (
    <View className="bg-white flex-1">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 16 }}
      >
        <StatusBar style={"dark"} />

        <View className="flex-row justify-center">
          <Image
            source={{
              uri: item.image,
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
              {item.name}
            </Text>

            <View className="flex-row items-center gap-x-2">
              <StarIcon size={20} color="#f97316" />

              <View className="flex-row">
                <Text className="font-bold">4.5</Text>
                <Text className="text-neutral-400 ml-2">(30+)</Text>
                <Text className="text-orange-500 ml-2 text underline">
                  See Review
                </Text>
              </View>
            </View>

            <View className="pt-2 flex-row justify-between">
              <Text className="font-bold text-2xl text-orange-500">
                $ {item.price}
              </Text>

              <View className="flex-row gap-x-4 items-center">
                <TouchableOpacity
                  onPress={() => setCountUnit(countUnit - 1)}
                  className="p-2 rounded-full border-2 border-orange-500 bg-white"
                >
                  <MinusIcon size={18} color="#f97316" strokeWidth={4} />
                </TouchableOpacity>
                <Text className="text-2xl">{countUnit}</Text>
                <TouchableOpacity
                  onPress={() => setCountUnit(countUnit + 1)}
                  className="p-2 rounded-full bg-orange-500"
                >
                  <PlusIcon size={18} color="white" strokeWidth={4} />
                </TouchableOpacity>
              </View>
            </View>

            <Text className="pt-4 text-neutral-400 text-md">
              {item.description}
            </Text>
          </Animated.View>
        </View>

        <View className="mt-4">
          <Text className="font-bold text-xl">Choice of Add On</Text>

          <AddOn name="Pepper Julienned" price={2.3} image="🌶" />
          <AddOn name="Salad Spinach" price={4.7} image="🥗" />
          <AddOn name="Bacon" price={2.7} image="🥓" />
        </View>
      </ScrollView>

      <View className="bottom-8 justify-center">
        <View className="justify-center flex-row">
          <View className="w-[167px] flex-row items-center rounded-full bg-orange-500 p-[6px]">
            <View className="bg-white rounded-full p-3">
              <ShoppingBagIcon size={18} color="#f97316" />
            </View>
            <Text className="mb-1 text-white font-bold px-3 tracking-wider">
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
