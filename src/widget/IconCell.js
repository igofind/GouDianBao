import React, { PureComponent } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../style/theme';
import screen from '../common/screen';

const styles = StyleSheet.create({
    container: {
        height: theme.cellHeight,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: screen.twoPixel,
        borderBottomColor: '#e6e6e6',
    },
    imageView: {
        width: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    iconView: {
        width: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={theme.activeOpacity} onPressIn={this.props.onPress}>
                <View style={styles.container} >
                    <View style={styles.imageView} >
                        <Image source={this.props.image} style={{ width: 25, height: 25 }} />
                    </View>
                    <View style={styles.body} >
                        {this.props.children}
                    </View>
                    <View style={styles.iconView} >
                        <Entypo size={14} style={styles.icon} name="chevron-thin-right" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
