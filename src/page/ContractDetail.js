import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../style/theme';
import screen from '../common/screen';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';
import SplitLine from '../widget/SplitLine';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    title: {
        fontSize: 18,
        color: '#3a3a3a',
        padding: 12,
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
    },
    body: {
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
    },
    item: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    label: {
        width: 90,
        fontSize: 14,
        color: '#3a3a3a',
        textAlign: 'right',
        textAlignVertical: 'center',
    },
    value: {
        flex: 1,
        fontSize: 14,
        marginLeft: 33,
        color: '#8d8d8d',
        textAlignVertical: 'center',
    },
    previewLink: {
        alignSelf: 'center',
        color: '#3a3a3a',
        fontSize: 14,
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: '#3a3a3a',
    },
});

class Item extends PureComponent {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.label}>{this.props.label}</Text>
                <Text style={styles.value}>{this.props.value}</Text>
            </View>
        );
    }
}

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '合同详情',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body} >
                    <Text style={styles.title}>2017年广东电力大用户与发电企业直接交易及电网企业输配电服务三方合同</Text>
                    <SplitLine title="" lineStyle={{ backgroundColor: '#c8c8c8' }} />
                    <SplitView style={{ height: 16 }} />
                    <Item label="合同类型" value="双边协商合同" />
                    <Item label="合同周期" value="年度合同" />
                    <Item label="购电方" value="山西晋能朔州能源铝硅金有限公司" />
                    <Item label="售电方" value="山西太原哞哞某某发电厂" />
                    <Item label="购电合同" value="1000 兆瓦时" />
                    <Item label="合同电价" value="305.22 元/兆瓦时" />
                    <Item label="生效日期" value="2017年01月01日" />
                    <Item label="终止日期" value="2017年12月31日" />
                    <SplitView style={{ height: 16 }} />
                </View>
                <SplitView style={{ height: 24 }} />
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={() => {}}>
                    <Text style={styles.previewLink} >预览合同原件</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
