import moment from 'moment';
import { Container, Input } from './styled';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { Keyboard } from 'react-native';

export default function CalendarCustom({open, close}){
    const [current, setCurrent] = useState(moment(Date.now()).format('yyyy-MM-DD'));

    return(
        <Container>
            {open ? 
                (
                    <Calendar
                        initialDate={moment(Date.now()).format('yyyy-MM-DD')}
                        onDayPress={day => {
                            close(false);
                            setCurrent(day.dateString)
                        }}
                    />
                )
                :
                (
                    <Input 
                        placeholder='Filtro por data'
                        autoCorrect={false}
                        autoCaptalize='none'
                        onFocus={() => { 
                            close(true);
                            Keyboard.dismiss()
                        }}
                        value={moment(current).format('DD/MM/yyyy') }
                    />
                )
            }
        </Container>
    );
}