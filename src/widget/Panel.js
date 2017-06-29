import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import PanelTitle from './PanelTitle';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
});

export default class extends PureComponent {
    render() {
        return (
            <View style={styles.container} >
                <PanelTitle title={this.props.title} onPress={this.props.onPressDetail} />
                {this.props.children}
            </View>
        );
    }
}
