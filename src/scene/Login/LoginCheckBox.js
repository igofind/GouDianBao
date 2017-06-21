import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../style/theme';
import screen from '../../common/screen';

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 100,
        marginLeft: 22,
        marginTop: 16,
    },
    content: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        width: 30,
        height: 30,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: screen.twoPixel,
        borderColor: '#c8c8c8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        color: theme.blue,
    },
    label: {
        marginLeft: 12,
        textAlignVertical: 'center',
        fontSize: 14,
        color: '#8d8d8d',
    },
});

class LoginCheckBox extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked,
        });
    }

    onChange() {
        this.setState({ checked: !this.state.checked });
    }

    toggle() {
        this.setState({ checked: !this.state.checked });
        this.props.onChange(this.state.checked);
    }

    render() {
        let container = (
            <View style={styles.body}>
                <Icon name="check" size={22} style={styles.checkbox} color={theme.blue} />
            </View>
        );
        if (!this.state.checked) {
            container = <View style={styles.body} />;
        }
        return (
            <TouchableHighlight
                ref={(e) => { this.checkbox = e; }}
                onPress={() => this.toggle()}
                underlayColor="white"
                style={styles.container}
            >
                <View style={styles.content}>
                    {container}
                    <Text style={styles.label}>自动登录</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default LoginCheckBox;
