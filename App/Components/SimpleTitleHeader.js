import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
//
import { Colors, Fonts, Metrics } from "@app/Themes";

const SimpleTitleHeader = ({
  navigation,
  containerStyle,
  title,
  btText,
  btCB
}) => {
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={btCB || _goBack}
    >
      <View style={styles.bt}>
        <Text style={styles.btText}>{btText || "Trở về"}</Text>
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Metrics.baseMargin,
    width: "100%"
  },
  headerTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    color: Colors.black
  },
  //
  bt: {
    paddingVertical: Metrics.smallMargin
  },
  btText: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.gray4
  }
});

export default withNavigation(SimpleTitleHeader);
