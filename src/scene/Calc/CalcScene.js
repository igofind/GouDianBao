import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

class CalcScene extends PureComponent {

    constructor() {
        super();
        this.statusBarBc = '#000';
    }

    render() {
        return (
            <View >
                <Text>This is Calc.</Text>
            </View>
        );
    }
}

export default CalcScene;
