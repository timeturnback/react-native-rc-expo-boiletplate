import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
//
import { addThousandSeparator } from "@app/Utilities/utils";
//
import { Colors, Fonts, Metrics } from "@app/Themes";

const MAX_DEPENDENT = 20;
const MAX_SELECT_NUM = 6;

const SimpleDependentInput = ({
  containerStyle,
  style,
  //
  label,
  value,
  onChangeText,
  error,
  //
  disabled,
  round = true,
  grayBackground,
  multiline,
  hideError,
  //
  onFocus,
  onBlur,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSelectTag, setShowSelectTag] = useState(true);
  const _onFocus = () => {
    setIsFocused(true);
    setShowSelectTag(true);
    onFocus && onFocus();
  };
  const _onBlur = () => {
    setIsFocused(false);
    setShowSelectTag(false);
    onBlur && onBlur();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.textInputLine}>
        <View
          style={[
            styles.textInputContainer,
            isFocused ? styles.isFocused : null,
            round && !multiline ? styles.round : null,
            grayBackground ? styles.grayBackground : null,
            disabled ? styles.disabled : null
          ]}
        >
          <TextInput
            style={[styles.textInput, style]}
            placeholderTextColor={Colors.gray3}
            editable={!disabled}
            multiline={multiline}
            value={value}
            onFocus={_onFocus}
            onBlur={_onBlur}
            onChangeText={(text) => {
              if (isNaN(text)) {
                onChangeText("0");
              } else if (parseInt(text, 10) > MAX_DEPENDENT) {
                onChangeText(`${MAX_DEPENDENT}`);
              } else {
                onChangeText(`${parseInt(text, 10)}`);
              }
            }}
            {...otherProps}
          />
        </View>
      </View>
      {showSelectTag ? (
        <MoneyAmountSelect
          onPickAmount={(amount) => {
            Keyboard.dismiss();
            setShowSelectTag(false);
            onChangeText(`${amount}`);
          }}
        />
      ) : null}
      {!hideError || error ? (
        <Text style={styles.error}>{error || " "}</Text>
      ) : null}
    </View>
  );
};

const MoneyAmountSelect = ({ onPickAmount }) => {
  let am = 1;
  const amountArray = [];
  while (am <= MAX_SELECT_NUM) {
    amountArray.push(am);
    am++;
  }
  return (
    <View style={styles.amountSelectContainer}>
      {amountArray.map((amount) => (
        <TouchableOpacity
          key={`${amount}`}
          style={styles.tagSelect}
          onPress={() => {
            onPickAmount(amount);
          }}
        >
          <Text style={styles.tagPicker}>{addThousandSeparator(amount)}</Text>
        </TouchableOpacity>
      ))}
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
  //
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    //
    backgroundColor: Colors.gray1
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    paddingVertical: Metrics.oneHalfMargin,
    paddingHorizontal: Metrics.baseMargin + Metrics.oneHalfMargin
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
  },
  amountSelectContainer: {
    padding: Metrics.baseMargin,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tagSelect: {
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    margin: Metrics.smallMargin,
    borderWidth: 1,
    borderColor: Colors.gray5,
    borderRadius: 50
  },
  tagPicker: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    color: Colors.black
  }
});

export default SimpleDependentInput;
