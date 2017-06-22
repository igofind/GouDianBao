import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class extends PureComponent {
    render() {
        return (
            <View style={[{ height: this.props.styles ? this.props.styles.height : 20 }]} />
        );
    }
}
