import React, { PureComponent } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import screen from '../../common/screen';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
        borderLeftWidth: screen.twoPixel,
        borderLeftColor: theme.listBorderColor,
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 37,
        height: 37,
    },
    label: {
        color: '#3a3a3a',
        fontSize: 14,
        marginTop: 12,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={this.props.onPress} >
                <View style={styles.container}>
                    <Image source={this.props.image} style={styles.image} />
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
