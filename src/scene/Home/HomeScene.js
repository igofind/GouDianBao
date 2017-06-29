import React, { PureComponent } from 'react';
import { InteractionManager, StatusBar, StyleSheet, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/Octicons';
import theme from '../../style/theme';
import Bell from '../../widget/Bell';
import SplitView from '../../widget/SplitView';
import Card from './Card';
import Panel from '../../widget/Panel';
import PanelFooter from './PanelFooter';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        flexDirection: 'row',
    },
});

class HomeScene extends PureComponent {

    static navigationOptions = {
        headerStyle: theme.styles.homeHeaderStyle,
        headerTitle: '首页',
        headerTitleStyle: theme.styles.homeHeaderTitleStyle,
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="home" size={theme.tabIconSize} color={tintColor} />),
        headerLeft: null,
        headerRight: <Bell onPress={() => { }} />,
    };

    navigate(...args) {
        InteractionManager.runAfterInteractions(() => this.props.navigation.navigate(...args));
    }

    renderCards() {
        const cards = [
            {
                image: require('../../image/home_dlsb.png'),
                label: '电量申报',
                key: 'dlsb',
                page: 'ElecDeclare',
            },
            {
                image: require('../../image/home_sccjqk.png'),
                label: '市场成交情况',
                key: 'sccjqk',
                page: 'DealList',
            },
            {
                image: require('../../image/home_htzxqk.png'),
                label: '合同执行情况',
                key: 'htzxqk',
                page: 'ContractExec',
            },
        ];
        return cards.map(curr => (<Card
            image={curr.image}
            label={curr.label}
            key={curr.key}
            onPress={() => this.navigate(curr.page)}
        />));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} />
                <SplitView style={{ height: 12 }} />
                <View style={styles.cards} >
                    {this.renderCards()}
                </View>
                <SplitView style={{ height: 12 }} />
                <Panel title="年度执行情况" onPressDetail={() => this.navigate('ContractExec')} >
                    <PanelFooter khfy="1085" lr="3085" />
                </Panel>
                <SplitView style={{ height: 12 }} />
                <Panel title="5月成交及用电情况" onPressDetail={() => this.navigate('ContractExec')} >
                    <PanelFooter khfy="3085" lr="3085" />
                </Panel>
            </View>
        );
    }
}

export default HomeScene;
