# A well done template for expo

#### react-native-rc-expo-template

## How to use

1. Clone the project
2. Copy those file on the list below

## Template file and folder to copy and how to use it

- [`App`](#App)
  - [`Assets`](#Assets)
  - [`Components`](#Components)
  - [`Config`](#Config)
  - [`i18n`](#i18n)
  - [`Navigation`](#Navigation)
  - [`ReduxSaga`](#ReduxSaga)
  - [`Services`](#Services)
  - [`Themes`](#Themes)
  - [`Utilities`](#Utilities)
  - [`index.js`](#index.js)
- [`.vscode/settings.json`](#.vscode/settings.json)
- [`.eslintignore`](#.eslintignore)
- [`.eslintrc.json`](#.eslintrc.json)
- [`.gitignore`](#.gitignore)
- [`.prettierrc.js`](#.prettierrc.js)
- [`babel.config.js`](#babel.config.js)
- [`jsconfig.json`](#jsconfig.json)
- [`package.json`](#package.json)
- [`onValueChange`](#onvaluechange)
- [`step`](#step)
- [`maximumTrackTintColor`](#maximumtracktintcolor)
- [`testID`](#testid)
- [`value`](#value)
- [`inverted`](#inverted)
- [`tapToSeek`](#tapToSeek)
- [`vertical`](#vertical)
- [`thumbTintColor`](#thumbtintcolor)
- [`maximumTrackImage`](#maximumtrackimage)
- [`minimumTrackImage`](#minimumtrackimage)
- [`thumbImage`](#thumbimage)
- [`trackImage`](#trackimage)
- [`ref`](#ref)

---

### `App`

Application structure . All FE running code will be here . I use index.js to represent the App.js in the expo init.

- `Assets`

Put your font and image here

- `Components`

#todo
For global component

- `Config`

App config

- `i18n`

For internation ( translate ) text

- `Navigation`

Navigation setting and route name and style

- `ReduxSaga`

#todo
ReduxSaga

- `Services`

#todo
Services

- `Themes`

#todo
Themes

- `Utilities`

#todo
Utilities

- `index.js`

Replacement for App.js by default 

---

### `.vscode/settings.json`

Contanst setting for static directory . for using @app

---

### `.eslintignore`

.eslintignore

---

### `.eslintrc.json`

eslint file for project . I use my rule that I found the best for my project . You can use your . Not so big deal.

This file will be update regularly to match the best practice I found.

---

### `.gitignore`

Standard react native expo .gitignore

---

### `.prettierrc.js`

Prettier setting

---

### `babel.config.js`

Contanst setting for static directory . for using @app

This file need to be replace with the default file , pls notice . if you only use copy it will become babel.config.js copy and can't be use

---

### `jsconfig.json`

Setting for using @app static directory

---

### `package.json`

#### Run script

| script                                                            | Purpose                                                                                 |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| "android": "expo start --android"                                 | start android develop                                                                   |
| "ios": "expo start --ios"                                         | start ios develop                                                                       |
| "build_ios": "expo build:ios --release-channel testflight"        | build ios for tesflight channel ( separate channel for OTA test )                       |
| "publish_testflight": "expo publish --release-channel testflight" | OTA for testflight channel                                                              |
| "publish_production": "expo publish"                              | OTA for production channel , I use default for production , you can use "prod-v1"       |
| "build_ios_production": "expo build:ios"                          | build ios for production channel , I use default for production , you can use "prod-v1" |

### Package

You can import the newest one of those package with this script , but I suggest you copy the one on the package.json

```
 expo install @react-native-community/async-storage expo-app-loading expo-status-bar i18n-js moment react-native-modal react-native-size-matters react-navigation react-navigation-stack react-native-gesture-handler react-native-reanimated @react-native-community/masked-view react-native-screens react-redux redux redux-persist redux-saga reduxsauce seamless-immutable
```

```
 expo install react-native-keyboard-aware-scroll-view react-native-picker-select react-native-root-toast @react-native-community/datetimepicker
```

| Package                                 | Purpose                                                            |
| --------------------------------------- | ------------------------------------------------------------------ |
| @react-native-community/async-storage   | For using async-storage , require for redux persist                |
| expo-app-loading                        | Apploading                                                         |
| expo-status-bar                         | Status bas                                                         |
| i18n-js                                 | For international                                                  |
| moment                                  | Time formating                                                     |
| react-native-modal                      | Modal use in app                                                   |
| react-native-size-matters               | Size matter for consistent UI android and ios                      |
| **OPTIONAL**                            |
| react-native-keyboard-aware-scroll-view | For scrollview not date time picker ( optional )                   |
| react-native-picker-select              | Picker select date time picker ( optional )                        |
| react-native-root-toast                 | For showing toast ( optional )                                     |
| @react-native-community/datetimepicker  | date time picker ( optional )                                      |
| **NAVIGATION**                          |
| react-navigation                        | For navigation                                                     |
| react-navigation-stack                  | For navigation                                                     |
| react-native-gesture-handler            | For navigation                                                     |
| react-native-reanimated                 | For navigation                                                     |
| @react-native-community/masked-view     | For navigation                                                     |
| react-native-screens                    | For navigation                                                     |
| **REDUX**                               |
| react-redux                             | React Redux                                                        |
| redux                                   | Redux                                                              |
| redux-persist                           | Redux persist ( for saving state when app go background or killed) |
| redux-saga                              | Redux saga                                                         |
| reduxsauce                              | Redux sauce                                                        |
| seamless-immutable                      | For redux state manage                                             |

### Dev package

You can import the newest one of those package with this script , but I suggest you copy the one on the package.json

```
 yarn add @babel/runtime @react-native-community/eslint-config babel-eslint babel-plugin-ignite-ignore-reactotron eslint eslint-config-standard eslint-config-standard-react eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-native eslint-plugin-standard jest metro-react-native-babel-preset react-test-renderer reactotron-react-native reactotron-redux reactotron-redux-saga
```

| Package                               | Purpose |
| ------------------------------------- | ------- |
| @babel/core                           |         |
| @babel/runtime                        |         |
| @react-native-community/eslint-config |         |
| metro-react-native-babel-preset       |         |
| **ESLINT**                            |
| babel-eslint                          |         |
| babel-plugin-ignite-ignore-reactotron |         |
| eslint                                |         |
| eslint-config-standard                |         |
| eslint-config-standard-react          |         |
| eslint-plugin-import                  |         |
| eslint-plugin-node                    |         |
| eslint-plugin-promise                 |         |
| eslint-plugin-react                   |         |
| eslint-plugin-react-native            |         |
| eslint-plugin-standard                |         |
| **JEST**                              |
| jest                                  |         |
| react-test-renderer                   |         |
| **REACTOTRON**                        |
| reactotron-react-native               |         |
| reactotron-redux                      |         |
| reactotron-redux-saga                 |         |

---
