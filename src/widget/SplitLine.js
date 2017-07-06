import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import screen from '../common/screen';
import theme from '../style/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: screen.twoPixel,
        backgroundColor: '#e6e6e6',
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
    },
    title: {
        fontSize: 13,
        color: '#8d8d8d',
        marginLeft: 4,
        marginRight: 4,
    },
});

export default class extends PureComponent {
    render() {
        const noTitle = !this.props.title;
        const text = noTitle ? null : <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>;
        return (
            <View
                style={styles.container}
            >
                <View style={[
                    styles.line,
                    this.props.height && { height: this.props.height },
                    noTitle && { marginRight: 0 }, this.props.lineStyle]}
                />
                {text}
                <View style={[
                    styles.line,
                    this.props.height && { height: this.props.height },
                    noTitle && { marginLeft: 0 }, this.props.lineStyle]}
                />
            </View>
        );
    }
}
