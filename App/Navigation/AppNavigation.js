import React from "react";
//
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { navigationRef } from "./NavigationService";
//
import Home from "@app/Containers/HomeStack/Home";
import DetailPage from "@app/Containers/HomeStack/DetailPage";
import CategoryPage from "@app/Containers/HomeStack/CategoryPage";
import NotificationsScreen from "@app/Containers/Notifications/NotificationsScreen";
//
import { ROUTE_NAME } from "./RouteName";
//
import styles from "./Styles/NavigationStyles";
import CustomDrawerContent from "@app/Components/CustomDrawerContent";
//
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={ROUTE_NAME.HOME}
    screenOptions={{
      headerShown: false,
      headerStyle: styles.header
    }}
  >
    <Stack.Screen name={ROUTE_NAME.HOME} component={Home} />
    <Stack.Screen name={ROUTE_NAME.DETAIL_PAGE} component={DetailPage} />
    <Stack.Screen name={ROUTE_NAME.CATEGORY_PAGE} component={CategoryPage} />
  </Stack.Navigator>
);

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
