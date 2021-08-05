import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { t } from "i18n-js";
//
import NavigationService from "@app/Navigation/NavigationService";
import { ROUTE_NAME } from "@app/Navigation/RouteName";
//
import SimpleBottomButton from "@app/Components/SimpleBottomButton";
//
import { Colors, Fonts } from "@app/Themes";
import { STR } from "@app/i18n/string";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(STR.home).toUpperCase()}</Text>
      <SimpleBottomButton
        title={"Detail page"}
        onPress={() => {
          NavigationService.navigate(ROUTE_NAME.DETAIL_PAGE, {
            lastPage: "Home"
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.input,
    color: Colors.main
  }
});

export default Home;
