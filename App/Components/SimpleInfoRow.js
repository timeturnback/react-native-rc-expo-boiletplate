import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { Metrics, Fonts, Colors } from "@app/Themes";

const SimpleInfoRow = ({ title, bold, value, hideValue }) => (
  <View style={styles.infoRow}>
    <Text style={[styles.title, bold ? styles.textMedium : null]}>{title}</Text>
    <Text style={[styles.value, bold ? styles.textMedium : null]}>
      {hideValue ? " " : value ? value : "N/A"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Metrics.baseMargin
  },
  title: {
    flex: 1,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: Colors.gray5
  },
  value: {
    flex: 1,
    textAlign: "right",
    alignItems: "flex-end",
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: Colors.gray5
  },
  textMedium: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.input,
    color: Colors.black
  }
});

export default SimpleInfoRow;
