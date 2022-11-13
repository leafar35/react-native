import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      widthAnimate: new Animated.Value(150),
      heightAnimate: new Animated.Value(50),
      opacityAnimate: new Animated.Value(0),
      opacityTextAnimate: new Animated.Value(0),
      heightAnimatel: new Animated.Value(0)
    }


    /*
    Animated.loop(

      Animated.sequence([

        Animated.timing(
          this.state.widthAnimate,{
            toValue: 250,
            duration: 700
          }
        ),

        Animated.timing(
          this.state.widthAnimate,{
            toValue: 150,
            duration: 700
          }
        )

      ])
      
    ).start();
    */ 

    /*
    Animated.sequence([
      Animated.timing(
        this.state.opacityAnimate,{
          toValue: 1,
          duration: 1500
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.widthAnimate,{
            toValue: 300,
            duration: 2000
          }
        ),
        Animated.timing(
          this.state.heightAnimate,{
            toValue: 200,
            duration: 2000
          }
        ),
      ])
    ]).start();
    */

    /*
    Animated.parallel([
      Animated.timing(
        this.state.widthAnimate,{
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.heightAnimate,{
          toValue: 200,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.opacityAnimate,{
          toValue: 0,
          duration: 2000
        }
      ),
    ]).start();
    */


    /*
    Animated.sequence([
      Animated.timing(
        this.state.widthAnimate,{
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.heightAnimate,{
          toValue: 200,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.opacityAnimate,{
          toValue: 1,
          duration: 1500
        }
      ),
    ]).start();
    */

    /*
    Animated.timing(
      this.state.widthAnimate,{
        toValue: 300,
        duration: 2000
      }
    ).start();
    */

    Animated.timing(
      this.state.heightAnimatel,{
        toValue: 100,
        duration: 5000
      }
    ).start();

    this.loadGrapth = this.loadGrapth.bind(this);

  }

  loadGrapth(){
    Animated.sequence([
      Animated.timing(
        this.state.opacityAnimate,{
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.heightAnimate,{
          toValue: 300,
          duration: 1000
        }
      ),
      Animated.timing(
        this.state.opacityTextAnimate,{
          toValue: 1,
          duration: 400
        }
      ),
    ]).start();
  }

  render(){
    let porcentAnimate = this.state.heightAnimatel.interpolate({
      inputRange: [0,100],
      outputRange: ['0%','100%']
    })
    return(
      <View style={style.container}>

        <View style={{height:80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169E1'}}>
          <TouchableOpacity onPress={this.loadGrapth}>
            <Text style={{fontSize: 25, color:'#ffffff'}}>Gerar Grafico</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={{backgroundColor: '#4169E1', width: porcentAnimate, height: 25, justifyContent: 'center', marginTop: '55%'}}>

        </Animated.View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Animated.View style={{opacity: this.state.opacityTextAnimate}}>
            <Text>Vendas</Text>
          </Animated.View>
          <Animated.View style={[
            style.children, 
            { 
              width: this.state.widthAnimate, 
              height: this.state.heightAnimate, 
              backgroundColor: '#FF0000',
              justifyContent: 'center',
              opacity: this.state.opacityAnimate,
              //borderRadius: 25 animacoes comentadas
            } 
            ]}>
            <Text style={style.text}>R$ 150,00</Text>
          </Animated.View>

        </View>        

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  children: {
    backgroundColor: '#4169E1',
    justifyContent: 'center',
    marginBottom: 55
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
    textAlign: 'center',    
  }
});

export default App;