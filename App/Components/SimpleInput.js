import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
//
import { Colors, Fonts, Metrics } from "@app/Themes";
import { Entypo } from "@expo/vector-icons";

const SimpleInput = ({
  containerStyle,
  style,
  //
  label,
  value,
  onChangeText,
  error,
  // left - right
  leftInnerComp,
  leftOuterComp,

  rightInnerComp,
  rightOuterComp,
  //
  passwordField,
  disabled,
  round = true,
  grayBackground,
  multiline,
  hideError,
  secureTextEntry,
  //
  onFocus,
  onBlur,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureEntry, setSecureEntry] = useState(
    secureTextEntry || passwordField
  );
  const _onFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };
  const _onBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  const rightInner = passwordField ? (
    <TouchableOpacity
      style={styles.buttonPadding5}
      onPress={() => setSecureEntry(!secureEntry)}
    >
      <Entypo
        name={secureEntry ? "eye" : "eye-with-line"}
        size={18}
        color={Colors.gray4}
      />
    </TouchableOpacity>
  ) : (
    rightInnerComp
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.textInputLine}>
        {leftOuterComp ? (
          <View style={styles.outer}>{leftOuterComp}</View>
        ) : null}
        <View
          style={[
            styles.textInputContainer,
            isFocused ? styles.isFocused : null,
            round && !multiline ? styles.round : null,
            grayBackground ? styles.grayBackground : null,
            disabled ? styles.disabled : null
          ]}
        >
          <View style={styles.inner}>{leftInnerComp}</View>
          <TextInput
            style={[styles.textInput, style]}
            placeholderTextColor={Colors.gray3}
            secureTextEntry={secureEntry}
            editable={!disabled}
            multiline={multiline}
            value={value}
            onFocus={_onFocus}
            onBlur={_onBlur}
            onChangeText={onChangeText}
            {...otherProps}
          />
          <View style={styles.inner}>{rightInner}</View>
        </View>
        {rightOuterComp ? (
          <View style={styles.outer}>{rightOuterComp}</View>
        ) : null}
      </View>
      {!hideError || error ? (
        <Text style={styles.error}>{error || " "}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center"
  },
  textInputLine: {
    width: "100%",
    flexDirection: "row"
  },
  label: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    marginBottom: Metrics.baseMargin,
    color: Colors.black
  },
  inner: {
    justifyContent: "center",
    alignItems: "center"
  },
  outer: {
    justifyContent: "center",
    alignItems: "center"
  },
  //
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    //
    backgroundColor: Colors.gray1,
    padding: Metrics.oneHalfMargin
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    paddingHorizontal: Metrics.baseMargin
  },
  isFocused: {
    borderWidth: 2,
    borderColor: Colors.main
  },
  disabled: {
    backgroundColor: Colors.gray2
  },
  //
  round: {
    borderRadius: 100
  },
  grayBackground: {
    backgroundColor: Colors.grayLight,
    borderWidth: 0
  },
  //
  error: {
    marginVertical: Metrics.smallMargin,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.error
  }
});

export default SimpleInput;
