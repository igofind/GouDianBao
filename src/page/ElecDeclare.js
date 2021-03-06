import React, { PureComponent } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import HeaderBtn from '../widget/HeaderBtn';
import PickerCell from '../widget/PickerCell';
import SplitLine from '../widget/SplitLine';
import SplitView from '../widget/SplitView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
    picker: {
        height: 45,
        backgroundColor: '#fff',

    },
    elecLine: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    elecLabel: {
        fontSize: 15,
        color: '#3a3a3a',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginLeft: theme.marginLeft,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#8d8d8d',
        textAlignVertical: 'center',
        textAlign: 'right',
    },
    unit: {
        fontSize: 14,
        color: '#C8C8C8',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginRight: theme.marginRight,
    },
    income: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: theme.listBorderColor,
        borderBottomWidth: screen.twoPixel,
    },
    incomeLabel: {
        fontSize: 15,
        color: '#8D8D8D',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginLeft: theme.marginLeft,
    },
    incomeNum: {
        flex: 1,
        fontSize: 15,
        color: '#ff2d4b',
        textAlignVertical: 'center',
        textAlign: 'right',
        marginRight: 5,
    },
    btnContainer: {
        backgroundColor: theme.blue,
        borderRadius: 5,
        height: 40,
        marginLeft: theme.marginLeft,
        marginRight: theme.marginLeft,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        color: '#fff',
        fontSize: 18,
    },
    refLine: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    refLineTextLeft: {
        flex: 4,
        fontSize: 13,
        color: '#8d8d8d',
        marginLeft: 10,
    },
    refLineTextRight: {
        alignSelf: 'flex-start',
        fontSize: 13,
        color: '#8d8d8d',
        marginLeft: 10,
        textAlignVertical: 'center',
    },
    refLineUnderLine: {
        borderBottomColor: '#8d8d8d',
        borderBottomWidth: screen.twoPixel,
    },
});

class RefLine extends PureComponent {
    render() {
        return (
            <View style={styles.refLine}>
                <Text style={[styles.refLineTextLeft, { textAlign: 'right' }]}>{this.props.left}</Text>
                <View style={{ flex: 7 }}>
                    {
                        this.props.onPress
                            ? <TouchableOpacity
                                activeOpacity={theme.activeOpacity}
                                onPress={this.props.onPress}
                            >
                                <Text style={
                                    [styles.refLineTextRight, this.props.underline && styles.refLineUnderLine]}
                                >
                                    {this.props.right}
                                </Text>
                            </TouchableOpacity>
                            : <Text style={[styles.refLineTextRight, this.props.underline && styles.refLineUnderLine]}>
                                {this.props.right}
                            </Text>

                    }
                </View>
            </View>
        );
    }
}

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '申报电量',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <HeaderBtn
            onPress={() => { navigation.navigate('DeclarationRecord'); }}
            text="申报记录"
            style={{ width: 60, marginRight: 6 }}
        />,
    });

    constructor() {
        super();
        this.tradeTypes = ['保底分成', '分成', '一口价'];
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <SplitView style={{ height: 12 }} />
                <PickerCell
                    label="申报月份"
                    editable={true}
                    value="2017-06"
                    pickerType="date"
                    datePickerMode="ym"
                    title=""
                />
                <PickerCell label="交易种类" editable={true} value="保底分成" data={this.tradeTypes} />
                <View style={styles.elecLine}>
                    <Text style={styles.elecLabel} >申报电量</Text>
                    <TextInput style={styles.input} value="23456" underlineColorAndroid="transparent" />
                    <Text style={styles.unit}>兆瓦时</Text>
                </View>
                <View style={styles.income}>
                    <Text style={styles.incomeLabel} >预计收益</Text>
                    <Text style={styles.incomeNum}>6780.12</Text>
                    <Text style={styles.unit}>万元</Text>
                </View>
                <SplitView />
                <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={() => {}} style={styles.btnContainer}>
                    <Text style={styles.btn} >提交</Text>
                </TouchableOpacity>
                <SplitView style={{ height: 70 }} />
                <SplitLine title="参考信息" />
                <SplitView style={{ height: 22 }} />
                <RefLine left="5月交易情况:" right="申报电量xxxx 兆瓦时" />
                <RefLine left="" right="申报电量xxxx兆瓦时" />
                <RefLine left="" right="执行电量xxxx兆瓦时" />
                <RefLine left="" right="超欠电量xxxx兆瓦时" />
                <RefLine left="7月年度分解电量:" right="xxxx兆瓦时" />
                <RefLine
                    left="7月交易告:"
                    right="2017年7月月度电力直接交易公告"
                    underline={true}
                    onPress={() => { navigate('Announcement'); }}
                />
            </View>
        );
    }
}
