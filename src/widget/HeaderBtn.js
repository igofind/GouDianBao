import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import HeaderIcon from './HeaderIcon';

export default class extends PureComponent {
    render() {
        return (
            <HeaderIcon onPress={this.props.onPress} style={this.props.style} >
                <Text
                    style={[
                        { color: '#fff', textAlign: 'center', textAlignVertical: 'center', fontSize: 14 },
                        this.props.textStyle,
                    ]}
                >
                    {this.props.text}
                </Text>
            </HeaderIcon>
        );
    }
}
