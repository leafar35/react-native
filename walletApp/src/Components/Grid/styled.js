import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    padding: 3%;
    height: 50px;
    border-radius: 7px;
    flex-direction: row;
    align-items: center;
    background-color: '#4E41F0';
`;

export const Title = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #FFF;
    margin-left: 5px;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #FFF;
    margin-left: 5px;
`;

export const ValueFormat = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #FFF;
`;

export const Colortag = styled.View`
    width: 2%;
    height: 70%;
    background-color: ${props => props.tagcolor};
`;

export const ContainerTitles = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: '#4E41F0';
    justify-content: center;
`;
