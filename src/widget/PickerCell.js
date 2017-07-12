import moment from 'moment';
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
    };

    constructor() {
        super();
        this.state = {
            value: [],
        };
        this.isFirstRender = true;
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
        this.editable = this.props.editable;
        this.pickerProps.numberOfComponents = this.props.level;
        this.pickerProps.titleText = this.props.title;
        this.pickerProps.isCenterLable = true;
        if (this.isDatePicker()) {
            this.pickerProps.datePickerMode = this.props.datePickerMode;
            this.pickerProps.minimumDate = '2010-01-01';
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.editable !== this.editable || this.state.value !== nextProps.value) {
            if (nextProps.editable !== this.editable) {
                this.editable = nextProps.editable;
            }
            if (this.state.value !== nextProps.value && this.state.value === null) {
                this.state.value = nextProps.value;
            }
            return true;
        }

        return false;
    }

    isDatePicker() {
        return this.props.pickerType === 'date';
    }
    showDataPicker(selectValue) {
        DataPicker.show({
            dataSource: [...this.props.data],
            defaultSelected: selectValue,
            ...this.pickerProps,
            onPickerConfirm: (selectedData, selectedIndex) => {
                this.setState({
                    value: selectedData,
                });
                // TODO 触发确认事件，回调给父组件传值
            },
            onPickerCancel: () => {
            },
            onPickerDidSelect: (selectedData, selectedIndex) => {
                // TODO ios
            },
        });
    }

    showDatePicker(selectValue) {
        DatePicker.show({
            selectedDate: selectValue,
            ...this.pickerProps,
            onPickerConfirm: (selectedData, selectedIndex) => {
                this.setState({
                    value: selectedData,
                });
                // TODO 触发确认事件，回调给父组件传值
            },
            onPickerCancel: () => {
            },
            onPickerDidSelect: (selectedData, selectedIndex) => {
                // TODO ios
            },
        });
    }

    showPicker(selectValue) {
        if (this.isDatePicker()) {
            this.showDatePicker(selectValue);
        } else {
            this.showDataPicker(selectValue);
        }
    }

    render() {
        let value = this.state.value;
        if (this.isFirstRender) {
            if (this.props.value) {
                if (this.isDatePicker()) {
                    value = this.props.value;
                } else {
                    value = [this.props.value];
                }
            }
            this.isFirstRender = false;
        }
        const activeOpacity = this.editable ? theme.activeOpacity : 1;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPressIn={() => this.editable && this.showPicker(value)}
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
