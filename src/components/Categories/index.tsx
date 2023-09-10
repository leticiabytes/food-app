import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import { ICategory } from "../../interfaces/ICategory";
import { useId } from "react";

type Props = {
  categories: ICategory[];
  activeCategory: number | null;
  handleChangeCategory: (id: number) => void;
};

export function Categories({
  categories,
  activeCategory,
  handleChangeCategory,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{ paddingHorizontal: 15 }}
    >
      {categories.map((item: ICategory) => {
        let activeButtonClass =
          activeCategory === item.id ? " bg-orange-500" : " bg-black/10";
        return (
          <TouchableOpacity
            delayPressOut={0.1}
            key={item.id}
            className="flex items-center space-y-1"
            onPress={() => handleChangeCategory(item.id)}
          >
            <View className="flex items-center justify-center space-y-1">
              <View
                className={
                  "items-center justify-center rounded-full p-2 w-12 h-12" +
                  activeButtonClass
                }
              >
                <Text className="text-2xl">{item.image}</Text>
              </View>

              <Text className="text-neutral-600" style={{}}>
                {item.name}
              </Text>
              <Text className="text-amber-400"> </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
