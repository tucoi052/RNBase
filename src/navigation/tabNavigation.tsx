import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import store from 'store/configureStore';
import { Label } from 'native-base';
import { HomeStack } from './homeStackNavigation';


const Tab = createBottomTabNavigator();
type Props = {};

export const TabContainer = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        showLabel: true,
      }}>
      <Tab.Screen
        name='Trang chủ'
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <Label>OK</Label>
            );
          },
        })}
        component={HomeStack}
      />
      <Tab.Screen
        name='Trang chủ1'
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <Label>OK</Label>
            );
          },
        })}
        component={HomeStack}
      />
      <Tab.Screen
        name='Trang chủ2'
        options={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            return (
              <Label>OK</Label>
            );
          },
        })}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
}

const ImageStyled = styled.Image``;
