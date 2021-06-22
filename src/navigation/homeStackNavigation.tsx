import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLayout from 'screens/DashboardScreen';
import { RouteName } from "../constant";
import { OPTS_COMMON } from './navigationConfig';


const Stack = createStackNavigator();
type Props = {};

export class HomeStack extends React.Component<Props> {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{

                    ...OPTS_COMMON
                }}>
                <Stack.Screen 
                name={RouteName.HOME} 
                component={HomeLayout}
                    options={{
                        headerTransparent: true,
                        headerTitle: '',
                    }}
                />
            </Stack.Navigator>
        );
    }
}
