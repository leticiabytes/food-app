import { View, Text, Pressable, Image } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

import { foodData } from "./data";

type FoodProps = {
  foods: FoodsProps[];
  categories: CategoriesProps[];
};

type CategoriesProps = {
  id: number;
  name: string;
};

type FoodsProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function Foods({ categories, foods }: FoodProps) {
  return (
    <View className="mx-4 space-y-3">
      <Text className="font-semibold text-neutral-600">Recipes</Text>
      <MasonryList
        data={foodData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const RecipeCard = ({ item, index }: any) => {
  let isEven = index % 2 == 0;
  return (
    <Pressable
      style={{
        width: "100%",
        paddingLeft: isEven ? 0 : 8,
        paddingRight: isEven ? 8 : 0,
      }}
      className="flex justify-center mb-2 "
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: "100%",
          height: index % 3 === 0 ? 150 : 255,
          borderRadius: 16,
        }}
        className="bg-black/5"
        // sharedTransitionTag={item.title}
      />
      <View className="flex justify-between flex-row mt-1 mb-2">
        <Text className="font-semibold mt-1 text-neutral-600">
          {item.title.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title}
        </Text>
        <Text className="text-amber-500 mt-1 weight-bold">{item.price}</Text>
      </View>
    </Pressable>
  );
};
