import React, { PureComponent } from 'react';
import { InteractionManager, StyleSheet, Text, View } from 'react-native';
import Echarts from '../echarts/index';
import PanelFooter from '../scene/Home/PanelFooter';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';
import Panel from '../widget/Panel';
import ProgressBar from '../widget/ProgressBar';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
    barCell: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellLabel: {
        fontSize: 13,
        color: '#8d8d8d',
        width: 85,
        marginLeft: theme.marginLeft,
    },
    cellNum: {
        fontSize: 15,
        marginLeft: theme.marginLeft,
        marginRight: 6,
    },
    cellUnit: {
        fontSize: 10,
        lineHeight: 17,
        color: '#bfbfbf',
        marginRight: theme.marginRight,
    },
});

const colors = ['#6CAEF7', '#FFBE58', '#47CFA0'];

const config = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        position: [20, 0],
        textStyle: {
            fontSize: 10,
        },
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        top: 'bottom',
        itemWidth: 6,
        itemHeight: 6,
        data: [
            {
                name: '申报电量',
                icon: 'rect',
            },
            {
                name: '成交电量',
                icon: 'rect',
            },
        ],
        textStyle: {
            fontSize: 8,
            color: '#8d8d8d',
        },
        selectedMode: false,
        padding: 0,
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            cursor: 'normal',
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{c} 兆瓦时',
                    textStyle: {
                        fontSize: 8,
                    },
                },
                emphasis: {
                    position: 'outside',
                    formatter: '{c} 兆瓦时',
                    textStyle: {
                        fontSize: 8,
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 5,
                    length2: 5,
                },
                emphasis: {
                    length: 5,
                    length2: 5,
                },
            },
            data: [
                { value: 100, name: '成交电量' },
                { value: 300, name: '申报电量' },
            ],
        },
    ],
    color: ['#47CFA0', '#00aaee'],
};

class ProgressBarCell extends PureComponent {
    render() {
        return (
            <View style={styles.barCell}>
                <Text style={styles.cellLabel}>{this.props.label}</Text>
                <View style={{ flex: 1 }}>
                    <ProgressBar
                        unfilledColor="#8d8d8d"
                        color={this.props.color}
                        progress={1}
                        borderWidth={1}
                        height={6}
                        width={170 * this.props.progress}
                        borderColor="#fff"
                        borderRadius={4}
                    />
                </View>
                <Text style={[styles.cellNum, { color: this.props.color }]}>{this.props.num}</Text>
                <Text style={styles.cellUnit}>兆瓦时</Text>
            </View>
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

    navigate(...args) {
        InteractionManager.runAfterInteractions(() => this.props.navigation.navigate(...args));
    }

    render() {
        return (
            <View >
                <SplitView style={{ height: 12 }} />
                <Panel title="年度累计交易" onPressDetail={() => this.navigate('MonthElecDetail')}>
                    <Echarts option={config} height={150} />
                    <PanelFooter llabel="总考核费用" rlabel="总利润" khfy="1085" lr="3085" />
                    <ProgressBarCell label="总申报电量" color={colors[0]} progress={1} num={3016} />
                    <ProgressBarCell label="总成交电量" color={colors[1]} progress={0.8} num={2516} />
                    <ProgressBarCell label="实际执行电量" color={colors[2]} progress={0.9} num={2816} />
                    <SplitView style={{ height: 12 }} />
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel title="本月交易" detailLink={false} >
                    <SplitView style={{ height: 12 }} />
                    <ProgressBarCell label="申报电量" color={colors[0]} progress={1} num={3016} />
                    <ProgressBarCell label="成交电量" color={colors[1]} progress={0.8} num={2036} />
                    <SplitView style={{ height: 12 }} />
                </Panel>
            </View>
        );
    }
}
