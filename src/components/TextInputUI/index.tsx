import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { NativeSyntheticEvent, TextInputSubmitEditingEventData, KeyboardType, StyleProp, ViewStyle, Image } from 'react-native';
import * as Icon from 'constant/icons';
import ErrorMessageUI from '../ErrorMessage';
import { convertHeight, convertWidth } from '../../utils/convertSize';
import { useColor } from 'hook';
import { Layout, Label } from 'ui-react-native';
import { IconImage } from 'assets';
export interface TextInputUIProps {
  title?: string;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  placeholder?: string;
  onChangeText?: (xText: string) => void;
  titlestyle?: any;
  contentstyle?: any;
  uistyle?: any;
  keyboardType?: KeyboardType;
  textValue?: string;
  errorMessage?: string;
  type?: string;
  maxLength?: number;
  editable?: boolean;
  contentStyle?: StyleProp<ViewStyle>,
  multiline?: boolean,
  icon?: any
}
const color = useColor();

const TextInputUI = (props: TextInputUIProps) => {
  const {
    placeholder,
    keyboardType = 'default',
    type,
    errorMessage,
    onChangeText,
    onSubmitEditing,
    title,
    titlestyle,
    contentstyle,
    uistyle,
    textValue,
    maxLength,
    editable,
    contentStyle,
    multiline,
    icon
  } = props;
  const [value, setValueChange] = useState('');
  const [hiden, setHiden] = useState(false);
  return (
    <Container style={uistyle}>
      {title && <Label paddingBottom={10} style={titlestyle}>{title}</Label>}
      <Layout color="#F6F6F6" height={52} borderRadius={10} horizontal between middle style={contentStyle}>
        {
           icon && <Layout paddingHorizontal={10}>
              {icon}
          </Layout>
        }
        <TextInputStyled
          returnKeyLabel="Xong"
          returnKeyType="done"
          secureTextEntry={type === 'password' && !hiden && true}
          keyboardType={keyboardType}
          style={contentstyle}
          maxLength={maxLength}
          editable={editable ?? true}
          value={textValue && textValue != '' ? textValue : value}
          onChangeText={(xText) => {
            setValueChange(xText);
            if (onChangeText) {
              onChangeText(xText);
            }
          }}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={color?.placeholderColor}
          onSubmitEditing={onSubmitEditing}
        />
        {type === 'password' && (
          <EyeStyled
            onPress={() => {
              setHiden(!hiden);
            }}>
            {hiden ? <Image source={IconImage.eye} style={{width: 18, height: 18, tintColor: "#AAA"}} /> : <Image source={IconImage.eye_slash} style={{width: 18, height: 18, tintColor: "#AAA"}} />}
          </EyeStyled>
        )}
      </Layout>
      {errorMessage && <ErrorMessageUI message={errorMessage} />}
    </Container>
  );
};
export default TextInputUI;
const Container = styled.View``;

const TextInputStyled = styled.TextInput`
  flex: 1;
  color: #39434c;
  paddingVertical: 10px;
  height: 52px;
`;
const EyeStyled = styled.TouchableOpacity`
  padding: 10px;
`;
