import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Button extends PureComponent {
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
