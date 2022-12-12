import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    padding-top: 9%;
    background-color: #252A48;
`;

export const ContainerGrid = styled.View`
    flex: 1;
    background-color: #252A48;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 15px;
    width: 50%;
`;

export const ContainerLegends = styled.View`
    justify-content: center;
    flex-direction: row;
`;

export const Legends = styled.View`
    margin-bottom: 15px;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
`;

export const Legend = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    margin-left: 15px;
`;

export const TagColorLegend = styled.View`
    width: 30%;
    height: 10%;
    background-color: ${props => props.tagcolor};
`;

export const ContainerFilter = styled.View`
    flex-direction: row;
`;

export const MessageGrid = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
    text-align: center;
    font-style: italic;
`;
