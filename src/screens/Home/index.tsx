import { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, TextInput } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import { Category, Food } from "../../interfaces/IData";

import { Categories } from "../../components/Categories";
import { Foods } from "../../components/Foods";

import { shuffleArray } from "../../utils/shuffleArray";

import { data } from "../../constants/data";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [foods, setFoods] = useState<Food[]>([]);
  const { categories } = data;

  const setFoodsByCategory = (categoryId: number | null) => {
    if (categoryId === null) {
      const allFoods: Food[] = categories.reduce(
        (all, category) => [...all, ...category.foods],
        [] as Food[]
      );
      setFoods(shuffleArray(allFoods));
    } else {
      const selectedCategory: Category | undefined = categories.find(
        (category) => category.id === categoryId
      );

      if (selectedCategory) {
        setFoods(selectedCategory.foods);
      }
    }
    setActiveCategory(categoryId);
  };

  const handleChangeCategory = (idCategory: number | null) => {
    setFoodsByCategory(idCategory);
  };

  useEffect(() => {
    setFoodsByCategory(null);
  }, []);

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-4"
      >
        <StatusBar style="dark" />
        <View className="mx-4 flex-row justify-between items-center">
          <Image
            source={require("../../../assets/images/bighead.png")}
            style={{ height: 48, width: 48, borderRadius: 100 }}
          />
          <View className="flex items-center">
            <View className="flex flex-row items-center">
              <Text className="text-neutral-600 font-semibold">
                Delivery to{" "}
              </Text>
              <ChevronDownIcon size={14} color="gray" />
            </View>
            <Text className=" text-amber-500">4026 Pretty View Lane</Text>
          </View>
          <BellIcon size={28} color="gray" />
        </View>

        <View className="mx-4 space-y-1">
          <Text className="text-neutral-600 text-xl">Hi, John Doe</Text>
          <View>
            <Text className="font-semibold text-neutral-600 text-2xl">
              What would you like to{" "}
              <Text className="text-amber-500">order</Text> today?
            </Text>
          </View>
        </View>

        <View className="flex-row mx-4">
          <View className="mr-4 flex-1 flex-row items-center rounded-full bg-black/5 p-[6px] ">
            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon size={18} strokeWidth={3} color="gray" />
            </View>
            <TextInput
              placeholder="Find for food or restaurant..."
              placeholderTextColor="gray"
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
          </View>
          <View className="bg-white rounded-lg p-3">
            <AdjustmentsHorizontalIcon size={32} color="#f59e0b" />
          </View>
        </View>

        <View>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>

        <View>
          <Foods foods={foods} />
        </View>
      </ScrollView>
    </View>
  );
}
