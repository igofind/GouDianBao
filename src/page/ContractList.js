import React, { PureComponent } from 'react';
import { InteractionManager, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SplitView from '../widget/SplitView';
import ArrowLeft from '../widget/ArrowLeft';
import theme from '../style/theme';
import EmptyIcon from '../widget/EmptyIcon';
import screen from '../common/screen';

const execContList = [
    {
        image: require('../image/contract_dayonghu.png'),
        title: '2017年广东电力大用户与发电企...',
        num: '10008510',
    },
    {
        image: require('../image/contract_daili.png'),
        title: '2017年能源代理合同',
        num: '10006321',
    },
    {
        image: require('../image/contract_dayonghu.png'),
        title: '广东电力大用户与发电企业购电合同',
        num: '10001210',
    },
    {
        image: require('../image/contract_daili.png'),
        title: '广东电力大用户购电合同',
        num: '10008110',
    },
];
const completeContList = [
    {
        image: require('../image/contract_dayonghu.png'),
        title: '2017年广东电力大用户与发电企...',
        num: '10003310',
    },
    {
        image: require('../image/contract_daili.png'),
        title: '2017年能源代理合同',
        num: '10005111',
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: 65,
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: '#e6e6e6',
        flexDirection: 'row',
    },
    itemImg: {
        width: 69,
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
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

class ListItem extends PureComponent {
    render() {
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
                        <Image source={this.props.image} style={styles.image} />
                    </View>
                    <View style={styles.itemBody} >
                        <View style={styles.titleLine} >
                            <Text style={styles.title}>{this.props.title}</Text>
                        </View>
                        <View style={styles.numLine} >
                            <FontAwesome name="list-ol" size={fontSize} color={color} />
                            <Text style={{ color, fontSize, marginLeft: textMarginIcon }}>{this.props.num}</Text>
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

const list = (<ScrollView style={styles.container}>
    <SplitView style={{ height: 12 }} />
    <Header title="执行中的合同" />
    {execContList.map(item => (
        <ListItem
            image={item.image}
            title={item.title}
            num={item.num}
            key={item.key}
        />
    ))}
    <SplitView style={{ height: 12 }} />
    <Header title="已执行完成的合同" />
    {completeContList.map(item => (
        <ListItem
            image={item.image}
            title={item.title}
            num={item.num}
            key={item.key}
        />
    ))}
    <SplitView />
</ScrollView>);

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '我的合同',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    constructor() {
        super();
        this.state = {
            list: null,
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                list,
            });
        });
    }

    render() {
        return (this.state.list);
    }
}
