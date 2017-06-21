import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.blue,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 40,
        marginLeft: theme.marginLeft,
        marginRight: theme.marginLeft,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
});

class LoginButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={[styles.button, this.props.btnStyle]}>
                    <Text style={[styles.text, this.props.textStyle]}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default LoginButton;
