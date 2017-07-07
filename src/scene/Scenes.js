import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Announcement from '../page/Announcement';
import DeclarationRecord from '../page/DeclarationRecord';
import theme from '../style/theme';
import BusinessScene from './Business/BusinessScene';
import CalcScene from './Calc/CalcScene';
import HomoScene from './Home/HomeScene';
import LoginScene from './Login/LoginScene';
import MineScene from './Mine/MineScene';
import ContractExec from '../page/ContractExec';
import ContractList from '../page/ContractList';
import Bell from '../widget/Bell';
import EmptyIcon from '../widget/EmptyIcon';
import MonthElecDetail from '../page/MonthElecDetail';
import CompanyInfo from '../page/CompanyInfo';
import DealList from '../page/DealList';
import ElecDeclare from '../page/ElecDeclare';
import ContractDetail from '../page/ContractDetail';
import DealAndElec from '../page/DealAndElec';
import TradeAnalysis from '../page/TradeAnalysis';
import NotificationCenter from '../page/NotificationCenter';

const TabScenes = TabNavigator({
    Home: {
        screen: HomoScene,
    },
    Business: {
        screen: BusinessScene,
        navigationOptions: {
            headerStyle: theme.styles.businessHeaderStyle,
            headerTitle: '业务办理',
            headerTitleStyle: theme.styles.businessHeaderTitleStyle,
            tabBarLabel: '业务办理',
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="gavel" size={theme.tabIconSize} color={tintColor} />),
            headerLeft: null,
            headerRight: null,
        },
    },
    Calc: {
        screen: CalcScene,
        navigationOptions: ({ navigation }) => ({
            statusBarStyle: 'light-content',
            headerStyle: theme.styles.calcHeaderStyle,
            headerTitle: '辅助计算',
            headerTitleStyle: theme.styles.calcHeaderTitleStyle,
            tabBarLabel: '辅助计算',
            tabBarIcon: ({ tintColor }) =>
                (<FontAwesome name="calculator" size={theme.tabIconSize} color={tintColor} />),
            headerLeft: <EmptyIcon />,
            headerRight: <Bell onPress={() => { navigation.navigate('NotificationCenter'); }} />,
        }),
    },
    Mine: {
        screen: MineScene,
    },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    order: ['Home', 'Business', 'Calc', 'Mine'],
    initialRouteName: 'Home',
    activeBackgroundColor: '#fff',
    backBehavior: 'none',
    animationEnabled: false, // 不要动画更流畅
    swipeEnabled: false, // TODO 左右滑动切换时，导航条变化不流畅
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
    Login: {
        screen: LoginScene,
        navigationOptions: {
            headerStyle: theme.styles.loginHeaderStyle,
            headerLeft: null,
            headerRight: null,
        },
    },
    Main: {
        screen: TabScenes,
    },
    Announcement: {
        screen: Announcement,
    },
    DeclarationRecord: {
        screen: DeclarationRecord,
    },
    ContractExec: {
        screen: ContractExec,
    },
    ContractList: {
        screen: ContractList,
    },
    MonthElecDetail: {
        screen: MonthElecDetail,
    },
    CompanyInfo: {
        screen: CompanyInfo,
    },
    DealList: {
        screen: DealList,
    },
    ElecDeclare: {
        screen: ElecDeclare,
    },
    ContractDetail: {
        screen: ContractDetail,
    },
    DealAndElec: {
        screen: DealAndElec,
    },
    TradeAnalysis: {
        screen: TradeAnalysis,
    },
    NotificationCenter: {
        screen: NotificationCenter,
    },
}, {
    initialRouteName: 'Login',
    headerMode: 'float',
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
});

export default StackScenes;
/* export default () => (<StackScenes
    onNavigationStateChange={(prevState, currentState, action) => {
        if (action.type.toLowerCase() === 'navigation/navigate') {
            /!* // tabNavigator 页面改变时，改变StatusBar
            switch (action.routeName) {
                case 'Home':
                    StatusBar.setBackgroundColor(theme.homeStatusBarBC, false);
                    break;
                case 'Business':
                    StatusBar.setBackgroundColor(theme.businessStatusBarBC, false);
                    break;
                case 'Calc':
                    StatusBar.setBackgroundColor(theme.calcStatusBarBC, false);
                    break;
                case 'Mine':
                    StatusBar.setBackgroundColor(theme.mineStatusBarBC, false);
                    break;
                default:
                    // 与initialRouteName的routeName保持一致
                    // 并在该screen中加上StatusBar组件
                    StatusBar.setBackgroundColor(theme.homeStatusBarBC, false);
                    break;
            }*!/
        } else if (action.type.toLowerCase() === 'navigation/back') {
            if (currentState.routes[currentState.index].routeName === 'Login') {
                // StatusBar.setBackgroundColor('#fff', false); // TODO 登录后，是不能再返回登录页面的，除非是退出操作
                StatusBar.setBarStyle('light-content', false);
            } else {
                /!* // 由'我的'tab中进入的页面，返回后，设置StatusBar的颜色
                const minePages = ['DeclarationRecord', 'MonthElecDetail', 'ContractList', 'CompanyInfo', '', ''];
                if (prevState.routes.length > 2 && minePages.includes(prevState.routes[2].routeName)) {
                    StatusBar.setBackgroundColor(theme.mineStatusBarBC, false);
                } else {
                    StatusBar.setBackgroundColor(theme.homeStatusBarBC, false);
                }*!/
            }
        }
    }}
/>);*/
