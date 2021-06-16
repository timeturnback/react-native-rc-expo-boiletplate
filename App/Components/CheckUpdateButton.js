import React, { useEffect, useState, useCallback, useRef } from "react";
import { AppState, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Updates from "expo-updates";
//
import { AppRedux } from "@app/ReduxSaga/reducers";
import { useDispatch } from "react-redux";
//
import { moderateScale, scale } from "react-native-size-matters";
import { Colors, Fonts, Metrics } from "@app/Themes";

const CheckUpdateButton = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const appState = useRef();

  const dispatch = useDispatch();
  const showGlobalLoading = useCallback(
    () => dispatch(AppRedux.Creators.showGlobalLoading()),
    [dispatch]
  );
  const hideGlobalLoading = useCallback(
    () => dispatch(AppRedux.Creators.hideGlobalLoading()),
    [dispatch]
  );

  const checkForUpdate = async () => {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      setUpdateAvailable(true);
    }
  };
  useEffect(() => {
    checkForUpdate();
    appState.current = AppState.currentState;
    const _handleAppStateChange = (nextAppState) => {
      if (
        appState?.current?.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        checkForUpdate();
      } else if (appState?.current.match(/active/)) {
      }
      appState.current = nextAppState;
    };
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _forceUpdate = async () => {
    showGlobalLoading();
    try {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    } catch (e) {
      hideGlobalLoading();
    }
  };

  if (updateAvailable) {
    return (
      <TouchableOpacity style={styles.container} onPress={_forceUpdate}>
        <Text style={styles.textNormal}>App</Text>
        <Text style={styles.textBig}>Update</Text>
        <Text style={styles.textNormal}>available</Text>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  //
  container: {
    position: "absolute",
    right: scale(10),
    bottom: scale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    padding: Metrics.margin.base,

    justifyContent: "center",
    alignItems: "center",
    margin: Metrics.margin.base,
    shadowColor: Colors.main,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 16
  },
  textNormal: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    color: Colors.main
  },
  textBig: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.h5,
    color: Colors.main,
    textDecorationLine: "underline"
  }
});

export default CheckUpdateButton;
