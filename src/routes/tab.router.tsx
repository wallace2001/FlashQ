import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../constants/theme';
import { Home } from '../screens/Home';
import { Entypo, Feather } from '@expo/vector-icons';
import ModalScreen from '../components/modal-add-archive';
import NotFoundScreen from '../screens/not-found-screen';
import { RootStackParamList } from '../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Folder } from '../screens/Folder';
import _ from "lodash";

const CustomTabBarButton = () => (null)

const Stack = createNativeStackNavigator<RootStackParamList>();
const TabBar = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                contentStyle: {
                    backgroundColor: '#EAE8FE'
                },
            }}
        >
            {/* <Stack.Screen name="Root" component={CustomDrawer} options={{ headerShown: false }} /> */}
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen options={{ headerShown: false, gestureEnabled: false, }} name="Folder" component={Folder} />
        </Stack.Navigator>
    );
}

export const CustomTabBar = () => {
    return (
        <View style={styles.container}>
            <TabBar.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        left: 20,
                        right: 20,
                        backgroundColor: COLORS.white,
                        borderRadius: 15,
                        height: 70,
                        ...styles.shadow,
                        elevation: 0,
                    },
                    tabBarItemStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarLabelStyle: {
                        display: 'none',
                    },
                }}
                sceneContainerStyle={{
                    backgroundColor: '#EAE8FE',
                }}
            >
                <TabBar.Screen
                    name="Root"
                    component={RootNavigator}
                    options={{
                        tabBarIcon: (({ size, color, focused }) => (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Feather
                                    name="home"
                                    size={size}
                                    color={focused ? '#3f0072' : '#b4b4b4'}
                                />
                            </View>
                        )),
                    }}
                />
                <TabBar.Screen
                    name="AddCard"
                    component={CustomTabBarButton}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo
                                name="plus"
                                size={size}
                                color={COLORS.white}
                            />
                        )),
                        tabBarButton: (props) => (
                            <ModalScreen {...props} />
                        )
                    }}
                />
                <TabBar.Screen
                    name="Login"
                    component={Home}
                    options={{
                        tabBarIcon: (({ size, color, focused }) => (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Feather
                                    name="user"
                                    size={size}
                                    color={focused ? '#3f0072' : '#686868'}
                                />
                            </View>
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
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});