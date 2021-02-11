import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//
import { Metrics, Colors, Fonts } from "@app/Themes";

const SimpleBottomButton = ({ title, onPress }) => (
  <View style={styles.bottomButtonRow}>
    <TouchableOpacity style={styles.bottomBt} onPress={onPress}>
      <Text style={styles.btText}>{title}</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  bottomButtonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: Metrics.baseMargin
  },
  bottomBt: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.main,
    borderRadius: 50
  },
  btText: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
    color: Colors.white
  }
});
export default SimpleBottomButton;
