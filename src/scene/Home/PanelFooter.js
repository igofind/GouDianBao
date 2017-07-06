import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from "../../style/theme";

const styles = StyleSheet.create({
    footer: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.marginTop,
        marginLeft: theme.marginLeft,
    },
    btn: {
        height: 40,
        flex: 1,
        backgroundColor: '#F9F9F9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: theme.marginRight,
    },
    label: {
        fontSize: 12,
        lineHeight: 20,
        color: '#3a3a3a',
    },
    num: {
        fontSize: 18,
        lineHeight: 18,
        color: '#00aaee',
        marginLeft: 6,
        marginRight: 6,

    },
    unit: {
        fontSize: 10,
        lineHeight: 20,
        color: '#8d8d8d',
    },
});

export default class extends PureComponent {
    static defaultProps = {
        khfy: 0,
        lr: 0,
    };

    render() {
        return (
            <View style={styles.footer} >
                <View style={styles.btn}>
                    <Text style={styles.label} >{this.props.llabel}</Text>
                    <Text style={styles.num} >{this.props.khfy}</Text>
                    <Text style={styles.unit} >万元</Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.label} >{this.props.rlabel}</Text>
                    <Text style={styles.num} >{this.props.lr}</Text>
                    <Text style={styles.unit} >万元</Text>
                </View>
            </View>
        );
    }
}