import moment from 'moment';
import React, { Component, PureComponent } from 'react';
import {
    Alert,
    FlatList,
    Image,
    InteractionManager,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import theme from '../style/theme';
import screen from '../common/screen';
import ArrowLeft from '../widget/ArrowLeft';
import HeaderBtn from '../widget/HeaderBtn';
import HeaderIcon from '../widget/HeaderIcon';
import SearchBar from '../widget/SearchBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    SO_swipeOut: {
        backgroundColor: '#fff',
    },
    SO_itemBody: {
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: screen.onePixel,
        borderBottomColor: theme.listBorderColor,
    },
    SO_itemImage: {
        width: 44,
        height: 44,
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
    },
    SO_itemBtnContainer: {
        height: 65,
        justifyContent: 'center',
        backgroundColor: '#FF2D4B',
    },
    SO_itemBtn: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    SO_itemArrowRight: {
        width: 14,
        marginLeft: 4,
        marginRight: theme.marginRight,
    },
    SO_itemDot: {
        width: 8,
    },
    SO_itemTitle: {
        fontSize: 14,
        color: '#3a3a3a',
    },
    SO_itemTitle_read: {
        color: '#8d8d8d',
    },
    SO_itemTime: {
        fontSize: 12,
        color: '#8d8d8d',
    },
});

class SwipeOutBtn extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={theme.activeOpacity}
                onPressIn={this.props.onPress}
                style={styles.SO_itemBtnContainer}
            >
                <Text style={styles.SO_itemBtn}>{this.props.btnText}</Text>
            </TouchableOpacity>
        );
    }
}

class SwipeOutItem extends Component {

    constructor() {
        super();
        this.state = {
            read: null,
        };
    }

    componentDidMount() {
        if (this.props.read === true) {
            this.setState({
                read: this.props.read,
            });
        }
    }

    markRead() {
        this.setState({
            read: true,
        });
    }

    render() {
        const read = this.state.read;
        const type = this.props.type === 'remind' ? '[提醒]' : '[通知]';
        const image =
            this.props.type === 'remind'
            ? require('../image/notification_remin.png')
            : require('../image/notification_notice.png');
        return (
            <Swipeout
                right={[
                    {
                        component: <SwipeOutBtn btnText={this.props.btnText} onPress={() => this.markRead()} />,
                    },
                ]}
                buttonWidth={62}
                style={styles.SO_swipeOut}
                close={read}
                disabled={read}
                {...this.props}
            >
                <TouchableOpacity
                    activeOpacity={theme.activeOpacity}
                    onPress={() => { this.markRead(); this.props.onItemPress && this.props.onItemPress(); }}
                    style={styles.SO_itemBody}
                >
                    <Image source={image} style={styles.SO_itemImage} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={[styles.SO_itemTitle, read && styles.SO_itemTitle_read]}>
                            {type}{this.props.title}
                        </Text>
                        <Text style={styles.SO_itemTime}>{this.props.time}</Text>
                    </View>
                    <Octicons
                        name="primitive-dot"
                        size={12}
                        color={read ? '#fff' : '#FF2D4B'}
                        style={styles.SO_itemDot}
                    />
                    <SimpleLineIcons
                        name="arrow-right"
                        size={14}
                        color="#8d8d8d"
                        style={styles.SO_itemArrowRight}
                    />
                </TouchableOpacity>
            </Swipeout>
        );
    }
}

export default class extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '消息中心',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: (<View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 6 }}>
            <HeaderBtn
                text="编辑"
                style={{ marginRight: 12, width: 'auto' }}
                textStyle={{ lineHeight: 22 }}
                onPress={() => { Alert.alert('编辑'); }}
            />
            <HeaderIcon style={{ width: 'auto', paddingRight: 0 }} onPress={() => { Alert.alert('Filter Icon'); }}>
                <FontAwesome name="filter" size={20} color="#fff" />
            </HeaderIcon>
        </View>),
    });

    constructor() {
        super();
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.fetchData();
        });
    }

    fetchData() {
        const data = [
            {
                id: '121230',
                type: 'remind',
                read: false,
                title: '尊敬的客户，您的5月帐单已经...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121231',
                type: 'notice',
                read: false,
                title: '关于5月份参与电力直接交易的...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121232',
                type: 'remind',
                read: false,
                title: '尊敬的客户，您的4月帐单已经...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121233',
                type: 'notice',
                read: false,
                title: '关于4月份参与电力直接交易的...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121234',
                type: 'remind',
                read: false,
                title: '尊敬的客户，您的3月帐单已经...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121235',
                type: 'remind',
                read: false,
                title: '尊敬的客户，您的2月帐单已经...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121236',
                type: 'remind',
                read: true,
                title: '关于3月份参与电力直接交易的...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121237',
                type: 'notice',
                read: true,
                title: '关于2月份参与电力直接交易的...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121238',
                type: 'remind',
                read: true,
                title: '尊敬的客户，您的1月帐单已经...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
            {
                id: '121239',
                type: 'notice',
                read: true,
                title: '关于1月份参与电力直接交易的...',
                time: moment().format('YYYY.MM.DD hh:mm '),
            },
        ];

        this.setState({
            data,
        });
    }

    navigate() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.navigate('Announcement'); // TODO
        });
    }

    render() {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('#000');
        const data = this.state.data;
        return (
            <View style={styles.container}>
                <SearchBar title="搜索" />

                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<SwipeOutItem
                        btnText="忽略"
                        type={item.type}
                        title={item.title}
                        time={item.time}
                        read={item.read}
                        onItemPress={() => { this.navigate(); }}
                    />)}
                />
            </View>
        );
    }
}
