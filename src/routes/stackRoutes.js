import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import Register from '../screens/register';
import bottomNavigation from './bottomRoutes';

import {themeColor} from '../styles/colors';


const routes = createStackNavigator();

const StackRoutes = () => {
    return (
        <NavigationContainer>
            <routes.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: themeColor,
                    },
                }}
            >
                <routes.Screen name="Login" component={Login} />
                <routes.Screen name="Register" component={Register} />
                <routes.Screen name="Home" component={bottomNavigation} />
            </routes.Navigator>
        </NavigationContainer>
    );
};

export default StackRoutes;