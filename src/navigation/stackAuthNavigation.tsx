import * as React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { SignInScreen, SignUpLayout } from 'screens/AuthScreen';
import { RouteName } from 'constant';
import { OPTS_COMMON } from './navigationConfig';

const Stack = createStackNavigator();
type Props = {};

export class AuthStack extends React.Component<Props> {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          ...OPTS_COMMON,
        }}>
        {/* <Stack.Screen
          name={RouteName.SPLASH}
          component={SplashScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        /> */}
        <Stack.Screen
          name={RouteName.LOGIN}
          component={SignInScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name={RouteName.SIGN_UP}
          component={SignUpLayout}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    );
  }
}
