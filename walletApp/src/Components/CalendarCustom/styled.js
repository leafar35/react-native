import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 3%;
    width: 50%;
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