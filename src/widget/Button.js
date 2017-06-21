import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={this.props.style}>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;
