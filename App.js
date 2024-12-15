import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Activity1">
        <Stack.Screen name="Activity1" component={HomeScreen} />
        <Stack.Screen name="Activity2" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
