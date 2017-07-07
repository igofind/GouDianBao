import React, { PureComponent } from 'react';
import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import HeaderBtn from '../widget/HeaderBtn';
import HeaderIcon from '../widget/HeaderIcon';
import SearchBar from '../widget/SearchBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.blankBgColor,
    },
});

export default class extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '消息中心',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: (<View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 6 }}>
            <HeaderBtn
                text="编辑"
                style={{ marginRight: 12, width: 'auto' }}
                textStyle={{ lineHeight: 22 }}
                onPress={() => { Alert.alert('编辑'); }}
            />
            <HeaderIcon style={{ width: 'auto', paddingRight: 0 }} onPress={() => { Alert.alert('Filter Icon'); }}>
                <FontAwesome name="filter" size={20} color="#fff" />
            </HeaderIcon>
        </View>),
    });

    render() {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('#000');
        return (
            <View style={styles.container}>
                <SearchBar title="搜索" />
            </View>
        );
    }
}
