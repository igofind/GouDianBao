import React, { PureComponent } from 'react';
import { Text, StatusBar, View } from 'react-native';

class HomeScene extends PureComponent {
    render() {
        return (
            <View>
                <Text>This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>
            </View>
        );
    }
}

export default HomeScene;
