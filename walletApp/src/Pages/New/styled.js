import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    padding-top: 9%;
    background-color: #252A48;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
`;

export const BoxContent = styled.View`
    padding: 2%;
    border-radius: 5%;
    border-width: 1px;
    background-color: #1B1F38;
`;

export const ContentSelect = styled.View`
    justify-content: center;
    margin-top: 50px;
`;

export const ContentInputs = styled.View`
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 21px;
    font-weight: bold;    
    text-align: left;
    margin-top: 10%;
    margin-bottom: 3%;
`;

export const LabelText = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #FFF;
    text-align: left;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#9EA0A4'
})`
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    margin-top: 36px;
    font-size: 17px;
    border-radius: 5%;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 5%;
    margin-bottom: 10%;
`;

export const SubmitText = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #FFF;
`;
