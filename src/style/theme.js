import { StatusBar, StyleSheet } from 'react-native';

const navBarHeight = 48;
const headerTitleStyle = {
    alignSelf: 'center',
    fontWeight: 'normal',
    fontSize: 18,
};

const navHeaderStyle = {
    elevation: 0,
    height: navBarHeight + StatusBar.currentHeight, // StatusBar 背景为黑色时，StackNavigator弹出的screen顶部，在过渡动画结束是会有一条白线闪过，
    paddingTop: StatusBar.currentHeight,  // 利用StatusBar translucent=true, 使导航头置于StatusBar 之下，再用paddingTop调整样式
    backgroundColor: '#fff',
};

const statusBarBC = {
    homeStatusBarBC: '#000',
    businessStatusBarBC: '#000',
    calcStatusBarBC: '#000',
    mineStatusBarBC: '#00aaee',
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: navBarHeight,
    },
    tabStyle: {
        fontSize: 12,
    },
    tabLabelStyle: {
        fontSize: 10,
        marginTop: -4,
        marginBottom: 4,
    },

    commonHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#000',
    },
    commonHeaderTitleStyle: {
        ...headerTitleStyle,
        color: '#fff',
    },

    loginHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#fff',
    },

    homeHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#000',
    },
    homeHeaderTitleStyle: {
        ...headerTitleStyle,
        color: '#fff',
    },

    businessHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#000',
    },
    businessHeaderTitleStyle: {
        ...headerTitleStyle,
        color: '#fff',
    },

    calcHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#000',
    },
    calcHeaderTitleStyle: {
        ...headerTitleStyle,
        color: '#fff',
    },

    mineHeaderStyle: {
        ...navHeaderStyle,
        backgroundColor: '#00aaee',
    },
    mineHeaderTitleStyle: {
        ...headerTitleStyle,
        color: '#fff',
    },

    headerLeftIconView: {
        paddingLeft: 12,
    },
    headerRightIconView: {
        paddingRight: 12,
    },

    headerIconStyle: {
        width: 45,
        height: 45,
        paddingRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default {
    blankBgColor: '#f5f5f5',
    navBarHeight,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    blue: '#00aaee',
    tabIconSize: 22,
    headerIconSize: 18,
    cellHeight: 45,
    activeOpacity: 0.7,
    listBorderColor: '#e6e6e6',
    styles,
    ...statusBarBC,
};
