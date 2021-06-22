import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
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


export interface LabelProps {
  flex?: any;
  margin?: number;
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
  centered?: any;
  color?: string;
  bgColor?: string;
  gray?:any;
  upper?: any;
  capital?: any;
  size?: any;
  fontFamily?: any;
  bold?: any;
  style?: any;
  children?: any;
  borderRadius?: string;
  h1?: any;
  h2?: any;
  h3?: any;
  h4?: any;
  h5?: any;
  s1?: any;
  s2?: any;
  s3?: any;
  b1?: any;
  b2?: any;
  b3?: any;
  b4?: any;
  b5?: any;
  numberOfLines?:number;
  transparent?:any;
}

const Label = (props: LabelProps) => {
  const {
    flex,
    margin,
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
    color,
    bgColor,
    gray,
    upper,
    capital,
    size,
    fontFamily,
    bold,
    style,
    borderRadius,
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    s1,
    s2,
    s3,
    b1,
    b2,
    b3,
    b4,
    b5,
    transparent,
    numberOfLines,
  } = props;
  const styleComponent = [
    flex && {height: '100%', width: '100%'},
    margin && {margin: convertWidth(margin)},
    marginVertical && {marginVertical: convertHeight(marginVertical)},
    marginHorizontal && {marginHorizontal: convertWidth(marginHorizontal)},
    marginTop && {marginTop: convertHeight(marginTop)},
    marginBottom && {marginBottom: convertHeight(marginBottom)},
    padding && {padding: convertWidth(padding)},
    paddingVertical && {paddingVertical: convertHeight(paddingVertical)},
    paddingHorizontal && {paddingHorizontal: convertWidth(paddingHorizontal)},
    paddingTop && {paddingTop: convertHeight(paddingTop)},
    paddingBottom && {paddingBottom: convertHeight(paddingBottom)},
    paddingLeft && {paddingLeft: convertWidth(paddingLeft)},
    paddingRight && {paddingRight: convertWidth(paddingRight)},
    width && {width: convertWidth(width)},
    height && {height: convertWidth(height)},
    border && {borderWidth: 1, borderColor: 'gray'},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    color && {color: color},
    bold && {fontWeight: 'bold'},
    bgColor && {backgroundColor: bgColor},
    borderRadius && {borderRadius},
    // (h1 || h2 || h3 || h4 || h5) && {fontFamily: MyFonts.header},
    h1 && {fontSize: convertWidth(28), lineHeight: convertWidth(30)},
    h2 && {fontSize: convertWidth(22), lineHeight: convertWidth(22)},
    h3 && {fontSize: convertWidth(16), lineHeight: convertWidth(16)},
    h4 && {fontSize: convertWidth(14), lineHeight: convertWidth(18)},
    h5 && {fontSize: convertWidth(12), lineHeight: convertWidth(14)},
    // // sub-header
    // (s1 || s2 || s3) && {fontFamily: MyFonts.sub},
    s1 && {fontSize: convertWidth(13)},
    s2 && {fontSize: convertWidth(11)},
    s3 && {fontSize: convertWidth(10)},
    // // body
    // (b1 || b2 || b3) && {fontFamily: MyFonts.body},
    b1 && {fontSize: convertWidth(14), lineHeight: convertWidth(20)},
    b2 && {fontSize: convertWidth(12), lineHeight: convertWidth(18)},
    b3 && {fontSize: convertWidth(10), lineHeight: convertWidth(16)},
    gray && {color: 'gray'},
    size && {fontSize: convertWidth(size)},
    fontFamily && {fontFamily},
    centered && {textAlign: 'center'},
    upper && {textTransform: 'uppercase'},
    capital && {textTransform: 'capitalize'},
    style,
    // numberOfLines && {numberOfLines:numberOfLines },
    transparent && {backgroundColor:'transparent'}
  ];
  return <Container numberOfLines={numberOfLines} style={[styleComponent]}>{children}</Container>;
};
export default Label;

const Container = styled.Text``;
