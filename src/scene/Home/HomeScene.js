import React, { PureComponent } from 'react';
import { Text, StatusBar, View, TouchableOpacity } from 'react-native';
import SplitView from '../../widget/SplitView';

class HomeScene extends PureComponent {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <StatusBar
                    backgroundColor="#000"
                    networkActivityIndicatorVisible={true}
                    showHideTransition="fade"
                />
                <Text style={{ height: 30 }} >
                    This is Home. StatusBar currentHeight is {StatusBar.currentHeight}</Text>

                <TouchableOpacity
                    style={{ height: 30, backgroundColor: '#00aaee', width: 100 }}
                    activeOpacity={1}
                    onPress={() => { navigate('Announcement'); }}
                >
                    <Text style={{ textAlign: 'center' }}>交易公告详情</Text>
                </TouchableOpacity>
                <SplitView />
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ height: 30, backgroundColor: '#00aaee', width: 100 }}
                    onPress={() => { navigate('DeclarationRecord'); }}
                >
                    <Text style={{ textAlign: 'center' }}>申报记录</Text>
                </TouchableOpacity>
                <SplitView />
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ height: 30, backgroundColor: '#00aaee', width: 100 }}
                    onPress={() => { navigate('Contract'); }}
                >
                    <Text style={{ textAlign: 'center' }}>我的合同</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default HomeScene;
