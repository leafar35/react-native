import PureChart from "custom-react-native-pure-chart";
import { LegendLine, ContainerChartLine, Background, ContainerLegendsLine, ContainerLegendLine, TextContainerLegendLine } from './styled';

export default function ChartLine({entrances, outputs}) {
    let dataentrances = (entrances.length) ? entrances : [0];
    let outputsdata = (outputs.length) ? outputs : [0];
    var data = [
        {seriesName: 'series1', data: outputsdata, color: '#F7931B'},
        {seriesName: 'series2', data: dataentrances, color: 'blue'}
    ]
    return (
        <Background>
            <LegendLine size='20px' margin='20px'>
                Histórico de Saldo
            </LegendLine>

            <ContainerLegendsLine>

                <ContainerLegendLine color='#F7931B'>
                    <TextContainerLegendLine>
                        {entrances.length}%
                    </TextContainerLegendLine>
                </ContainerLegendLine>
                <LegendLine margin='10px'>
                    Entradas
                </LegendLine>

                <ContainerLegendLine color='blue'>
                    <TextContainerLegendLine>
                        {outputs.length}%
                    </TextContainerLegendLine>
                </ContainerLegendLine>
                <LegendLine margin='10px'>
                    Saídas
                </LegendLine>

            </ContainerLegendsLine>
            
            <ContainerChartLine>
                {data.length ? 
                    (
                        <PureChart data={data} type='line' backgroundColor='transparent' />
                    )
                    :
                    (
                        ""
                    )
                }
            </ContainerChartLine>
        </Background>
    )
}