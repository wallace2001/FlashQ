import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../screens/SignUp';
import { SignIn } from '../screens/SignIn';
import { COLORS } from '../../constants/theme';

const { Screen, Navigator } = createNativeStackNavigator();

export const AuthRouter = () => {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: COLORS.blue_background,
            },
        }}>
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="SignUp"
                component={SignUp}
            />
        </Navigator>
    );
}