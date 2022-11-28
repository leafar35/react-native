import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    width: 90%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #1B1F38;
    flex-direction: column;
`; 

export const ContainerCharBar = styled.View`
    flex-direction: column;
`;

export const ContainerLegendsBar = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerLegendBar = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
`;

export const TextContainerLegendBar = styled.Text`
    font-size: 12px;
    color: white;
`;

export const LegendBar = styled.Text`
    font-size: ${props => (props.size ? props.size : '12px')};
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    margin-left: ${props => (props.margin ? props.margin : '0')};
    margin-right: ${props => (props.margin ? props.margin : '0')};
`;