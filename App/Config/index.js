import DebugConfig from "./DebugConfig";
import AppConfig from "./AppConfig"; // eslint-disable-line no-unused-vars
import { LogBox } from "react-native";

if (__DEV__) {
  LogBox.ignoreAllLogs(!DebugConfig.yellowBox);
}

export const TEST_MODE_ON = false;
export const DEV_VERSION = "0.0.1";
