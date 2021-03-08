import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackRoutes from './src/routes/stackRoutes';
import store from './src/store/index'
import { Provider } from 'react-redux'

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <StackRoutes />
        </Provider>
    );
}