
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';

import {activeBackgroundColor,
        activeTintColor,
        inactiveBackgroundColor,
        inactiveTintColor,
        themeColor
    } from '../styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const RoutesBottom = () => {
    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: themeColor,
                },
            }}
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: inactiveBackgroundColor,
                activeBackgroundColor: activeBackgroundColor,
                inactiveTintColor: inactiveTintColor,
                activeTintColor: activeTintColor,
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Entypo
                                name="home"
                                size={size}
                                color={focused ? activeTintColor : color}
                            />
                        );
                    },
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <MaterialIcons
                                name="favorite"
                                size={size}
                                color={focused ? activeTintColor : color}
                            />
                        );
                    },
                }}
            />
            <Screen
                name="movement"
                component={Search}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <MaterialIcons
                                name="search"
                                size={size}
                                color={focused ? activeTintColor : color}
                            />
                        );
                    },
                }}
            />
        </Navigator>
    );
};

export default RoutesBottom;