import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import SimpleBottomButton from "@app/Components/SimpleBottomButton";
//
import { ROUTE_NAME } from "@app/Navigation/RouteName";

const CategoryPage = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoryPage</Text>
      <SimpleBottomButton
        title={"Open drawer"}
        onPress={() => navigation.openDrawer()}
      />
      <SimpleBottomButton
        title={"Open detail page"}
        onPress={() =>
          navigation.push(ROUTE_NAME.DETAIL_PAGE, { lastPage: "Category" })
        }
      />
      <SimpleBottomButton
        title={"Open category page"}
        onPress={() => navigation.push(ROUTE_NAME.CATEGORY_PAGE)}
      />
      <SimpleBottomButton
        title={"Back"}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryPage;
