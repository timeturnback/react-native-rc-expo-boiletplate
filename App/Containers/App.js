import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
//
import "../Config";
import DebugConfig from "../Config/DebugConfig";
//
import { Provider } from "react-redux";
import createStore from "../ReduxSaga/Redux";
//
import RootContainer from "./RootContainer";
import cacheAssetsAsync from "@app/Utilities/cacheAssetsAsync";

const store = createStore();

const App = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    requestTrackingPermissionsAsync();
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheAssetsAsync}
        onFinish={() => {
          setReady(true);
        }}
        // eslint-disable-next-line react/jsx-handler-names
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

// eslint-disable-next-line no-console
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
