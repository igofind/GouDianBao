import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import HeaderBtn from '../widget/HeaderBtn';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
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
        if (nextProps.editable !== this.editable) {
            this.editable = nextProps.editable;
            return true;
        }
        return false;
    }

    onChangeText(newValue) {
        this.value = newValue;
    }

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
    }
    render() {
        if (this.value === null) {
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
        };
    }

    render() {
        const { state } = this.props.navigation;
        const editable = state.params && state.params.editable ? state.params.editable : false;
        return (
            <View style={styles.container} >
                <SplitView style={{ height: 12 }} />
                <InputItem label="企业全称" editable={editable} value="北京中恒愽瑞数字电力科技有限公司" />
                <InputItem label="企业法人" editable={editable} value="周庆捷" />
                <InputItem label="企业性质" editable={editable} value="高新技术" />
                <InputItem label="企业地址" editable={editable} value="西二旗大街领袖新硅谷" />
                <InputItem label="注册地址" editable={editable} value="海淀区分局" />
                <InputItem label="税务登记号" editable={editable} value="123456789" />
                <SplitView style={{ height: 12 }} />
                <InputItem label="营销户名" editable={editable} value="高新技术" />
                <InputItem label="营销系统号" editable={editable} value="3456789" />
                <InputItem label="供电电压" editable={editable} value="220V" />
                <InputItem label="关口计量点" editable={editable} value="123456789" />
            </View>
        );
    }
}
