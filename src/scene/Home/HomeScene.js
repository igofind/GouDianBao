import React, { PureComponent } from 'react';
import { Text, StatusBar, View, Button } from 'react-native';

class HomeScene extends PureComponent {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar
                    backgroundColor="#000"
                    networkActivityIndicatorVisible={true}
                    showHideTransition="fade"
                />
                <Text>This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>

                <Button title="GO Announcement" onPress={() => { navigate('Announcement'); }} />
            </View>
        );
    }
}

export default HomeScene;
