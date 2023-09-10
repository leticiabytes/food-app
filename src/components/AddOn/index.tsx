import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  price: number;
  image: string;
};

export function AddOn({ name, price, image }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <View className="pt-4 gap-y-2">
      <View className="flex-row justify-between">
        <Text className="text-md">
          <Text className="text-xl">{image} </Text>
          {name}
        </Text>

        <View className="flex-row gap-x-4 items-center">
          <Text className="text-md">+ ${price}</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setSelected(!selected)}
          >
            <View className="w-6 h-6 border-2 border-gray-500 justify-center items-center rounded-full">
              {selected && (
                <View className="w-3 h-3 bg-orange-500 rounded-full" />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
