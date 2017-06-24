import React, { PureComponent } from 'react';
import { InteractionManager, Text, StatusBar, View } from 'react-native';
import SplitView from '../../widget/SplitView';
import IconCell from '../../widget/IconCell';

class HomeScene extends PureComponent {

    navigate(...args) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.navigate(...args);
        });
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <StatusBar
                    backgroundColor="#000"
                    networkActivityIndicatorVisible={true}
                    showHideTransition="fade"
                />
                <SplitView />
                <IconCell onPress={() => this.navigate('Announcement')}>
                    <Text>交易公告详情</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('DeclarationRecord')}>
                    <Text>申报记录</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('Contract')}>
                    <Text>我的合同</Text>
                </IconCell>

            </View>
        );
    }
}

export default HomeScene;
