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
  big50: 50,
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 22,
  h6: 19,
  input: 17,
  regular: 15,
  medium: 13,
  small: 11,
  tiny: 8.5
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: "bold",
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  header: {
    fontFamily: type.medium,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
};

export default {
  assets,
  type,
  size,
  style
};
