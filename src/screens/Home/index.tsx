import { View, ScrollView, Text, Image, TextInput } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { Categories } from "../../components/Categories";
import { Foods } from "../../components/Foods";

export default function Home() {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <View className="mx-4 flex-row justify-between items-center">
          <Image
            source={require("../../../assets/images/bighead.png")}
            style={{ height: 48, width: 48, borderRadius: 100 }}
          />
          <BellIcon size={28} color="gray" />
        </View>

        <View className="mx-4 space-y-1">
          <Text className="text-neutral-600 text-xl">Hi, John Doe!</Text>
          <View>
            <Text className="font-semibold text-neutral-600 text-2xl">
              What would you like to{" "}
              <Text className="text-amber-400">order</Text> today?
            </Text>
          </View>
        </View>

        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Find for food or restaurant..."
            placeholderTextColor={"gray"}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={18} strokeWidth={3} color="gray" />
          </View>
        </View>

        <View>
          <Categories />
        </View>

        <View>
          <Foods />
        </View>
      </ScrollView>
    </View>
  );
}
