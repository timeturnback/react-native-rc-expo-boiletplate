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
import {
  addThousandSeparator,
  stripNonNumbericChar
} from "@app/Utilities/utils";
//
import { Colors, Fonts, Metrics } from "@app/Themes";

const SimpleMoneyInput = ({
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
  hideError,
  //
  onFocus,
  onBlur,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSelectTag, setShowSelectTag] = useState(false);
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
            round ? styles.round : null,
            grayBackground ? styles.grayBackground : null,
            disabled ? styles.disabled : null
          ]}
        >
          <TextInput
            keyboardType={"number-pad"}
            style={[styles.textInput, style]}
            placeholderTextColor={Colors.gray3}
            editable={!disabled}
            value={value}
            onFocus={_onFocus}
            onBlur={_onBlur}
            onChangeText={onChangeText}
            {...otherProps}
          />
        </View>
      </View>
      {value && showSelectTag ? (
        <MoneyAmountSelect
          value={value}
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

const MoneyAmountSelect = ({ value, onPickAmount }) => {
  const calcValue = parseInt(stripNonNumbericChar(value), 10);
  let amountArray = [];
  let am = calcValue;
  while (am < 10000) am *= 10;
  while (am < 999000000) {
    amountArray.push(am);
    am *= 10;
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

export default SimpleMoneyInput;
