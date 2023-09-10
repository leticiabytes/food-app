import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IFood } from "../interfaces/IFood";

import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import FoodDetails from "../screens/FoodDetails";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  FoodDetails: IFood;
};

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
