import React, { PureComponent } from 'react';
import { StatusBar, Text, View } from 'react-native';
import AutoUpdateStatusBar from '../../widget/AutoUpdateStatusBar';

class CalcScene extends PureComponent {

    constructor() {
        super();
        this.statusBarBc = '#000';
    }

    render() {
        return (
            <View >
                <AutoUpdateStatusBar
                    animated={true}
                    backgroundColor={this.statusBarBc}
                    networkActivityIndicatorVisible={true}
                    translucent={false}
                />
                <Text>This is Calc.</Text>
            </View>
        );
    }
}

export default CalcScene;
