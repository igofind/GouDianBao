import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        height: 36,
        width: 162,
        backgroundColor: '#F9F9F9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    label: {
        fontSize: 14,
        color: '#3a3a3a',
    },
    num: {
        fontSize: 18,
        color: '#00aaee',
        marginLeft: 6,
        marginRight: 6,

    },
    unit: {
        fontSize: 12,
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
                    <Text style={styles.label} >考核费用</Text>
                    <Text style={styles.num} >{this.props.khfy}</Text>
                    <Text style={styles.unit} >万元</Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.label} >利润</Text>
                    <Text style={styles.num} >{this.props.lr}</Text>
                    <Text style={styles.unit} >万元</Text>
                </View>
            </View>
        );
    }
}