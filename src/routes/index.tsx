import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './appRouter';
import { AuthRouter } from './authRouter';
import _ from "lodash";

export const Router = () => {

    return (
        <NavigationContainer>
            <AuthRouter />
        </NavigationContainer>
    );
}