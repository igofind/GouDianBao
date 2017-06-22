import React, { PureComponent } from 'react';
import { Text, StatusBar, View } from 'react-native';

class HomeScene extends PureComponent {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#000"
                    networkActivityIndicatorVisible={true}
                    showHideTransition="fade"
                />
                <Text>This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>
            </View>
        );
    }
}

export default HomeScene;
