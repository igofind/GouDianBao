import React, { PureComponent } from 'react';
import HeaderIcon from './HeaderIcon';

export default class extends PureComponent {
    render() {
        return (
            <HeaderIcon onPress={() => {}} style={this.props.style} />
        );
    }
}
