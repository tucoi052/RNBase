import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ViewStyle } from 'react-native';
export const baseScreenWidth = 375;
export const baseScreenHeight = 733;
const { width, height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;
const convertWidth = (pd: number) => {
  return (pd / baseScreenWidth) * screenWidth;
};
const convertHeight = (pd: number) => {
  return (pd / baseScreenHeight) * screenHeight;
};


export interface ViewBoxUIProps {
  flex?: any;
  margin?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number;
  height?: number;
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  centered?:boolean;
  between?: boolean;
  middle?: any;
  color?: string;
  style?: ViewStyle;
  direction?: string;
  children?: any;
  justifyContent?: string;
  borderRadius?: number;
  shadow?: boolean;
  horizontal?: boolean,
  flexGrow?: number
}

const Wrapper = (props: ViewBoxUIProps) => {
  const {
    flex,
    margin,
    marginRight,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    width,
    height,
    border,
    borderWidth,
    borderColor,
    centered,
    between,
    middle,
    color,
    style,
    direction,
    justifyContent,
    borderRadius,
    shadow,
    children,
    horizontal,
    flexGrow
  } = props;
  const styleComponent = [
    flex && { flex: 1 },
    flexGrow && { flexGrow: flexGrow },
    margin && { margin: convertWidth(margin) },
    marginRight && { marginRight: convertWidth(marginRight) },
    marginVertical && { marginVertical: convertHeight(marginVertical) },
    marginHorizontal && { marginHorizontal: convertWidth(marginHorizontal) },
    marginTop && { marginTop: convertHeight(marginTop) },
    marginBottom && { marginBottom: convertHeight(marginBottom) },
    padding && { padding: convertWidth(padding) },
    paddingVertical && { paddingVertical: convertHeight(paddingVertical) },
    paddingHorizontal && { paddingHorizontal: convertWidth(paddingHorizontal) },
    paddingTop && { paddingTop: convertHeight(paddingTop) },
    paddingBottom && { paddingBottom: convertHeight(paddingBottom) },
    paddingLeft && { paddingLeft: convertWidth(paddingLeft) },
    paddingRight && { paddingRight: convertWidth(paddingRight) },
    width && { width: convertWidth(width) },
    height && { height: convertWidth(height) },
    border && { borderWidth: 1, borderColor: 'gray' },
    borderWidth && { borderWidth },
    borderColor && { borderColor },
    color && { backgroundColor: color },
    centered && { justifyContent: 'center' },
    between && { justifyContent: 'space-between' },
    justifyContent && { justifyContent },
    direction && { flexDirection: direction },
    middle && { alignItems: 'center' },
    borderRadius && { borderRadius },
    horizontal && { flexDirection: 'row' },
    shadow && {
      shadowOpacity: 0.22,
      shadowRadius: 15,
      shadowColor: 'gray',
      shadowOffset: { height: 0, width: 0 },
      elevation: 5,
    },
    style,
  ];
  return <Container style={[styleComponent]}>{children}</Container>;
};
export default Wrapper;

const Container = styled.View``;
