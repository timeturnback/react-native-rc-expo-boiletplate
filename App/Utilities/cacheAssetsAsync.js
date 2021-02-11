import { Asset } from "expo-asset";
import { Image } from "react-native";
import * as Font from "expo-font";
//
import { Images, Icons, ImagesRemote, Fonts } from "@app/Themes";

export const cacheImagesRemote = (remoteImages = []) => {
  return Promise.all(remoteImages.map((image) => Image.prefetch(image)));
};
export const cacheImagesLocal = (images = []) => Asset.loadAsync(images);
export const cacheFonts = (fonts = {}) => Font.loadAsync(fonts);

const cacheAssetsAsync = ({
  imagesLocal = [],
  imagesRemote = [],
  fonts = {}
}) => {
  return Promise.all([
    cacheImagesRemote(imagesRemote),
    cacheImagesLocal(imagesLocal),
    cacheFonts(fonts)
  ]);
};

const extractImagesFromConfig = (images) => {
  if (!images) {
    return [];
  }
  // see ../../assets/Images and Icons - those configs should contain all images at 2nd level
  return Object.keys(images).reduce(
    (prev, next) =>
      prev.concat(Object.keys(images[next]).map((key) => images[next][key])),
    []
  );
};

export default () => {
  return cacheAssetsAsync({
    imagesLocal: [
      ...extractImagesFromConfig(Icons),
      ...extractImagesFromConfig(Images)
    ],
    imagesRemote: extractImagesFromConfig(ImagesRemote),
    fonts: Fonts.assets
  });
};
