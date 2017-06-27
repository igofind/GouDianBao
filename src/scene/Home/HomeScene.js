import React, { PureComponent } from 'react';
import { InteractionManager, StatusBar, Text, View } from 'react-native';
import IconCell from '../../widget/IconCell';
import SplitView from '../../widget/SplitView';

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
                    barStyle="light-content"
                    translucent={true}
                />
                <SplitView />
                <IconCell onPress={() => this.navigate('Announcement')}>
                    <Text>交易公告详情</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('ContractExec')}>
                    <Text>合同执行情况</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('ContractDetail')}>
                    <Text>合同详情</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('DealList')}>
                    <Text>市场成交情况</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('ElecDeclare')}>
                    <Text>电量申报</Text>
                </IconCell>

            </View>
        );
    }
}

export default HomeScene;
