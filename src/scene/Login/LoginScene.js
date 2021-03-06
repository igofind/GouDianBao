import React, { PureComponent } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import LoginButton from './LoginButton';
import LoginCheckBox from './LoginCheckBox';
import InputItem from './LoginInputItem';
import theme from '../../style/theme';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        height: (197 - theme.navBarHeight),
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        marginTop: 30,
        width: 82,
        height: 82,
    },
    loginBtn: {
        marginTop: 20,
    },
});

class LoginScene extends PureComponent {

    doLogin() {
        // TODO 登录操作

        const timer = requestAnimationFrame(() => {
            this.props.navigation.navigate('Main');
            cancelAnimationFrame(timer);
        });
    }

    render() {
        return (
            <View style={styles.body}>
                <StatusBar
                    animated={false}
                    backgroundColor={'#fff'}
                    barStyle={'dark-content'}
                    translucent={true}
                />
                <View style={styles.logoContainer} >
                    <Image source={require('../../image/login_logo.png')} style={styles.image} />
                </View>
                <InputItem name="user-o" type="account" placeholder="请输入登录账号" keyboardType="email-address" />
                <InputItem name="lock" type="passwd" placeholder="请输入登录密码" secureTextEntry={true} />
                <LoginCheckBox onChange={() => {}} />
                <LoginButton title="登录" btnStyle={styles.loginBtn} onPress={() => this.doLogin()} />
            </View>
        );
    }
}

export default LoginScene;
