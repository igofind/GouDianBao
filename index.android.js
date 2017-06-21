/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import ScrollTabView from 'react-native-scrollable-tab-view';

export default class GouDianBao extends Component {
    render() {
        return (
            <ScrollTabView>
                <View tabLabel="Tab1">
                    <Text>Tab1</Text>
                </View>
                <View tabLabel="Tab2">
                    <Text>Tab2</Text>
                </View>
            </ScrollTabView>
        );
    }
}
AppRegistry.registerComponent('GouDianBao', () => GouDianBao);
