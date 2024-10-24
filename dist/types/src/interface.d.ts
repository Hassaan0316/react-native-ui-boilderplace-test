/// <reference types="react" />
import type { ViewStyle } from 'react-native';
export interface iViewStyles {
    top?: ViewStyle['top'];
    left?: ViewStyle['left'];
    right?: ViewStyle['right'];
    bottom?: ViewStyle['bottom'];
    opacity?: ViewStyle['opacity'];
    children?: React.ReactNode;
    flex?: ViewStyle['flex'];
    flexDirection?: ViewStyle['flexDirection'];
    flexShrink?: ViewStyle['flexShrink'];
    gap?: ViewStyle['gap'];
    rowGap?: ViewStyle['rowGap'];
    columnGap?: ViewStyle['columnGap'];
    position?: ViewStyle['position'];
    display?: ViewStyle['display'];
    row?: boolean;
    shadow?: boolean;
    color?: ViewStyle['backgroundColor'];
    align?: ViewStyle['alignItems'];
    alignSelf?: ViewStyle['alignSelf'];
    justify?: ViewStyle['justifyContent'];
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    margin?: ViewStyle['margin'];
    marginVertical?: ViewStyle['marginVertical'];
    marginHorizontal?: ViewStyle['marginHorizontal'];
    marginTop?: ViewStyle['marginTop'];
    marginBottom?: ViewStyle['marginBottom'];
    marginRight?: ViewStyle['marginRight'];
    marginLeft?: ViewStyle['marginLeft'];
    padding?: ViewStyle['padding'];
    paddingHorizontal?: ViewStyle['paddingHorizontal'];
    paddingVertical?: ViewStyle['paddingVertical'];
    paddingTop?: ViewStyle['paddingTop'];
    paddingBottom?: ViewStyle['paddingBottom'];
    paddingLeft?: ViewStyle['paddingLeft'];
    paddingRight?: ViewStyle['paddingRight'];
    borderRadius?: ViewStyle['borderRadius'];
    borderWidth?: ViewStyle['borderWidth'];
    borderColor?: ViewStyle['borderColor'];
    shadowColor?: ViewStyle['shadowColor'];
    shadowOffset?: ViewStyle['shadowOffset'];
    shadowOpacity?: ViewStyle['shadowOpacity'];
    shadowRadius?: ViewStyle['shadowRadius'];
    elevation?: ViewStyle['elevation'];
    backgroundColor?: ViewStyle['backgroundColor'];
    overflow?: ViewStyle['overflow'];
    flexWrap?: ViewStyle['flexWrap'];
    zIndex?: ViewStyle['zIndex'];
}
