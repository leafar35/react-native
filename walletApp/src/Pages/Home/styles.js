import styled from 'styled-components/native';

export const Area = styled.View`
    flex-direction: row;
    margin-left: 15px;
    align-items: baseline;
`;

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
    padding-top: 5%; //isso e para o caso do iphone 12 porem para os outros teria que usar o safeareaview
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const Name = styled.Text`
    font-size: 19px;
    color: #FFF;
    font-style: italic;
`;

export const Saldo = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    margin-top: 15px;
    color: #00b94a;
    margin-bottom: 10px;    
    margin-left: 15px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    margin-left: 8px;
    margin-right: 8px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;