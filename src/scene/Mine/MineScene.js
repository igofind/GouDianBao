import React, { PureComponent } from 'react';
import { StatusBar, Text, View } from 'react-native';
import theme from '../../style/theme';

class MineScene extends PureComponent {
    render() {
        return (
            <View>
                <StatusBar
                    animated={true}
                    backgroundColor={theme.blue}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                    translucent={false}
                />
                <Text>This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>
            </View>
        );
    }
}

export default MineScene;
