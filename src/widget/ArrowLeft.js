import React, { PureComponent } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import theme from '../style/theme';
import HeaderIcon from './HeaderIcon';

export default class extends PureComponent {
    render() {
        return (
            <HeaderIcon onPress={() => this.props.onPress()}>
                <SimpleLineIcons
                    name="arrow-left"
                    size={theme.headerIconSize}
                    color="#fff"
                />
            </HeaderIcon>
        );
    }
}
