import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import db from '../config'
import { FontAwesome } from '@expo/vector-icons'; 

const myButton = ( <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={()=>{this.props.navigation.navigate('Exchange')}},marginTop:'50'>
   Login with Facebook </FontAwesome.Button> )

export default class HomeScreen extends React.Component{
  
  render(){
    return(
      <View style={styles.container}>
        <MyHeader title="Somya Sky Nest" navigation ={this.props.navigation}/>
        
          <View style={{flex:1,flexDirection:"row",justifyContent:'space-evenly'}}>
            <View>
              <TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress>Cancel</Button>
                  </Card.Actions>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Exchange')}>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity><TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity><TouchableOpacity>
                <Card style={{marginBottom:10}}>
                  <Card.Title />
                  <Card.Content>
                    <Title>Profile</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#32867d",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
