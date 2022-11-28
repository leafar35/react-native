import PureChart from "custom-react-native-pure-chart";
import { Background, ContainerCharBar, ContainerLegendsBar, ContainerLegendBar, TextContainerLegendBar, LegendBar } from './styled';

export default function ChartBar({title}) {
    var data = [
        {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: 'red'},
        {seriesName: 'series2', data: [40, 250, 110, 290, 14], color: 'blue'}
    ]
    return (
        <Background>
            <LegendBar size='20px' margin='20px'>
                {title}
            </LegendBar>

            <ContainerLegendsBar>

                <ContainerLegendBar color='red'>
                    <TextContainerLegendBar>
                        48,50%
                    </TextContainerLegendBar>
                </ContainerLegendBar>
                <LegendBar margin='10px'>
                    Entradas
                </LegendBar>

                <ContainerLegendBar color='blue'>
                    <TextContainerLegendBar>
                        48,50%
                    </TextContainerLegendBar>
                </ContainerLegendBar>
                <LegendBar margin='10px'>
                    Saídas
                </LegendBar>

            </ContainerLegendsBar>
            
            <ContainerCharBar>
                <PureChart data={data} type='bar' backgroundColor='transparent' />
            </ContainerCharBar>
        </Background>
    )
}