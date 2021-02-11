import ReduxPersist from "../Config/ReduxPersist";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore } from "redux-persist";
//
import DebugConfig from "../Config/DebugConfig";
import { StartupRedux } from "../ReduxSaga/reducers";

const updateReducers = (store) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const startup = () => store.dispatch(StartupRedux.Creators.startup());

  // Check to ensure latest reducer version
  AsyncStorage.getItem("reducerVersion")
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: "PURGE",
            value: {
              "Old Version:": localVersion,
              "New Version:": reducerVersion
            },
            preview: "Reducer Version Change Detected",
            important: true
          });
        }
        // Purge store
        persistStore(store, null, startup).purge();
        AsyncStorage.setItem("reducerVersion", reducerVersion);
      } else {
        persistStore(store, null, startup);
      }
    })
    .catch(() => {
      persistStore(store, null, startup);
      AsyncStorage.setItem("reducerVersion", reducerVersion);
    });
};

export default { updateReducers };
