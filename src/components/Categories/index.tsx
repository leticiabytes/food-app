import { useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { categoriesData } from "./data";

export function Categories() {
  const [activeCategory, setActiveCategory] = useState(-1);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{ paddingHorizontal: 15 }}
    >
      {categoriesData.map((cat, index) => {
        let activeButtonClass =
          activeCategory === cat.id ? " bg-amber-400" : " bg-black/10";
        return (
          <TouchableOpacity
            delayPressOut={0.1}
            className="flex items-center space-y-1"
            onPress={() => setActiveCategory(cat.id)}
          >
            <View
              key={index}
              className="flex items-center justify-center space-y-1"
            >
              <View
                className={"rounded-full p-2 w-12 h-12" + activeButtonClass}
              >
                <Text className="text-2xl">{cat.image}</Text>
              </View>

              <Text className="text-neutral-600" style={{}}>
                {cat.categoryName}
              </Text>
              <Text className="text-amber-400"> </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
