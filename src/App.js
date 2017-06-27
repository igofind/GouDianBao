import React, { PureComponent } from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackScenes from './scene/Scenes';

export default class extends PureComponent {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    render() {
        return <StackScenes />;
    }
}
