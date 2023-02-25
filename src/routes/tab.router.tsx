import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../constants/theme';
import { Home } from '../screens/Home';
import { Feather } from '@expo/vector-icons';

const TabBar = createBottomTabNavigator();

export const CustomTabBar = () => {
    return (
        <View style={styles.container}>
            <TabBar.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.blue_100,
                    tabBarStyle: {
                        height: 50,
                        backgroundColor: COLORS.white,
                        borderRadius: 20,
                    },
                    tabBarActiveBackgroundColor: COLORS.pink_500,
                    tabBarItemStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarLabelStyle: {
                        display: 'none',
                    },
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent',
                }}
            >
                <TabBar.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <Feather
                                name="home"
                                size={size}
                                color={color}
                            />
                        )),
                    }}
                />
                <TabBar.Screen
                    name="Profile"
                    component={Home}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <Feather
                                name="user"
                                size={size}
                                color={color}
                            />
                        )),
                    }}
                />
            </TabBar.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});