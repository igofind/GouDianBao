import React, { PureComponent } from 'react';
import { InteractionManager, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../style/theme';
import screen from '../common/screen';
import SearchBar from '../widget/SearchBar';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    listItem: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
    },
    month: {
        color: '#8D8D8D',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: theme.marginLeft,
    },
    tools: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btn: {
        color: '#3a3a3a',
        padding: 4,
        borderRadius: 4,
        fontSize: 12,
        marginRight: theme.marginRight,
        borderWidth: screen.twoPixel,
        borderColor: theme.listBorderColor,
    },
});

const list = [
    { guid: 'sdjfiosajfoiji', month: '2017年6月' },
    { guid: 'sdjfiosajsssji', month: '2017年5月' },
    { guid: 'sdjaaosajfoiji', month: '2017年4月' },
    { guid: 'sdjaa22jfoiji3', month: '2017年3月' },
    { guid: 'sdjaaos11iji13', month: '2017年2月' },
    { guid: 'sdja45ajfoiji2', month: '2017年1月' },
];

class ListItem extends PureComponent {
    render() {
        const item = this.props.item;
        return (
            <View style={styles.listItem}>
                <Text style={styles.month}>{item.month}</Text>
                <View style={styles.tools}>
                    <TouchableOpacity activeOpacity={0.6} onPressIn={this.props.onAnnoPress}>
                        <Text style={styles.btn}> 交易公告 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPressIn={this.props.onAnalPress}>
                        <Text style={styles.btn}> 交易分析 </Text>
                    </TouchableOpacity>
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

    constructor() {
        super();
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.fetchData());
    }

    onAnalPress() {
        const { navigate } = this.props.navigation;
        InteractionManager.runAfterInteractions(() => {
            navigate('TradeAnalysis');
        });
    }

    fetchData() {
        this.setState({
            list,
        });
    }

    render() {
        const data = this.state.list;
        return (
            <View style={styles.container}>
                <FlatList
                    removeClippedSubviews={false}
                    renderItem={({ item }) => <ListItem item={item} onAnalPress={() => this.onAnalPress()} />}
                    keyExtractor={item => item.guid}
                    ListHeaderComponent={<SearchBar title="搜索" />}
                    data={data}
                />
            </View>
        );
    }
}
