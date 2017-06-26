import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import theme from '../style/theme';

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={this.props.activeOpacity || 0.7}
                onPressIn={this.props.onPress}
            >
                <View style={[theme.styles.headerIconStyle, this.props.style]}>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}
