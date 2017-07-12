import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import JPushModule from 'jpush-react-native';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
});

class BusinessScene extends PureComponent {

    componentDidMount() {
        console.log('1');

        JPushModule.addReceiveNotificationListener((map) => {
            console.log(`alertContent: ${map.alertContent}`);
            console.log(`extras: ${map.extras}`);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Business.</Text>
            </View>
        );
    }
}

export default BusinessScene;
