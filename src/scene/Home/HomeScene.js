import React, { PureComponent } from 'react';
import { Text, StatusBar, View, Button } from 'react-native';
import SplitView from '../../widget/SplitView';

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

                <Button title="交易公告详情" onPress={() => { navigate('Announcement'); }} />
                <SplitView />
                <Button title="申报记录" onPress={() => { navigate('DeclarationRecord'); }} />
            </View>
        );
    }
}

export default HomeScene;
