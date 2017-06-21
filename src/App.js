import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ScrollTabView from 'react-native-scrollable-tab-view';

class Test extends Component {
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

