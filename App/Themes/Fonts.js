import { scale } from "react-native-size-matters";

const assets = {
  Inter: require("@app/Assets/fonts/Inter-Regular.ttf"),
  InterBold: require("@app/Assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("@app/Assets/fonts/Inter-SemiBold.ttf"),
  InterLight: require("@app/Assets/fonts/Inter-Light.ttf"),
  RobotoItalic: require("@app/Assets/fonts/Roboto-Italic.ttf")
};

const type = {
  base: "Inter",
  medium: "InterSemiBold",
  bold: "InterBold",
  light: "InterLight",
  italic: "RobotoItalic"
};

const size = {
  big50: scale(50),
  h1: scale(38),
  h2: scale(34),
  h3: scale(30),
  h4: scale(26),
  h5: scale(22),
  h6: scale(10),
  input: scale(18),
  regular: scale(16),
  medium: scale(14),
  small: scale(12),
  tiny: scale(8.5)
};

export default {
  assets,
  type,
  size
};
