import { StyleSheet } from 'react-native';

const headerTitleStyle = {
    alignSelf: 'center',
    fontWeight: 'normal',
    fontSize: 18,
};

const navHeaderStyle = {
    elevation: 0,
    height: 45,
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
        height: 48,
    },
    tabStyle: {
        fontSize: 12,
    },
    tabLabelStyle: {
        fontSize: 10,
        marginTop: -4,
        marginBottom: 4,
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
});

export default {
    marginLeft: 12,
    marginRight: 12,
    blue: '#00aaee',
    tabIconSize: 22,
    styles,
    ...statusBarBC,
};
