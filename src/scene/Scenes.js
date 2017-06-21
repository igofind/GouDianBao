import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import theme from '../style/theme';
import HomoScene from './Home/HomeScene';
import LoginScene from './Login/LoginScene';
import MineScene from './Mine/MineScene';

const iconSize = 24;
const fontSize = 10;

const TabScenes = TabNavigator({
    Home: {
        screen: HomoScene,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="home" size={iconSize} color={tintColor} />),
        },
    },
    Business: {
        screen: HomoScene,
        navigationOptions: {
            tabBarLabel: '业务办理',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="gavel" size={iconSize} color={tintColor} />),
        },
    },
    Calc: {
        screen: HomoScene,
        navigationOptions: {
            tabBarLabel: '辅助计算',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="calculator" size={iconSize} color={tintColor} />),
        },
    },
    Mine: {
        screen: MineScene,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="user-o" size={iconSize} color={tintColor} />),
        },
    },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    initialRouteName: 'Home',
    order: ['Home', 'Business', 'Calc', 'Mine'],
    activeBackgroundColor: '#fff',
    tabBarOptions: {
        activeTintColor: theme.blue,
        activeBackgroundColor: '#fff',
        inactiveTintColor: '#8d8d8d',
        inactiveBackgroundColor: '#fff',
        labelStyle: {
            fontSize,
            marginTop: -3,
            marginBottom: 3,
        },
    },
});

const StackScenes = StackNavigator({
    Main: {
        screen: TabScenes,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
            },
        },
    },
    Login: {
        screen: LoginScene,
        navigationOptions: {
            header: null,
        },
    },
});

export default StackScenes;
