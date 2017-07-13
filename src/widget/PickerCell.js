import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { DataPicker, DatePicker } from 'rnkit-actionsheet-picker';
import screen from '../common/screen';
import theme from '../style/theme';

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: theme.listBorderColor,
        borderBottomWidth: screen.twoPixel,
    },
    label: {
        color: '#3a3a3a',
        textAlign: 'center',
        fontSize: 15,
        marginLeft: theme.marginLeft,
        textAlignVertical: 'center',
    },
    valueView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    value: {
        color: '#8d8d8d',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    icon: {
        marginRight: theme.marginRight,
        marginLeft: 8,
    },
});

export default class extends Component {

    static defaultProps = {
        data: ['Nothing'],
        level: 1,
        editable: false,
    };

    constructor() {
        super();
        this.state = {
            value: [],
        };
        this.pickerProps = {
            centerTextColor: '#00aaee',
            outTextColor: '#8d8d8d',
            dividerColor: '#e6e6e6',
            titleSize: 14,
            contentSize: 15,
            doneCancelSize: 15,
        };
    }

    componentWillMount() {
        this.state.value = [this.props.value];

        this.pickerProps.numberOfComponents = this.props.level;
        this.pickerProps.titleText = this.props.title;
        this.pickerProps.isCenterLable = true;
        if (this.isDatePicker()) {
            this.pickerProps.datePickerMode = this.props.datePickerMode;
            this.pickerProps.minimumDate = '2010-01-01';
        }
    }

    shouldComponentUpdate(nextProps) {
        this.state.value = [nextProps.value];
        return true;
    }

    isDatePicker() {
        return this.props.pickerType === 'date';
    }
    showDataPicker() {
        DataPicker.show({
            dataSource: [...this.props.data],
            defaultSelected: this.state.value,
            ...this.pickerProps,
            onPickerConfirm: (selectedData) => {
                this.setState({
                    value: [...selectedData],
                });
                // TODO 触发确认事件，回调给父组件传值
            },
            onPickerCancel: () => {
            },
            onPickerDidSelect: (selectedData) => {
                this.setState({
                    value: [...selectedData],
                });
            },
        });
    }

    showDatePicker() {
        DatePicker.show({
            selectedDate: this.state.value.join(''),
            ...this.pickerProps,
            onPickerConfirm: (selectedData) => {
                this.setState({
                    value: [selectedData],
                });
                // TODO 触发确认事件，回调给父组件传值
            },
            onPickerCancel: () => {
            },
            onPickerDidSelect: (selectedData, selectedIndex) => {
                this.setState({
                    value: [selectedData],
                });
            },
        });
    }

    showPicker() {
        if (this.isDatePicker()) {
            this.showDatePicker();
        } else {
            this.showDataPicker();
        }
    }

    render() {
        const value = this.state.value;
        const activeOpacity = this.props.editable ? theme.activeOpacity : 1;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPressIn={() => this.props.editable && this.showPicker()}
            >
                <View style={styles.container}>
                    <Text style={styles.label}>{this.props.label}</Text>
                    <View style={styles.valueView} >
                        <Text style={styles.value} >{this.isDatePicker() ? value : value.join('')}</Text>
                        <Entypo size={14} style={styles.icon} name="chevron-thin-right" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
