import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import InputItem from './LoginInputItem';
import LoginButton from './LoginButton';
import LoginCheckBox from './LoginCheckBox';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        height: 122,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 75,
    },
    image: {
        width: 82,
        height: 82,
    },
    loginBtn: {
        marginTop: 20,
    },
});

class LoginScene extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.logoContainer} >
                    <Image source={require('../../image/login_logo.png')} style={styles.image} />
                </View>
                <InputItem name="user" placeholder="请输入登录账号" />
                <InputItem name="lock" placeholder="请输入登录密码" secureTextEntry={true} />
                <LoginCheckBox onChange={() => {}} />
                <LoginButton title="登录" btnStyle={styles.loginBtn} />
            </View>
        );
    }
}

export default LoginScene;
