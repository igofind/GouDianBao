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
    },
    homeHeaderTitleStyle: {
        ...headerTitleStyle,
    },

    businessHeaderStyle: {
        ...navHeaderStyle,
    },
    businessHeaderTitleStyle: {
        ...headerTitleStyle,
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
    },
    mineHeaderTitleStyle: {
        ...headerTitleStyle,
    },
});

export default {
    marginLeft: 12,
    marginRight: 12,
    blue: '#00aaee',
    tabIconSize: 22,
    styles,
};
