import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: theme.listBorderColor,
    },
    title: {
        fontSize: 14,
        lineHeight: 17,
        color: '#3a3a3a',
        marginLeft: theme.marginLeft,
        borderLeftColor: '#00aaee',
        borderLeftWidth: 4,
        paddingLeft: 8,
    },
    detail: {
        fontSize: 14,
        color: '#00aaee',
        marginRight: theme.marginRight,
    },
});
export default class extends PureComponent {

    static defaultProps = {
        detailLink: true,
    };
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.title}>{this.props.title}</Text>
                {this.props.detailLink
                && <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={this.props.onPress}>
                    <Text style={styles.detail}>详情</Text>
                </TouchableOpacity>}
            </View>
        );
    }
}
