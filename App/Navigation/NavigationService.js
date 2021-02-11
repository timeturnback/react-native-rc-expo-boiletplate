import { NavigationActions, StackActions } from "react-navigation";
let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export function navigate(routeName, params) {
  let navObj = {
    routeName,
    params
  };
  _navigator.dispatch(NavigationActions.navigate(navObj));
}

export function replace(routeName, params) {
  let navObj = {
    routeName,
    params
  };
  _navigator.dispatch(StackActions.replace(navObj));
}

export function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

export function resetStack(stackName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: stackName })]
  });
  _navigator.dispatch(resetAction);
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  replace,
  resetStack
};
