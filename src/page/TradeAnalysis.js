import React, { PureComponent } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import screen from '../common/screen';
import Echarts from '../echarts/index';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';
import Panel from '../widget/Panel';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    panel: {
        flex: 1,
    },
    barCharPanelBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
        marginBottom: 6,
        marginTop: 6,
        height: 111,
    },
    barCharContainer: {
        flex: 1,
        height: 100,
        borderRightColor: theme.listBorderColor,
        borderRightWidth: screen.onePixel,
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: theme.marginLeft,
    },
    TLN_Container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    TLN_Title: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 12,
        color: '#3a3a3a',
        height: 24,
    },
    TLN_Body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: theme.listBorderColor,
        borderTopWidth: screen.onePixel,
        borderBottomColor: theme.listBorderColor,
        borderBottomWidth: screen.onePixel,
    },
    TLN_Item: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    TLN_Item_BORDER: {
        borderLeftColor: theme.listBorderColor,
        borderLeftWidth: screen.onePixel,
        borderRightColor: theme.listBorderColor,
        borderRightWidth: screen.onePixel,
    },
    TLN_Label: {
        color: '#8d8d8d',
        fontSize: 10,
    },
    TLN_Num: {
        color: '#00aaee',
        fontSize: 12,
    },
    pieChartPanelBody: {
        height: 156,
    },
});

const echartsOptions = [
    {
        title: {
            show: false,
        },
        tooltip: {
            textStyle: {
                fontSize: 10,
            },
        },
        grid: {
            top: 30,
            height: 50,
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    {
                        value: '售电公司',
                        textStyle: {
                            fontSize: 10,
                            color: '#8d8d8d',
                        },
                    },
                    {
                        value: '独立用户',
                        textStyle: {
                            fontSize: 10,
                            color: '#8d8d8d',
                        },
                    },
                ],
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                },
                axisLine: {
                    inside: true,
                    interval: 1,
                    lineStyle: {
                        color: '#D3D3D3',
                    },
                },
            },
        ],
        yAxis: {
            name: '兆瓦时',
            nameTextStyle: {
                fontSize: 8,
                color: '#8d8d8d',
            },
            nameGap: 10,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#8d8d8d',
                    fontSize: 8,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#D3D3D3',
                },
            },
            inverse: false,
            min: 0,
            minInterval: 5,
        },
        series: [
            {
                type: 'bar',
                barWidth: 20,
                data: [17, 0],
                stack: 'chart',
                tooltip: {
                    formatter: '{b}：{c}',
                },
            },
            {
                type: 'bar',
                barWidth: 20,
                data: [0, 14],
                stack: 'chart',
                barGap: '10%',
                barCategoryGap: '10%',
                tooltip: {
                    formatter: '{a}：{c}',
                },
            },
        ],
        color: ['#47CFA0', '#00aaee'],
    },
    {
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
                    { value: 265, name: '成交电量' },
                    { value: 500, name: '申报电量' },
                ],
            },
        ],
        color: ['#47CFA0', '#00aaee'],
    },
    {
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
                    name: '总合同电量',
                    icon: 'rect',
                },
                {
                    name: '总实际执行电量',
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
                    { value: 100, name: '总实际执行电量' },
                    { value: 300, name: '总合同电量' },
                ],
            },
        ],
        color: ['#FF6D5D', '#FFBE58'],
    },
];

class TitleLabelNum extends PureComponent {
    static defaultProps = {
        label: ['lable1', 'lable2', 'lable3'],
        num: [0, 0, 0],
        numColor: ['#00aaee', '#00aaee', '#00aaee'],
    };
    render() {
        const label = this.props.label;
        const num = this.props.num;
        const numColor = this.props.numColor;
        return (
            <View style={styles.TLN_Container}>
                <Text style={styles.TLN_Title} >{this.props.title}</Text>
                <View style={[styles.TLN_Body, this.props.style]}>
                    <View style={styles.TLN_Item}>
                        <Text style={styles.TLN_Label}>{label[0]}</Text>
                        <Text style={[styles.TLN_Num, numColor && { color: numColor[0] }]}>{num[0]}</Text>
                    </View>
                    <View style={[styles.TLN_Item, styles.TLN_Item_BORDER]}>
                        <Text style={styles.TLN_Label}>{label[1]}</Text>
                        <Text style={[styles.TLN_Num, numColor && { color: numColor[1] }]}>{num[1]}</Text>
                    </View>
                    <View style={styles.TLN_Item}>
                        <Text style={styles.TLN_Label}>{label[2]}</Text>
                        <Text style={[styles.TLN_Num, numColor && { color: numColor[2] }]}>{num[2]}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '市场成交情况',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    render() {
        StatusBar.setTranslucent(true);
        return (
            <View style={styles.container} >
                <Panel detailLink={false} title="用度直接交易成交情况" style={styles.panel}>
                    <View style={styles.barCharPanelBody}>
                        <View style={styles.barCharContainer}>
                            <Echarts option={echartsOptions[0]} height={100} />
                        </View>
                        <View style={styles.detailContainer}>
                            <TitleLabelNum
                                title="申报价"
                                label={['最高', '最低', '成交最低']}
                                num={['320.0', '25.64', '350.11']}
                                numColor={['#ff2d4b', '#47cfa0', '#47cfa0']}
                            />
                            <TitleLabelNum
                                title="成交均价"
                                label={['交易均价', '售电公司', '电力用户']}
                                num={['303.5', '303.0', '305.0']}
                                numColor={['#00aaee', '#00aaee', '#00aaee']}
                                style={{ borderBottomWidth: 0 }}
                            />
                        </View>
                    </View>
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel detailLink={false} title="用度直接交易购电侧不同价区申报电量占比" style={styles.panel}>
                    <View style={styles.pieChartPanelBody}>
                        <Echarts option={echartsOptions[1]} height={111} />
                    </View>
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel detailLink={false} title="用度直接交易售电侧不同价区申报电量占比" style={styles.panel}>
                    <View style={styles.pieChartPanelBody}>
                        <Echarts option={echartsOptions[2]} height={111} />
                    </View>
                </Panel>
            </View>
        );
    }
}
