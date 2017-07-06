import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
});

class BusinessScene extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Business.</Text>
            </View>
        );
    }
}

export default BusinessScene;
