import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';

class IconsCustom extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <View style={style.container}>
        <Text>Sujeito Programador</Text>

        <FontAwesome 
          name='home'
          size={35}
          color='#11118c'
        />

        <FontAwesome 
          name='user'
          size={25}
          color='#54a300'
        />

        <FontAwesome 
          name='gift'
          size={65}
          color='#7665ff'
        />

        <TouchableOpacity style={style.btn}>
          <FontAwesome 
            name='youtube'
            size={25}
            color='#fff'
          />
          <Text style={style.textbtn}>Acessar canal</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,    
  },
  textbtn: {
    paddingLeft: 10,
    color: '#fff'
  }
});

export default IconsCustom;