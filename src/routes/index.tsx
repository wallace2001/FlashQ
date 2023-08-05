import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppRouter } from './appRouter';
import { AuthRouter } from './authRouter';
import _ from "lodash";
import LinkingConfiguration from './linking-configuration';
import { ColorSchemeName } from 'react-native';
import { CustomTabBar, RootNavigator } from './tab.router';

export const Router = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {

    const user = false;

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            {user ? <CustomTabBar /> : <AuthRouter />}
        </NavigationContainer>
    );
}