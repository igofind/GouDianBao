import React, { PureComponent } from 'react';
import { InteractionManager, StatusBar, Text, View } from 'react-native';
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
                    barStyle="light-content"
                    translucent={true}
                />
                <SplitView />
                <IconCell onPress={() => this.navigate('Announcement')}>
                    <Text>交易公告详情</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('DeclarationRecord')}>
                    <Text>申报记录</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('ContractExec')}>
                    <Text>合同执行情况</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('ContractList')}>
                    <Text>我的合同</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('MonthElecDetail')}>
                    <Text>成交及用电</Text>
                </IconCell>
                <IconCell onPress={() => this.navigate('CompanyInfo')}>
                    <Text>企业信息</Text>
                </IconCell>

            </View>
        );
    }
}

export default HomeScene;
