import React, { PureComponent } from 'react';
import { InteractionManager, processColor, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import Echarts from '../../echarts/index';
import theme from '../../style/theme';
import Bell from '../../widget/Bell';
import EmptyIcon from '../../widget/EmptyIcon';
import Panel from '../../widget/Panel';
import SplitView from '../../widget/SplitView';
import Card from './Card';
import PanelFooter from './PanelFooter';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barCharContainer: {
       /* marginTop: 5,
        height: 95,*/
        height: 100,
        backgroundColor: '#fff',
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight },
    cards: {
        flexDirection: 'row',
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
        legend: {
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
            top: 'bottom',
            textStyle: {
                fontSize: 8,
            },
            itemWidth: 6,
            itemHeight: 6,
            padding: 0,
            selectedMode: false,
        },
        xAxis: {
            data: ['总合同电量', '总实际执行电量'],
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false, // 不显示刻度线
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#D3D3D3',
                },
            },
            min: 1,
        },
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
            max: 20,
            minInterval: 5,
        },
        series: [
            {
                name: '总合同电量',
                type: 'bar',
                barWidth: 28,
                data: [16],
                tooltip: {
                    formatter: '{b}：{c}',
                },
            },
            {
                name: '总实际执行电量',
                type: 'bar',
                barWidth: 28,
                barGap: '200%', // 柱间距离
                data: [9],
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
                    { value: 100, name: '成交电量' },
                    { value: 300, name: '申报电量' },
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

const BLUE = processColor('#00AAEE');
const GREEN = processColor('#47CFA0');

const chartsOpts = {
    chartDescription: {
        text: '兆瓦时',
        positionX: 60,
        positionY: 23,
        textSize: 6,
        textColor: processColor('#8d8d8d'),
    },
    legend: {
        enabled: true,
        position: 'BELOW_CHART_CENTER',
        textSize: 8,
        textColor: processColor('#8d8d8d'),
        formSize: 6,
        xEntrySpace: 40,
        wordWrapEnabled: false,
    },
    xAxis: {
        enabled: false,
    },
    yAxis: {
        left: {
            drawLabels: true,
            drawAxisLine: true,
            drawGridLines: false,
            axisMinimum: 0,
            zeroLine: {
                enabled: true,
                lineWidth: 0.5,
            },
            spaceTop: 10,
            textSize: 8,
            textColor: processColor('#8d8d8d'),
        },
        right: {
            enabled: false,
        },
    },
};

class HomeScene extends PureComponent {

    static navigationOptions = {
        headerStyle: theme.styles.homeHeaderStyle,
        headerTitle: '首页',
        headerTitleStyle: theme.styles.homeHeaderTitleStyle,
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="home" size={theme.tabIconSize} color={tintColor} />),
        headerLeft: <EmptyIcon />,
        headerRight: <Bell onPress={() => { }} />,
    };

    constructor() {
        super();
        this.state = {
            // barChartData: this.genBarChartData(19, 12),
            pieChart1Data: this.genPieChartData1(400, 120),
            pieChart2Data: this.genPieChartData2(400, 120),
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            const pieChartData = Math.floor(Math.random() * 300);
            this.setState({
                barChartData: this.genBarChartData(Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)),
                pieChart1Data: this.genPieChartData1(pieChartData + 100, pieChartData),
            });
        }, 2000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    genBarChartData(zhtdl, zsjzxdl) {
        return {
            dataSets: [{
                values: [
                    { x: 0, y: 0 },
                    { y: zhtdl, x: 2.5 },
                ],
                label: '总合同电量',
                animation: { durationY: 300 },
                config: {
                    colors: [GREEN],
                    drawValues: false,
                    animation: { durationY: 300 },
                },
            }, {
                values: [
                    { y: zsjzxdl, x: 5.2 },
                    { x: 8, y: 0 },
                ],
                label: '总实际执行电量',
                animation: { durationY: 300 },
                config: {
                    colors: [BLUE],
                    drawValues: false,
                    animation: { durationY: 300 },
                },
            }],
            animation: { durationY: 300 },
        };
    }

    genPieChartData1(sbdl, cjdl) {
        return {
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
                        { value: cjdl, name: '成交电量' },
                        { value: sbdl, name: '申报电量' },
                    ],
                },
            ],
            color: ['#47CFA0', '#00aaee'],
        };
    }

    genPieChartData2(zhtdl, zsjzxdl) {
        return {
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
                        { value: zsjzxdl, name: '总实际执行电量' },
                        { value: zhtdl, name: '总合同电量' },
                    ],
                },
            ],
            color: ['#FF6D5D', '#FFBE58'],
        };
    }

    navigate(...args) {
        InteractionManager.runAfterInteractions(() => this.props.navigation.navigate(...args));
    }

    renderCards() {
        const cards = [
            {
                image: require('../../image/home_dlsb.png'),
                label: '电量申报',
                key: 'dlsb',
                page: 'ElecDeclare',
            },
            {
                image: require('../../image/home_sccjqk.png'),
                label: '市场成交情况',
                key: 'sccjqk',
                page: 'DealList',
            },
            {
                image: require('../../image/home_htzxqk.png'),
                label: '合同执行情况',
                key: 'htzxqk',
                page: 'ContractExec',
            },
        ];
        return cards.map(curr => (<Card
            image={curr.image}
            label={curr.label}
            key={curr.key}
            onPress={() => this.navigate(curr.page)}
        />));
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <SplitView style={{ height: 12 }} />
                <View style={styles.cards} >
                    {this.renderCards()}
                </View>
                {/* <SplitView style={{ height: 12 }} />
                <Panel title="年度执行情况" onPressDetail={() => this.navigate('DealAndElec')} >
                    <View style={styles.barCharContainer}>
                        <BarChart
                            animation={{ durationX: 300, durationY: 300 }}
                            style={{ flex: 1 }}
                            touchEnabled={false}
                            scaleEnabled={false}
                            chartDescription={chartsOpts.chartDescription}
                            data={this.state.barChartData}
                            xAxis={chartsOpts.xAxis}
                            yAxis={chartsOpts.yAxis}
                            legend={chartsOpts.legend}
                        />
                    </View>
                    <PanelFooter llabel="考核费用" rlabel="利润" khfy="1085" lr="3085" />
                </Panel>*/}
                <SplitView style={{ height: 12 }} />
                <Panel title="年度执行情况" onPressDetail={() => this.navigate('DealAndElec')} >
                    <View style={styles.barCharContainer}>
                        <Echarts option={echartsOptions[0]} height={100} />
                    </View>
                    <PanelFooter llabel="考核费用" rlabel="利润" khfy="1085" lr="3085" />
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel title="5月成交及用电情况" onPressDetail={() => this.navigate('ContractExec')} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Echarts option={this.state.pieChart1Data} height={100} width="50%" />
                        <Echarts option={this.state.pieChart2Data} height={100} width="50%" />
                    </View>
                    <PanelFooter llabel="考核费用" rlabel="利润" khfy="1085" lr="3085" />
                </Panel>
            </ScrollView>
        );
    }
}

export default HomeScene;
