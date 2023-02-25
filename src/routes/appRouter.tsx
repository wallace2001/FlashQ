import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CustomTabBar } from './tab.router';
import { Home } from '../screens/Home';
// import { COLORS } from '../../constants/theme';

const {Screen, Navigator} = createNativeStackNavigator();

export const AppRouter = () => {
    return (
            <Navigator screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent',
                },
            }}>
                <Screen
                    name="Main"
                    component={CustomTabBar}
                />
                <Screen
                    name="Home"
                    component={Home}
                />
            </Navigator>
    );
}