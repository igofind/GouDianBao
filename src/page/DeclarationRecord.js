import React, { PureComponent } from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';
import screen from '../common/screen';
import SplitLine from '../widget/SplitLine';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    sectionHeader: {
        height: 30,
        fontSize: 14,
        color: '#8d8d8d',
        textAlignVertical: 'center',
        marginLeft: theme.marginLeft,
    },
    section: {
        flexDirection: 'column',
    },
    itemLine: {
        height: 87,
        flex: 1,
        flexDirection: 'row',
    },
    record: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
    },
    recordBlank: {
        flex: 1,
    },
    recordTitle: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    recordLeft: {
        borderRightWidth: screen.onePixel,
        borderRightColor: theme.listBorderColor,
    },
    recordRight: {
        borderLeftWidth: screen.onePixel,
        borderLeftColor: theme.listBorderColor,
    },
    headerText: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        color: '#3a3a3a',
        fontSize: 13,
        paddingRight: 2,
        paddingLeft: 2,
    },
    recordResult: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordNum: {
        lineHeight: 34,
        fontSize: 34,
        color: '#00aaee',
    },
    recordUnit: {
        fontSize: 12,
        lineHeight: 30,
        marginLeft: 5,
        textAlignVertical: 'bottom',
        color: '#8d8d8d',
    },
});

const datas = [
    {
        data: [
            {
                records: [
                        { type: '双边协商', week: '今日', time: '10:45', num: 2000, unit: '兆瓦时', key: 'record-1' },
                        { type: '集中竞价', week: '周五', time: '10:45', num: 1230, unit: '兆瓦时', key: 'record-2' },
                        { type: '挂牌', week: '周一', time: '10:45', num: 512, unit: '兆瓦时', key: 'record-3' },
                        { type: '挂牌', week: '周一', time: '10:45', num: 122, unit: '兆瓦时', key: 'record-4' },
                ],
            },
        ],
        title: '本月',
    },
    {
        data: [
            {
                records: [
                        { type: '双边协商', week: '今日', time: '10:45', num: 2000, unit: '兆瓦时', key: 'record-1' },
                        { type: '集中竞价', week: '周五', time: '10:45', num: 123, unit: '兆瓦时', key: 'record-2' },
                        { type: '挂牌', week: '周一', time: '10:45', num: 331, unit: '兆瓦时', key: 'record-3' },
                        { type: '双边协商', week: '今日', time: '10:45', num: 675, unit: '兆瓦时', key: 'record-1' },
                        { type: '集中竞价', week: '周五', time: '10:45', num: 2300, unit: '兆瓦时', key: 'record-2' },
                        { type: '挂牌', week: '周一', time: '10:45', num: 2120, unit: '兆瓦时', key: 'record-4' },
                ],
            },
        ],
        title: '5月',
    },
];

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '申报记录',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    constructor() {
        super();
        this.count = 1;
        this.state = {
            datas,
        };
    }

    onEndReached() {
        // console.log('onEndReached');
    }
    doRefresh() {
        // const datas = [item, ...this.state.datas];
        // this.setState({
        //     datas,
        // });
    }

    renderItem(item) {
        const list = this.renderRecords(item);
        return (<View style={styles.section} >
            {list.map(curr => curr)}
        </View>);
    }
    renderRecords({ records }) {
        const len = records.length;
        let count = 0;
        const result = [];
        while (count < len) {
            if (count + 2 <= len) {
                result.push(this.renderItemLine(records[count], records[count + 1]));
                count += 2;
            } else {
                result.push(this.renderItemLine(records[count]));
                count += 1;
            }
        }
        return result;
    }
    renderItemLine(record1, record2) {
        const key = `record-line-${record1.key}`;
        return (<View style={styles.itemLine} key={key} >
            {this.renderRecord(record1, true)}
            {this.renderRecord(record2, false)}
        </View>);
    }

    renderRecord(record, isLeft) {
        if (record) {
            return (
                <View style={[styles.record, isLeft ? styles.recordLeft : styles.recordRight]}>
                    <View style={styles.recordTitle}>
                        <Text style={styles.headerText}>{record.type}</Text>
                        <Text style={styles.headerText}>{record.week}</Text>
                        <Text style={styles.headerText}>{record.time}</Text>
                    </View>
                    <View style={styles.recordResult}>
                        <Text style={styles.recordNum}>{record.num}</Text>
                        <Text style={styles.recordUnit}>{record.unit}</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.recordBlank} />
        );
    }
    renderSectionHeader({ title }) {
        return <Text style={styles.sectionHeader}>{title}</Text>;
    }

    render() {
        const list = this.state.datas;
        return (
            <View style={styles.container} >
                <SectionList
                    removeClippedSubviews={false}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section }) => this.renderSectionHeader(section)}
                    keyExtractor={(item, index) => `record-${index}`}
                    refreshing={false}
                    onRefresh={() => this.doRefresh()}
                    ListFooterComponent={
                        <View>
                            <SplitView style={{ height: 12 }} />
                            <SplitLine title="没有更多记录了" titleStyle={{ color: '#bdbdbd' }} />
                        </View>
                    }
                    onEndReached={() => this.onEndReached()}
                    sections={list}
                />
            </View>
        );
    }
}
