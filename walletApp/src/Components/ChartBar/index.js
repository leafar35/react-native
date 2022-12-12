import PureChart from "custom-react-native-pure-chart";
import { Background, ContainerCharBar, ContainerLegendsBar, ContainerLegendBar, TextContainerLegendBar, LegendBar } from './styled';

export default function ChartBar({title, entrances, outputs}) {
    let dataentrances = (entrances.length) ? entrances : [0];
    let outputsdata = (outputs.length) ? outputs : [0];
    var data = [
        {seriesName: 'series1', data: dataentrances, color: '#F7931B'},
        {seriesName: 'series2', data: outputsdata, color: 'blue'}
    ]
    return (
        <Background>
            <LegendBar size='20px' margin='20px'>
                {title}
            </LegendBar>

            <ContainerLegendsBar>

                <ContainerLegendBar color='#F7931B'>
                    <TextContainerLegendBar>
                        {dataentrances.length}%
                    </TextContainerLegendBar>
                </ContainerLegendBar>
                <LegendBar margin='10px'>
                    Entradas
                </LegendBar>

                <ContainerLegendBar color='blue'>
                    <TextContainerLegendBar>
                        {outputsdata.length}%
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