import React, { PureComponent } from 'react';
import { InteractionManager, StatusBar, StyleSheet, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import Echarts from 'native-echarts';
import theme from '../../style/theme';
import Bell from '../../widget/Bell';
import SplitView from '../../widget/SplitView';
import Card from './Card';
import Panel from '../../widget/Panel';
import PanelFooter from './PanelFooter';
import EmptyIcon from '../../widget/EmptyIcon';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        flexDirection: 'row',
    },
});

const echartsOptions = [
    {
        title: {
            show: false,
        },
        tooltip: {},
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
                fontSize: 10,
            },
            itemWidth: 6,
            itemHeight: 6,
            padding: 0,
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
        },
        yAxis: {
            name: '兆瓦时',
            nameTextStyle: {
                fontSize: 10,
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
                    fontSize: 10,
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
            barSeries: null,
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
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <SplitView style={{ height: 12 }} />
                <View style={styles.cards} >
                    {this.renderCards()}
                </View>
                <SplitView style={{ height: 12 }} />
                <Panel title="年度执行情况" onPressDetail={() => this.navigate('ContractExec')} >
                    <Echarts option={echartsOptions[0]} height={100} />
                    <PanelFooter khfy="1085" lr="3085" />
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel title="5月成交及用电情况" onPressDetail={() => this.navigate('ContractExec')} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Echarts option={echartsOptions[1]} height={100} width="50%" />
                        <Echarts option={echartsOptions[2]} height={100} width="50%" />
                    </View>
                    <PanelFooter khfy="3085" lr="3085" />
                </Panel>
            </View>
        );
    }
}

export default HomeScene;
