import React, { PureComponent } from 'react';
import { InteractionManager, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, SectionList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../widget/ProgressBar';
import SplitView from '../widget/SplitView';
import ArrowLeft from '../widget/ArrowLeft';
import theme from '../style/theme';
import EmptyIcon from '../widget/EmptyIcon';
import screen from '../common/screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    header: {
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: '#e6e6e6',
    },
    headerText: {
        fontSize: 15,
        lineHeight: 18,
        color: '#3A3A3A',
        borderLeftWidth: 4,
        borderLeftColor: '#00aaee',
        marginLeft: theme.marginLeft,
        paddingLeft: 10,
    },
    listItem: {
        height: 123,
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: '#e6e6e6',
        flexDirection: 'row',
    },
    itemImg: {
        width: 68,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    image: {
        marginLeft: 12,
        marginTop: 12,
        width: 44,
        height: 44,
    },
    itemBody: {
        flex: 1,
        paddingBottom: 12,
        paddingTop: 12,
        flexDirection: 'column',
    },
    itemIcon: {
        flexDirection: 'row',
        width: 26,
    },
    icon: {
        alignSelf: 'center',
        color: '#8d8d8d',
    },
    titleLine: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        color: '#3a3a3a',
    },
    numLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    timeLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    elecLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bar: {
        height: 12,
        marginTop: 4,
        marginBottom: 4,
    },
});

class Header extends PureComponent {
    render() {
        return (
            <View>
                <SplitView style={{ height: 12 }} />
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

class ListItem extends PureComponent {
    render() {
        const item = this.props.item;
        const progress = item.used / item.total;
        let progressColor = '#6CAEF7';
        if (progress > 1) {
            progressColor = '#F15A4A';
        } else if (progress > 0.5) {
            progressColor = '#FFBE58';
        }
        const color = '#8d8d8d';
        const fontSize = 14;
        const textMarginIcon = 4;
        return (
            <TouchableOpacity
                activeOpacity={theme.activeOpacity}
                onPress={this.props.onPress}
            >
                <View style={styles.listItem}>
                    <View style={styles.itemImg}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.itemBody} >
                        <View style={styles.titleLine} >
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View style={styles.numLine} >
                            <FontAwesome name="list-ol" size={fontSize} color={color} />
                            <Text style={{ color, fontSize, marginLeft: textMarginIcon }}>{item.num}</Text>
                            <FontAwesome name="building-o" size={fontSize} color={color} style={{ marginLeft: 20 }} />
                            <Text style={{ color, fontSize, marginLeft: textMarginIcon }}>{item.elecType}</Text>
                        </View>
                        <View style={styles.timeLine} >
                            <Ionicons name="md-time" size={fontSize} color={color} />
                            <Text style={{ color, fontSize, marginLeft: textMarginIcon }}>{item.time}</Text>
                        </View>
                        <View style={styles.bar} >
                            <ProgressBar
                                unfilledColor="#f5f5f5"
                                color={progressColor}
                                progress={progress}
                                borderWidth={1}
                                height={10}
                                width={240}
                                borderColor="#fff"
                                borderRadius={4}
                            />
                        </View>
                        <View style={styles.elecLine} >
                            <Text style={{ color: progressColor }}>{item.used}</Text>
                            <Text> / {item.total}千瓦时</Text>
                        </View>

                    </View>
                    <View style={styles.itemIcon}>
                        <Entypo size={14} style={styles.icon} name="chevron-thin-right" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '合同执行情况',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    constructor() {
        super();
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.fetchData());
    }

    fetchData() {
        const list = [
            {
                data:
                [
                    {
                        image: require('../image/contract_dayonghu.png'),
                        title: '2017年广东电力大用户与发电企...',
                        num: '10008510',
                        elecType: '乡村居民生活用电',
                        time: '2017.06.01 - 2017.09.01',
                        used: 3000,
                        total: 10000,
                    },
                    {
                        image: require('../image/contract_daili.png'),
                        title: '2017年能源代理合同',
                        num: '10001321',
                        elecType: '乡村居民生活用电',
                        time: '2017.06.01 - 2017.09.01',
                        used: 12000,
                        total: 10000,
                    },

                ],
                title: '执行中的合同',
            },
            {
                data:
                [
                    {
                        image: require('../image/contract_dayonghu.png'),
                        title: '2017年广东电力大用户与发电企...',
                        num: '10008510',
                        elecType: '乡村居民生活用电',
                        time: '2017.06.01 - 2017.09.01',
                        used: 3000,
                        total: 10000,
                    },
                    {
                        image: require('../image/contract_daili.png'),
                        title: '2017年能源代理合同',
                        num: '10008231',
                        elecType: '乡村居民生活用电',
                        time: '2017.06.01 - 2017.09.01',
                        used: 10000,
                        total: 10000,
                    },

                ],
                title: '已执行完成的合同',
            },
        ];
        this.setState({
            list,
        });
    }

    navigate(...args) {
        InteractionManager.runAfterInteractions(() => this.props.navigation.navigate(...args));
    }

    render() {
        const datas = this.state.list;
        return (<ScrollView style={styles.container}>
            <SectionList
                removeClippedSubviews={false}
                renderItem={({ item }) => <ListItem item={item} onPress={() => this.navigate('ContractDetail')} />}
                keyExtractor={(item, index) => (index)}
                renderSectionHeader={({ section }) => <Header title={section.title} />}
                sections={datas}
            />
            <SplitView />
        </ScrollView>);
    }
}
