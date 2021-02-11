import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
//
import { Fonts, Metrics, Colors } from "@app/Themes";

const SimpleTagSelectGroup = ({
  data,
  titleExtractor,
  selectedIndex,
  setSelectedIndex,
  label,
  hideError,
  roundTag,
  error
}) => (
  <View style={styles.container}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <View style={styles.tagContainer}>
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <TouchableOpacity
            key={`${index}`}
            style={[
              styles.tag,
              roundTag ? styles.roundTag : null,
              isSelected ? styles.tagSelected : null
            ]}
            onPress={() => {
              setSelectedIndex(index);
            }}
          >
            <Text
              style={[styles.btText, isSelected ? styles.textSelected : null]}
            >
              {titleExtractor(item, index)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    {!hideError || error ? (
      <Text style={styles.error}>{error || " "}</Text>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: Metrics.baseMargin
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  label: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    marginBottom: Metrics.baseMargin,
    color: Colors.black
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Metrics.baseMargin,
    margin: Metrics.smallMargin,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.gray3
  },
  roundTag: {
    width: 44,
    height: 44,
    borderRadius: 22
  },
  tagSelected: {
    borderWidth: 0,
    backgroundColor: Colors.main
  },
  btText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    color: Colors.text
  },
  textSelected: {
    fontFamily: Fonts.type.medium,
    color: Colors.white
  }
});

export default SimpleTagSelectGroup;
