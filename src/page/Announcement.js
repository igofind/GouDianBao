import React, { PureComponent } from 'react';
import { WebView } from 'react-native';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';

const tradeDetailText = `
    xxxxx
`;

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '公告详情',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    render() {
        return (
            <WebView source={{ html: tradeDetailText }} />
        );
    }
}
