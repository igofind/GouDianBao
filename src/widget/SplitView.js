import React, { Component } from 'react';
import { View } from 'react-native';

export default class extends Component {
    render() {
        return (
            <View style={[{ height: this.props.styles ? this.props.styles.height : 20 }]} />
        );
    }
}
