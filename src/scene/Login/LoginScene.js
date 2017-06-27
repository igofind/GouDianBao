import React, { PureComponent } from 'react';
import { Image, InteractionManager, StatusBar, StyleSheet, View } from 'react-native';
import LoginButton from './LoginButton';
import LoginCheckBox from './LoginCheckBox';
import InputItem from './LoginInputItem';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        height: 77 + StatusBar.currentHeight,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    image: {
        marginTop: 0,
        width: 82,
        height: 82,
    },
    loginBtn: {
        marginTop: 20,
    },
});

class LoginScene extends PureComponent {

    doLogin() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.navigate('Main');
        });
    }

    render() {
        return (
            <View style={styles.body}>
                <StatusBar
                    animated={false}
                    backgroundColor="#fff"
                    barStyle="dark-content"
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
