import JPushModule from 'jpush-react-native';
import React, { PureComponent } from 'react';
import { BackHandler, Platform, ToastAndroid } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StackScenes from './scene/Scenes';

export default class extends PureComponent {

    constructor(props) {
        super(props);
        this.backButtonListener = null;
        this.currentRouteName = 'Main';
        this.lastBackButtonPress = null;
    }

    componentDidMount() {
        // JPush推送
        JPushModule.initPush();

        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();

        if (Platform.OS === 'android') {
            this.backButtonListener = BackHandler.addEventListener('hardwareBackPress', () => {
                if (this.currentRouteName !== 'Main') {
                    return false; // 触发默认处理
                }

                if (this.lastBackButtonPress + 2000 >= new Date().getTime()) {
                    this.backButtonListener.remove();
                    BackHandler.exitApp();
                    return true; // 不触发默认处理
                }
                ToastAndroid.show('再按一次退出程序', ToastAndroid.SHORT);
                this.lastBackButtonPress = new Date().getTime();

                return true; // 触发默认处理
            });
        }
    }

    componentWillUnmount() {
        // this.backButtonListener.remove();
        BackHandler.removeEventListener('hardwareBackPress', this.backButtonListener);
    }

    render() {
        return (<StackScenes
            onNavigationStateChange={(prevState, currentState, action) => {
                this.currentRouteName = currentState.routes[currentState.index].routeName;
            }}
        />);
    }
}
