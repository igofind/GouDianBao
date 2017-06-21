import React, { PureComponent } from 'react';
import {Text, StatusBar, View} from 'react-native';

class HomeScene extends PureComponent {
    render() {
        return (
            <View>
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                    translucent={false}
                />
                <Text>This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>
            </View>
        );
    }
}

export default HomeScene;
