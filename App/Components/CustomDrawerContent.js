import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const CustomDrawerContent = () => {
  const topItem = useSelector(
    (state) => state.user.detailInfo?.[state.user.detailInfo.length - 1]
  );

  return (
    <View style={styles.container}>
      <Text>CustomDrawerContent</Text>
      <Text>Last page : {topItem?.lastPage}</Text>
      <Text>Current page : {topItem?.numberId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawerContent;
