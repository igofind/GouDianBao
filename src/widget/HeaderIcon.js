import React, { PureComponent } from 'react';
import { TouchableHighlight, View } from 'react-native';
import theme from '../style/theme';

export default class extends PureComponent {
    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress()}
            >
                <View style={theme.styles.arrowLeftStyle}>
                    {this.props.children}
                </View>
            </TouchableHighlight>
        );
    }
}
