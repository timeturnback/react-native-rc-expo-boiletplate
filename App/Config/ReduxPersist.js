import immutablePersistenceTransform from "../Services/ImmutablePersistenceTransform";
import AsyncStorage from "@react-native-community/async-storage";

const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.0",
  storeConfig: {
    key: "primary",
    storage: AsyncStorage,
    blacklist: ["app"],
    // whitelist: [],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
