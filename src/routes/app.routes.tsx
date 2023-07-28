import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { FoodCreation } from "@screens/FoodCreation";
import { EditionScreen } from "@screens/EditionScreen";
import React from "react";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home} />
            <Screen name="edit" component={EditionScreen} />
            <Screen name="creation" component={FoodCreation} />z
        </Navigator>
    );
}