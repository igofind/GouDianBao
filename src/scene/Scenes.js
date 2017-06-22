import React from 'react';
import { StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import theme from '../style/theme';
import BusinessScene from './Business/BusinessScene';
import CalcScene from './Calc/CalcScene';
import HomoScene from './Home/HomeScene';
import LoginScene from './Login/LoginScene';
import MineScene from './Mine/MineScene';

const TabScenes = TabNavigator({
    Home: {
        screen: HomoScene,
        navigationOptions: {
            headerStyle: theme.styles.homeHeaderStyle,
            headerTitle: '首页',
            headerTitleStyle: theme.styles.homeHeaderTitleStyle,
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="home" size={theme.tabIconSize} color={tintColor} />),
        },
    },
    Business: {
        screen: BusinessScene,
        navigationOptions: {
            headerStyle: theme.styles.businessHeaderStyle,
            headerTitle: '业务办理',
            headerTitleStyle: theme.styles.businessHeaderTitleStyle,
            tabBarLabel: '业务办理',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="gavel" size={theme.tabIconSize} color={tintColor} />),
        },
    },
    Calc: {
        screen: CalcScene,
        navigationOptions: {
            statusBarStyle: 'light-content',
            headerStyle: theme.styles.calcHeaderStyle,
            headerTitle: '辅助计算',
            headerTitleStyle: theme.styles.calcHeaderTitleStyle,
            tabBarLabel: '辅助计算',
            tabBarIcon: ({ tintColor }) =>
                (<FontAwesome name="calculator" size={theme.tabIconSize} color={tintColor} />),
        },
    },
    Mine: {
        screen: MineScene,
        navigationOptions: {
            headerStyle: theme.styles.mineHeaderStyle,
            headerTitle: '我的',
            headerTitleStyle: theme.styles.mineHeaderTitleStyle,
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="user-o" size={theme.tabIconSize} color={tintColor} />),
        },
    },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    initialRouteName: 'Calc',
    order: ['Home', 'Business', 'Calc', 'Mine'],
    activeBackgroundColor: '#fff',
    backBehavior: 'none',
    animationEnabled: false, // 不要动画更流畅
    tabBarOptions: {
        activeTintColor: theme.blue,
        activeBackgroundColor: '#fff',
        inactiveTintColor: '#8d8d8d',
        inactiveBackgroundColor: '#fff',
        labelStyle: theme.styles.tabLabelStyle,
        tabStyle: theme.styles.tabStyle,
        style: theme.styles.tabBarStyle,
    },
});

const StackScenes = StackNavigator({
    Main: {
        screen: TabScenes,
    },
    Login: {
        screen: LoginScene,
        navigationOptions: {
            header: null,
        },
    },
});

export default () => (<StackScenes
    onNavigationStateChange={(prevState, currentState, action) => {
        if (action.type.toLowerCase() === 'navigation/navigate') {
            // tabNavigator 页面改变时，改变StatusBar
            switch (action.routeName) {
                case 'Home':
                    // StatusBar.setBackgroundColor(theme.homeStatusBarBC, true);
                    StatusBar.setBackgroundColor(theme.homeStatusBarBC);
                    break;
                case 'Business':
                    // StatusBar.setBackgroundColor(theme.businessStatusBarBC, true);
                    StatusBar.setBackgroundColor(theme.businessStatusBarBC);
                    break;
                case 'Calc':
                    // StatusBar.setBackgroundColor(theme.calcStatusBarBC, true);
                    StatusBar.setBackgroundColor(theme.calcStatusBarBC);
                    break;
                case 'Mine':
                    // StatusBar.setBackgroundColor(theme.mineStatusBarBC, true);
                    StatusBar.setBackgroundColor(theme.mineStatusBarBC);
                    break;
                default:
                    // 与initialRouteName的routeName保持一致
                    StatusBar.setBackgroundColor(theme.calcStatusBarBC);
                    break;
            }
        }
    }}
/>);