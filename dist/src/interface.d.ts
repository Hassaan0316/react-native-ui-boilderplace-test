/// <reference types="react" />
import type { RefreshControlProps, StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
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
export interface iTextStyles extends TextStyle {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    b?: boolean;
    p?: boolean;
    xs?: boolean;
    fontFamily?: TextStyle['fontFamily'];
    lineHeight?: TextStyle['lineHeight'];
    size?: TextStyle['fontSize'];
    color?: TextStyle['color'];
    weight?: TextStyle['fontWeight'];
    align?: TextStyle['textAlign'];
    margin?: TextStyle['margin'];
    marginVertical?: TextStyle['marginVertical'];
    marginHorizontal?: TextStyle['marginHorizontal'];
    marginTop?: TextStyle['marginTop'];
    marginBottom?: TextStyle['marginBottom'];
    marginRight?: TextStyle['marginRight'];
    marginLeft?: TextStyle['marginLeft'];
    padding?: TextStyle['padding'];
    paddingHorizontal?: TextStyle['paddingHorizontal'];
    paddingVertical?: TextStyle['paddingVertical'];
    paddingTop?: TextStyle['paddingTop'];
    paddingBottom?: TextStyle['paddingBottom'];
    paddingLeft?: TextStyle['paddingLeft'];
    paddingRight?: TextStyle['paddingRight'];
    style?: StyleProp<TextStyle>;
}
export interface ifont {
    fontSize: TextStyle['fontSize'];
    fontFamily: TextStyle['fontFamily'];
    fontWeight: TextStyle['fontWeight'];
}
export interface IButtonGroup extends TouchableOpacityProps {
    buttons: string[];
    selectedButton: number | null;
    onSelect: (index: number) => void;
    activeButtonColor?: string;
    containerStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    inActiveTextColor?: string;
    textStyles?: TextStyle;
}
export interface IRefresh extends RefreshControlProps {
    color?: string;
    progressViewOffset?: number | undefined;
    refreshing: boolean;
    onRefresh?: (() => void) | undefined;
}
