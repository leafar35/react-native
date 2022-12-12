import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    height: 150px;
    margin: 10px 0;
    border-radius: 7px;
    padding: 10px 20px;
    background-color: ${props => props.color};
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`;

export const SubTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
`;

export const MessageFooter = styled.Text`
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    font-weight: bold;
    margin-left: 20px;
    color: #FFF;
`;

export const Img = styled.ImageBackground`
    top: 5%;
    height: 100%;
    width: 55%;
    position: absolute;
    right: -21%;
    opacity: 0.3;
`;

