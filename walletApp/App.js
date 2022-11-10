import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import List from './src/Components/List';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          name: 'Lucas Silva', 
          description: 'Mais um dia de muitos bugs :)', 
          imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPost: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          name: 'Matheus', 
          description: 'Isso sim é ser raiz!!!!!', 
          imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPost: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          name: 'Jose Augusto', 
          description: 'Bora trabalhar Haha', 
          imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPost: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          name: 'Gustavo Henrique', 
          description: 'Isso sim que é TI!', 
          imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPost: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          name: 'Guilherme', 
          description: 'Boa tarde galera do insta...', 
          imgprofile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPost: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    };
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.header}>

          <TouchableOpacity>
            <Image 
              source={require('./src/img/logo.png')}
              style={style.logo} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
              source={require('./src/img/send.png')}
              style={style.send} />
          </TouchableOpacity>

        </View>

        <FlatList 
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          data={this.state.feed}
          renderItem={({item}) => <List data={item} />}
        />

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo:{

  },
  send: {
    width: 23,
    height: 23,
  }
});

export default App;