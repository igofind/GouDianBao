import React, { PureComponent } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../style/theme';
import screen from '../common/screen';

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
        fontSize: 16,
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

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={this.props.onPress}>
                <View style={styles.container}>
                    <Text style={styles.label}>{this.props.label}</Text>
                    <View style={styles.valueView} >
                        <Text style={styles.value} >{this.props.value}</Text>
                        <Entypo size={14} style={styles.icon} name="chevron-thin-right" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
