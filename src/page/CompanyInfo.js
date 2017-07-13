import React, { Component, PureComponent } from 'react';
import { InteractionManager, StyleSheet, Text, TextInput, View } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import HeaderBtn from '../widget/HeaderBtn';
import SplitView from '../widget/SplitView';
import PickerCell from '../widget/PickerCell';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    inputItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
    },
    label: {
        fontSize: 15,
        color: '#3a3a3a',
        marginLeft: theme.marginLeft,
    },
    textInput: {
        flex: 1,
        textAlign: 'right',
        color: '#8d8d8d',
        fontSize: 14,
        marginRight: theme.marginRight,
        paddingRight: 0,
    },
    focus: {
        color: '#3a3a3a',
    },
});

class InputItem extends Component {

    constructor() {
        super();
        this.value = null;
    }

    componentDidMount() {
        this.editable = this.props.editable;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.editable !== this.editable || this.value !== nextProps.value) {
            if (nextProps.editable !== this.editable) {
                this.editable = nextProps.editable;
            }
            if (this.value !== nextProps.value && this.value === null) {
                this.value = nextProps.value;
            }
            return true;
        }

        return false;
    }

    onChangeText(newValue) {
        this.value = newValue;
    }

    /*
    // 为了解决TextInput使用Align:right时，空白部分不能拖动屏幕的问题
    renderInput() {
        if (this.editable) {
            return (<TextInput
                style={styles.textInput}
                placeholder={this.props.placeholder}
                placeholderTextColor={'#8d8d8d'}
                defaultValue={this.value}
                underlineColorAndroid="transparent"
                onChangeText={newValue => this.onChangeText(newValue)}
            />);
        }
        return (<Text style={styles.textInput}>{this.value}</Text>);
    }*/

    renderInput() {
        return (<TextInput
            style={styles.textInput}
            placeholder={this.props.placeholder}
            placeholderTextColor={'#8d8d8d'}
            defaultValue={this.value}
            editable={this.editable}
            underlineColorAndroid="transparent"
            onChangeText={newValue => this.onChangeText(newValue)}
        />);
    }

    render() {
        if (this.value === null && this.props.value !== undefined) {
            this.value = this.props.value;
        }
        return (
            <View style={styles.inputItem} >
                <Text style={styles.label} >{this.props.label}</Text>
                {this.renderInput()}
            </View>
        );
    }
}

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '企业信息',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: (() => {
            if (!navigation.state.params || !navigation.state.params.editable) {
                return (<HeaderBtn
                    onPress={() => { navigation.setParams({ editable: true }); }}
                    textStyle={{ fontSize: 16 }}
                    text="编辑"
                />);
            }
            return (<HeaderBtn
                onPress={() => { navigation.setParams({ editable: false }); }}
                textStyle={{ fontSize: 16 }}
                text="保存"
            />);
        })(),
    });

    constructor() {
        super();
        this.state = {
            editable: false,
            info: {},
            voltageData: ['220V', '380V', '400V', '6kV', '10kV', '35kV', '110kV', '220kV', '330kV'],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const info = {
            qyqc: '北京中恒愽瑞数字电力科技有限公司',
            qyfr: '周庆捷',
            qyxz: '高新技术',
            qydz: '西二旗大街领袖新硅谷',
            zcdz: '海淀分局',
            swdjh: '123456789',
            yxhm: '高新技术',
            yxxth: '3456789',
            gddy: '220V',
            gkjld: '123456789',
        };
        const addrs = ['海淀分局', '昌平分局', '朝阳分局'];
        const voltageData = ['220V', '380V', '400V', '6kV', '10kV', '35kV', '110kV', '220kV', '330kV'];
        this.setState({
            info,
            voltageData,
            addrs,
        });
    }

    render() {
        const info = this.state.info;
        const { state } = this.props.navigation;
        const editable = state.params && state.params.editable ? state.params.editable : false;
        return (
            <View style={styles.container} >
                <SplitView style={{ height: 12 }} />
                <InputItem label="企业全称" editable={editable} value={info.qyqc} />
                <InputItem label="企业法人" editable={editable} value={info.qyfr} />
                <InputItem label="企业性质" editable={editable} value={info.qyxz} />
                <InputItem label="企业地址" editable={editable} value={info.qydz} />
                <PickerCell label="注册地址" editable={editable} value={info.zcdz} data={this.state.addrs} />
                <InputItem label="税务登记号" editable={editable} value={info.swdjh} />
                <SplitView style={{ height: 12 }} />
                <InputItem label="营销户名" editable={editable} value={info.yxhm} />
                <InputItem label="营销系统号" editable={editable} value={info.yxxth} />
                <PickerCell label="供电电压" editable={editable} value={info.gddy} data={this.state.voltageData} />
                <InputItem label="关口计量点" editable={editable} value={info.gkjld} />
            </View>
        );
    }
}
