import PureChart from "custom-react-native-pure-chart";
import { LegendLine, ContainerChartLine, Background, ContainerLegendsLine, ContainerLegendLine, TextContainerLegendLine } from './styled';

export default function ChartLine() {
    var data = [
        {seriesName: 'series1', data: [30, 200, 170, 10], color: '#F7931B'},
        {seriesName: 'series2', data: [40, 250, 110, 14], color: 'blue'}
    ]
    return (
        <Background>
            <LegendLine size='20px' margin='20px'>
                Histórico de Saldo
            </LegendLine>

            <ContainerLegendsLine>

                <ContainerLegendLine color='#F7931B'>
                    <TextContainerLegendLine>
                        48,50%
                    </TextContainerLegendLine>
                </ContainerLegendLine>
                <LegendLine margin='10px'>
                    Entradas
                </LegendLine>

                <ContainerLegendLine color='blue'>
                    <TextContainerLegendLine>
                        48,50%
                    </TextContainerLegendLine>
                </ContainerLegendLine>
                <LegendLine margin='10px'>
                    Saídas
                </LegendLine>

            </ContainerLegendsLine>
            
            <ContainerChartLine>
                <PureChart data={data} type='line' backgroundColor='transparent' />
            </ContainerChartLine>
        </Background>
    )
}