import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class extends Component {

    componentDidMount() {
        console.log(1);
    }

    shouldComponentUpdate() {
        const navigation = this.props.navigation;
        console.log(JSON.stringify(navigation));
        return true;
    }

    render() {
        return (
            <StatusBar
                {...this.props}
            />
        );
    }
}
