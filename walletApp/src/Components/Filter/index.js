import moment from 'moment';
import RNPickerSelect from "react-native-picker-select";
import { ContainerFilter, Title } from "../../Pages/Grid/styled";

export default function Filter({title, setDate}){
    let years = [];
    let currentYear = moment(Date.now()).format('yyyy');
    [1,2,3,4,5,6,7,8,9,10].forEach(at => years.push({label: (currentYear--).toString(),value: currentYear--}));
    const placeholder = {
        label: 'Selecione uma data',
        value: null,
        color: '#9EA0A4',
    }

    return(
        <ContainerFilter>
            <Title>{title}</Title>
            <RNPickerSelect
                placeholder={placeholder}
                style={{
                    inputIOS: {
                        textAlign: 'right',
                        width: 165,
                        fontSize: 18,
                        paddingVertical: 8,
                        paddingHorizontal: 0,
                        borderWidth: 0,
                        borderBottomWidth: 0.5,
                        backgroundColor: '#FFF',
                        color: 'black',
                        paddingRight: 30,
                        borderRadius: 5,
                        marginTop: 10
                    },
                }}
                value={currentYear}
                onValueChange={(value) => console.log(value)}
                items={years}
             />
        </ContainerFilter>
    );
}