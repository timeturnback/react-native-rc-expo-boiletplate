import { Dimensions, Platform } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  // screen
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  screen: {
    width: width < height ? width : height,
    height: width < height ? height : width
  },
  //
  radius: {
    item: moderateScale(8),
    medium: moderateScale(16),
    large: moderateScale(24)
  },
  borderRadius: moderateScale(8),
  borderRadiusM: moderateScale(16),
  borderRadiusL: moderateScale(24),

  margin: {
    small: scale(5),
    base: scale(10),
    medium: scale(15),
    double: scale(20),
    large: scale(30)
  },
  smallMargin: scale(5),
  baseMargin: scale(10),
  oneHalfMargin: scale(15),
  doubleBaseMargin: scale(20),
  largeBaseMargin: scale(30),

  horizontalLineHeight: 1,

  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: scale(15),
    small: scale(20),
    medium: scale(30),
    large: scale(45),
    xl: scale(50)
  },
  images: {
    small: scale(20),
    medium: scale(40),
    large: scale(60),
    logo: scale(200)
  }
};

export default metrics;
