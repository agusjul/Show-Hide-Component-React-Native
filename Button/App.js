import React, {Component} from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button, Layout, Text,  ApplicationProvider} from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

export default class App extends Component {
  state = {
    tampil : false,
    buttontext : "Tampilkan"
  }

  presbutton = () =>{
    console.log("tombol ditekan");
    if(!this.state.tampil){
      this.setState({
        tampil: !this.state.tampil,
        buttontext: "Sembunyikan"
      })
    }
    else {
      this.setState({
        tampil: !this.state.tampil,
        buttontext: "Tampilkan"
      })
    }
  }

  showText = () =>{
    if(this.state.tampil){
      return(
        <View>
          <Text>
            Hello World
          </Text>
        </View>
      )
    }
  }

  ButtonIcon = () => {
    if(!this.state.tampil){
      return(
        <React.Fragment>
          <Icon name='eye-outline' fill="white" width={24} height={24} />
        </React.Fragment>
      )
    } else {
      return(
      <React.Fragment>
        <Icon name='eye-off-outline' fill="white" width={24} height={24} />
      </React.Fragment>
      )
    }
  }

  render(){
    return(
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style ={{padding : 10}}>
          <StatusBar barStyle="dark-content" backgroundColor="#f7f9fc"
          />
          <Button status='primary' accessoryLeft={this.ButtonIcon} onPress={() => this.presbutton()}>
            {this.state.buttontext}
          </Button>
        </View>
        <View style={{ padding: 10 }}>
        
          {this.showText()}
        </View>
      </ApplicationProvider>
      
    )
  }
}