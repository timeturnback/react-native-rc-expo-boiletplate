import React from "react";
//
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
//
import Home from "@app/Containers/HomeStack/Home";
import ComponentListPage from "@app/Containers/HomeStack/ComponentListPage";
//
import { ROUTE_NAME } from "./RouteName";
//
import styles from "./Styles/NavigationStyles";
//
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ROUTE_NAME.HOME}
        screenOptions={{
          headerShown: false,
          headerStyle: styles.header
        }}
      >
        <Stack.Screen name={ROUTE_NAME.HOME} component={Home} />
        <Stack.Screen
          name={ROUTE_NAME.COMPONENT_LIST_PAGE}
          component={ComponentListPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
