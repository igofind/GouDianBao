import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../style/theme';
import screen from '../common/screen';

const color = '#C8C8C8';

const styles = StyleSheet.create({
    container: {
        height: 24,
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: color,
        borderWidth: screen.onePixel,
    },
    text: {
        fontSize: 12,
        marginLeft: 4,
        textAlignVertical: 'center',
        textAlign: 'center',
        color,
    },
});

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={theme.activeOpacity}
                onPressIn={this.props.onPress}
            >
                <View style={styles.container} >
                    <Ionicons name="ios-search" size={15} color={color} />
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
