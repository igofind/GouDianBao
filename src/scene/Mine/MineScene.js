import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IconCell from '../../widget/IconCell';
import SplitView from '../../widget/SplitView';
import Bell from '../../widget/Bell';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        height: 120,
        backgroundColor: '#00aaee',
    },
    iconLine: {
        height: 33,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    avatar: {
        width: 88,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
    },
});

class MineScene extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <View style={styles.iconLine} >
                        <Bell onPress={() => {}} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.avatar}>
                            <Image
                                source={require('../../image/mine_avatar.png')}
                                style={{ width: 56, height: 56 }}
                            />
                        </View>
                        <View style={styles.info} >
                            <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 18 }}>136***8888 | 用户1234</Text>
                            </View>
                            <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 14 }}>还未及时填写公司名称</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <SplitView style={{ height: 12 }} />
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_record.png')}

                >
                    <Text>申报记录</Text>
                </IconCell>
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_elec.png')}

                >
                    <Text>成交及用电</Text>
                </IconCell>
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_contract.png')}

                >
                    <Text>我的合同</Text>
                </IconCell>
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_company.png')}

                >
                    <Text>我的企业信息</Text>
                </IconCell>
                <SplitView style={{ height: 12 }} />
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_share.png')}

                >
                    <Text>分享给朋友</Text>
                </IconCell>
                <IconCell
                    onPress={() => {}}
                    image={require('../../image/mine_setting.png')}

                >
                    <Text>设置</Text>
                </IconCell>
            </View>
        );
    }
}

export default MineScene;
