import React, { PureComponent } from 'react';
import { StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 30,
        textAlignVertical: 'center',
        marginLeft: theme.marginLeft,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 7,
        borderBottomWidth: screen.onePixel,
        borderBottomColor: theme.listBorderColor,
        backgroundColor: '#fff',
    },
    icon: {
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
        width: 30,
        height: 30,
        /* borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,*/
        borderRadius: 4,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    name: {
        fontSize: 15,
        color: '#3A3A3A',
        textAlignVertical: 'center',
    },
    numView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    num: {
        color: '#00aaee',
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 5,
    },
    unit: {
        fontSize: 10,
        lineHeight: 20,
        color: '#8D8D8D',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginRight: theme.marginRight,
    },
});

const colors = ['#00AAEE', '#FFBE58', '#66D3FF', '#47CFA0', '#FFBE58', '#6CAEF7'];

class Header extends PureComponent {
    render() {
        return (
            <Text style={styles.header} >{this.props.title}</Text>
        );
    }
}

class ListItem extends PureComponent {
    render() {
        const item = this.props.item;
        const world = item.name.substr(0, 1);
        const index = this.props.index;
        const bgColor = colors[index % colors.length];
        return (
            <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={this.props.onPress}>
                <View style={styles.list}>
                    <Text style={[styles.icon, { backgroundColor: bgColor }]}>{world}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.numView}>
                        <Text style={styles.num}>{item.num}</Text>
                        <Text style={styles.unit}>兆瓦时</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '成交及用电',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });
    render() {
        return (
            <View style={styles.container} >
                <SectionList
                    renderItem={({ item, index }) => <ListItem index={index} item={item} onPress={() => {}} />}
                    keyExtractor={(item, index) => (index)}
                    renderSectionHeader={({ section }) => <Header title={section.title} />}
                    sections={[
                        {
                            data: [
                                { name: '申报电量', num: 2017 },
                                { name: '成交电量', num: 2007 },
                            ],
                            title: '6月份',
                            key: 'month-6',
                        },
                        {
                            data: [
                                { name: '申报电量', num: 2017 },
                                { name: '成交电量', num: 2007 },
                                { name: '总合同电量', num: 2017 },
                                { name: '实际执行电量', num: 2007 },
                                { name: '考核费用', num: 2017 },
                                { name: '利润', num: 2007 },
                            ],
                            title: '5月份',
                            key: 'month-5',
                        },
                        {
                            data: [
                                { name: '申报电量', num: 2017 },
                                { name: '成交电量', num: 2007 },
                                { name: '总合同电量', num: 2017 },
                            ],
                            title: '4月份',
                            key: 'month-4',
                        },
                    ]}
                />
            </View>
        );
    }
}
