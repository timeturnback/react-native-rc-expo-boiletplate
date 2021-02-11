import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//
import Home from "@app/Containers/HomeStack/Home";
import ComponentListPage from "@app/Containers/HomeStack/ComponentListPage";
//
import { ROUTE_NAME } from "./RouteName";
//
import styles from "./Styles/NavigationStyles";

const HomeStack = createStackNavigator(
  {
    [ROUTE_NAME.HOME]: { screen: Home },
    [ROUTE_NAME.COMPONENT_LIST_PAGE]: { screen: ComponentListPage }
  },
  {
    headerMode: "none",
    initialRouteName: ROUTE_NAME.HOME,
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(HomeStack);
