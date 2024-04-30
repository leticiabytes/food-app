import { View, Text, Pressable, Image } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import MasonryList from "@react-native-seoul/masonry-list";

import { RootStackParamList } from "../../navigation";
import { truncatedName } from "../../utils/truncatedName";

import { IFood } from "../../interfaces/IFood";

type FoodProps = {
  foods: IFood[];
  categorySelected: string | null;
};

type FoodCardProps = {
  item: IFood;
  index: number;
};

export function Foods({ foods, categorySelected }: FoodProps) {
  return (
    <View className="mx-4 space-y-3">
      <Text className="font-semibold text-neutral-600 text-xl">
        {categorySelected ?? "Foods"}
        <Text className="font-medium text-neutral-400"> ({foods.length})</Text>
      </Text>
      <MasonryList
        data={foods}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => (
          <FoodCard item={item as IFood} index={i} />
        )}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const FoodCard = ({ item, index }: FoodCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isEven = index % 2 === 0;

  return (
    <Pressable
      key={item.id}
      style={{
        width: "100%",
        paddingLeft: isEven ? 0 : 8,
        paddingRight: isEven ? 8 : 0,
      }}
      onPress={() => navigation.navigate("FoodDetails", { ...item })}
      className="flex justify-center mb-2 "
    >
      <View className="">
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: index % 3 === 0 ? 150 : 255,
            borderRadius: 16,
          }}
          className="bg-black/5"
        />
        <View className="absolute bg-white/90 rounded-full p-2 mt-2 right-2">
          <Text className="text-orange-500 font-bold">$ {item.price}</Text>
        </View>
      </View>
      <View className="mt-1 mb-2">
        <Text className="font-semibold mt-1 text-neutral-600">
          {truncatedName(item.name)}
        </Text>
      </View>
    </Pressable>
  );
};
