import React, { PureComponent } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import screen from '../../common/screen';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 110,
        borderBottomWidth: screen.onePixel,
        borderBottomColor: '#e6e6e6',
    },
    image: {
        width: 110,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 15,
        paddingBottom: 15,
    },
    header: {
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        color: '#3a3a3a',
    },
    context: {
        flex: 3,
        fontSize: 12,
        lineHeight: 20,
        color: '#8d8d8d',
    },
});

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={this.props.img} style={{ width: 57, height: 57 }} />
                    </View>
                    <View style={styles.desc} >
                        <Text style={styles.header}>{this.props.title}</Text>
                        <Text style={styles.context}>{this.props.desc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
