import React, { PureComponent } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../style/theme';
import HeaderIcon from './HeaderIcon';

export default class extends PureComponent {
    render() {
        return (
            <HeaderIcon onPress={this.props.onPress} style={this.props.style}>
                <FontAwesome
                    name="bell-o"
                    size={theme.headerIconSize}
                    color="#fff"
                />
            </HeaderIcon>
        );
    }
}
