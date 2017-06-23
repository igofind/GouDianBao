import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SplitView from '../../widget/SplitView';
import CalcSceneItem from './CalcSceneItem';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: theme.containerBC,
    },
});
const items = [
    {
        img: require('../../image/calc_jingjia.png'),
        title: '竞价计算',
        key: 'jingjia',
        desc: '竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价计算竞价。',
    },
    {
        img: require('../../image/calc_dianjia.png'),
        title: '电价测算',
        key: 'dianjia',
        desc: '电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价测算电价。',
    },
    {
        img: require('../../image/calc_lirun.png'),
        title: '利润计算',
        key: 'lirun',
        desc: '利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润计算利润。',
    },
];

class CalcScene extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <SplitView />
                {items.map(item => (
                    <CalcSceneItem
                        img={item.img}
                        title={item.title}
                        key={item.key}
                        desc={item.desc}
                    />
                ))}
            </View>
        );
    }
}

export default CalcScene;
