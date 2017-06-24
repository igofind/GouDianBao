import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    width,
    height,
    onePixel: 1 / PixelRatio.get(),
    twoPixel: 2 / PixelRatio.get(),
};
