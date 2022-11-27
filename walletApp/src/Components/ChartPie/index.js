import { View, Text } from "react-native"
import PureChart from 'react-native-pure-chart';

export default function ChartPie() {
    var data = [
        {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: '#297AB1'},
        {seriesName: 'series2', data: [40, 250, 110, 290, 14], color: 'blue'}
    ]
    return (
        <View>
            <Text>
                teste 1
            </Text>
            <PureChart data={data} type='bar' />
        </View>
    )
}