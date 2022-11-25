import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: '#1B1F38';
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #252A48;
`;

export const BoxBackground = styled.View`
    background-color: #313862;
    border-radius: 10px;
    padding: 15px;
`;

export const FormTitle = styled.Text`
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
    border-bottom-color: black;
    border-bottom-width: 2px;
`;

export const AreaLogo = styled.View`
    flex-direction: row;
`;

export const Logo = styled.Image`
    margin-bottom: 15px;
`;

export const TextLogo = styled.Text`
    margin-left: 5%;
    font-size: 28px;
    color: #FFF;
    font-weight: bold;
    margin-top: 8px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#000'
})`
    background: #FFF;
    width: 90%;
    font-size: 17px;
    color: #000;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #F7931B;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;