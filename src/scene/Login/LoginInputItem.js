import React, { PureComponent } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import screen from '../../common/screen';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginLeft: theme.marginLeft,
        marginRight: theme.marginRight,
        height: 48,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: screen.twoPixel,
    },
    input: {
        flex: 1,
        color: '#3a3a3a',
    },
    icon: {
        color: '#8d8d8d',
        marginTop: -3,
        marginLeft: 16,
        marginRight: 16,
    },
    focus: {
        color: theme.blue,
    },
});

class LoginInputItem extends PureComponent {
    constructor() {
        super();
        this.state = {
            isFocused: false,
        };
    }

    onFocus() {
        this.setState({
            isFocused: true,
        });
    }

    onBlur() {
        this.setState({
            isFocused: false,
        });
    }

    renderIcon() {
        let icon = null;
        switch (this.props.type) {
            case 'account':
                icon = (<FontAwesome
                    name={this.props.name}
                    size={18}
                    style={[styles.icon, this.state.isFocused && styles.focus]}
                />);
                break;
            case 'passwd':
                icon = (<SimpleLineIcons
                    name={this.props.name}
                    size={18}
                    style={[styles.icon, this.state.isFocused && styles.focus]}
                />);
                break;
            default:break;
        }
        return icon;
    }

    render() {
        return (
            <View style={styles.container} >
                {this.renderIcon()}
                <TextInput
                    style={[styles.input]}
                    keyboardType={this.props.keyboardType}
                    underlineColorAndroid="transparent"
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#dbdbdb"
                    secureTextEntry={this.props.secureTextEntry}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                />
            </View>
        );
    }
}

export default LoginInputItem;
