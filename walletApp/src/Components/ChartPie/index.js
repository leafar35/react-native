import PureChart from "custom-react-native-pure-chart";
import { Container, Legende, ContainerLegend, TextContainerLegend, ContainerLegends, ContainerChart, Background } from './styled';

export default function ChartPie() {

    let sampleData = [
        {
          value: 50,
          label: 'Marketing',
          color: '#F7931B',
        }, {
          value: 25,
          label: 'Support',
          color: 'blue'
        }
    ]

    return (
        <Background>
            <Legende size='20px' margin='20px'>
                Relação
            </Legende>
            <Container>           

                <ContainerLegends>

                    <ContainerLegend color='#F7931B'>
                        <TextContainerLegend>
                            48,50%
                        </TextContainerLegend>
                    </ContainerLegend>
                    <Legende>
                        Entradas
                    </Legende>

                    <ContainerLegend color='blue'>
                        <TextContainerLegend>
                            48,50%
                        </TextContainerLegend>
                    </ContainerLegend>
                    <Legende>
                        Saídas
                    </Legende>

                </ContainerLegends>

                <ContainerChart>
                    <PureChart data={sampleData} type='pie' backgroundColor='transparent' />
                </ContainerChart>

            </Container>
        </Background>
    )
}