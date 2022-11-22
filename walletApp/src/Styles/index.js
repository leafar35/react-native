import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #121212;
`;

export const Title = styled.Text`
    color: ${props => props.color};
    font-size: 25px;
`;

export const Name = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const BotaoSujeito = styled.TouchableOpacity`
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    width: 90%;
    align-items: center;
    justify-content: center;    
`;

export const BotaoText = styled.Text`
    color: #000;
    font-size: 20px;
`;