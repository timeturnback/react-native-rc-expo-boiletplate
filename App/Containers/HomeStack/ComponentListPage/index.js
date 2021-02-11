import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
//
import SimpleBottomButton from "@app/Components/SimpleBottomButton";
import SimpleDependentInput from "@app/Components/SimpleDependentInput";
import SimpleInput from "@app/Components/SimpleInput";
import SimpleMoneyInput from "@app/Components/SimpleMoneyInput";
//
import { Colors, Fonts, Metrics } from "@app/Themes";

const ComponentListPage = () => {
  const [dependentValue, setDependentValue] = useState();
  const [simpleInput, setSimpleInput] = useState();
  const [money, setMoney] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ComponentListPage</Text>
      <View style={styles.body}>
        <SimpleBottomButton
          title={"Button"}
          onPress={() => {
            Alert.alert("Button");
          }}
        />
        <SimpleDependentInput
          label={"SimpleDependentInput"}
          value={dependentValue}
          onChangeText={(text) => {
            setDependentValue(text);
          }}
        />
        <SimpleInput
          label={"SimpleInput"}
          value={simpleInput}
          onChangeText={(text) => {
            setSimpleInput(text);
          }}
        />
        <SimpleMoneyInput
          label={"SimpleMoneyInput"}
          value={money}
          onChangeText={(text) => {
            setMoney(text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.background,
    alignItems: "center"
  },
  title: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.input,
    color: Colors.main
  },
  //
  body: {
    padding: Metrics.doubleBaseMargin,
    alignItems: "center"
  }
});

export default ComponentListPage;
