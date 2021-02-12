import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";

const ApplicationStyles = {
  line90p: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: Colors.gray2
  },
  //
  errorText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    textAlign: "center",
    color: Colors.error
  },
  //
  shadow5: {
    shadowColor: Colors.blackColor,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 1 },
    elevation: 5
  },
  shadow2: {
    shadowColor: Colors.main,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { height: 4, width: 4 },
    elevation: 3
  }
};

export default ApplicationStyles;
