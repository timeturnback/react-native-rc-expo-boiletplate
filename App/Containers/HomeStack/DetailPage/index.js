import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
//
import SimpleBottomButton from "@app/Components/SimpleBottomButton";
//
import { ROUTE_NAME } from "@app/Navigation/RouteName";
import { useDispatch } from "react-redux";
import { UserRedux } from "@app/ReduxSaga/reducers";

const DetailPage = ({ route, navigation }) => {
  const [title, setTitle] = useState();

  const dispatch = useDispatch();
  const pushDetailInfo = useCallback(
    (data) => dispatch(UserRedux.Creators.pushDetailInfo(data)),
    [dispatch]
  );
  const popDetailInfo = useCallback(
    (data) => dispatch(UserRedux.Creators.popDetailInfo(data)),
    [dispatch]
  );

  const { lastPage } = route.params || {};

  useEffect(() => {
    const num = parseInt(Math.random() * 1000);
    setTitle(num);
    pushDetailInfo({ lastPage, numberId: num });
  }, []);

  return (
    <View style={styles.container}>
      <Text>DetailPage</Text>
      <Text>ID : {title}</Text>
      <SimpleBottomButton
        title={"Open drawer"}
        onPress={() => navigation.openDrawer()}
      />
      <SimpleBottomButton
        title={"Open detail page"}
        onPress={() =>
          navigation.push(ROUTE_NAME.DETAIL_PAGE, { lastPage: title })
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
          popDetailInfo();
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

export default DetailPage;
