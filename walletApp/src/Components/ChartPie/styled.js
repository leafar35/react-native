import styled from 'styled-components/native';

export const Background = styled.View`
    width: 90%;
    padding: 15px;
    background-color: #1B1F38;
    margin-top: 10px;
    border-radius: 10px;
`;

export const Container = styled.View`
    flex: 1;    
    flex-direction: row;
    align-items: center;
    justify-content: center;    
`;

export const ContainerLegends = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

export const ContainerChart = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
`;

export const ContainerLegend = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
`;

export const TextContainerLegend = styled.Text`
    font-size: 12px;
    color: white;
`;

export const Legende = styled.Text`
    font-size: ${props => (props.size ? props.size : '12px')};
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    margin-left: ${props => (props.margin ? props.margin : '0')};
`;