import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ScrollTabView from 'react-native-scrollable-tab-view';
import SplashScreen from 'react-native-splash-screen';

class Test extends Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    render() {
        return (
            <ScrollTabView>
                <View tabLabel="Tab1">
                    <Text>Tab1</Text>
                </View>
                <View tabLabel="Tab2">
                    <Text>Tab1</Text>
                </View>
            </ScrollTabView>
        );
    }
}

export default Test;
