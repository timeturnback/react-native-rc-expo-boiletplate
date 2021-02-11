import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text
} from "react-native";
//
import HomeStack from "../Navigation/AppNavigation";
import NavigationService from "@app/Navigation/NavigationService";
//
import { useSelector } from "react-redux";
import { AppRedux } from "../ReduxSaga/reducers";
//
import { TEST_MODE_ON, DEV_VERSION } from "@app/Config";
//
import { Colors, Fonts } from "@app/Themes";

const RootContainer = () => {
  const { globalLoading } = useSelector((state) => {
    const { globalLoading } = AppRedux.getReducerState(state);
    return {
      globalLoading
    };
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.applicationView}>
        {/* <StatusBar barStyle="light-content" /> */}
        <HomeStack
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </SafeAreaView>
      {TEST_MODE_ON ? (
        <Text style={styles.versionText}>{DEV_VERSION}</Text>
      ) : null}
      {globalLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating color={Colors.grey3} size="large" />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  applicationView: {
    flex: 1,
    backgroundColor: Colors.white
  },
  loading: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.blackTranparent06
  },
  versionText: {
    position: "absolute",
    fontSize: Fonts.size.tiny,
    bottom: 0
  }
});

export default RootContainer;
