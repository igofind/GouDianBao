import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class extends PureComponent {
    render() {
        return (
            <View style={[{ height: this.props.style ? this.props.style.height : 20 }]} />
        );
    }
}
