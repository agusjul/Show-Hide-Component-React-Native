import React, {Component} from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View, StatusBar, Keyboard, Animated, ScrollView } from 'react-native';
import { Button,  Text,  ApplicationProvider, Card, Input, useTheme} from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      tampil: false,
      buttontext: "Tampilkan",
      forms: '',
      submittext: [],
      index: 0,
      disable : false
    }
    // this.animasiValue = new Animated.Value(0)
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
          <Text category="h2">
            Hello World
          </Text>
        </View>
      )
    }
  }

  sendIcon = () => {
    return(
      <React.Fragment>
        <Icon name='paper-plane-outline' fill="white" width={22} height={22} />
      </React.Fragment>
    )
    
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

  formsChange = (event) => {
    const { text } = event;
    let processedData = text;
    console.log(processedData);
    this.setState({
      forms : processedData
    })
    console.log("ini state = " + this.state.forms);
  }

  sendForms = (e) => {
    Keyboard.dismiss();

    let text = e;
    this.setState({
      submittext : text
    })
  }

  message = (a) => {
    let text = a;
    return (
      <React.Fragment>
        <Card style={{ backgroundColor: 'white' }}>
          <Text category="h6" style={{fontWeight : "bold"}}>{text}</Text>
        </Card>
      </React.Fragment>
    )
  }

  render(){
    return(
      <ApplicationProvider {...eva} theme={eva.light}>
      <View>
        <View style={{padding : 10}}>
          <Card style={{height : 170}}>
              <View style={{ padding: 10 }}>
                <StatusBar barStyle="dark-content" backgroundColor="#f7f9fc"
                />
                <Button status='primary' accessoryLeft={this.ButtonIcon} onPress={() => this.presbutton()}>
                  {this.state.buttontext}
                </Button>
              </View>
              <View style={{ padding: 10 }}>

                {this.showText()}
              </View>
          </Card>
        </View>
        <View style={{ padding: 10 }}>
          <Card>
            <Text>Input :</Text>
            <View style={{display : "flex", flexDirection : "row"}}>
              <View style={{width : "80%"}}>
                  <Input
                    size='large'
                    placeholder=''
                    onChangeText={text => this.formsChange({ text })}
                    value = {this.state.forms}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0
                    }}

                  />
              </View>
                <View style={{ width: "20%", padding: 0 }}>
                  <Button 
                    onPress={()=> this.sendForms(this.state.forms)}
                    accessoryLeft={this.sendIcon}
                    style={{
                      borderTopLeftRadius : 0,
                      borderBottomLeftRadius : 0
                      }}>

                  </Button>
               </View>
                
            </View>
            <View style={{paddingTop : 20}}>
              <Text>Value :</Text>
              {this.message(this.state.submittext)}
            </View>
          </Card>
        </View>
      </View>
        
      </ApplicationProvider>
      
    )
  }
}