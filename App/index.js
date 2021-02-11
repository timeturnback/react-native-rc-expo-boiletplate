import React from "react";
import "./Config/ReactotronConfig";
//
import App from "./Containers/App";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Warning: componentWill",
  "Possible Unhandle",
  "Push Notification"
]);

export default () => <App />;
