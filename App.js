/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
 import { Image } from 'react-native';
 
 
 import RNIdnowLibrary from 'react-native-idnow-library';
 
 
 type Props = {};
 export default class App extends Component<Props> {
 
   constructor(props) {
     super(props);
     this.state = {text: ''};
   }
   render() {
     return (
       <View style={styles.container}>
         <Image source={require('./idnow.png')}
         style={{marginLeft:10, marginRight:10}}/>
         <Text style={styles.title}>Please enter your Ident-Id to start the auto identification</Text>
         <View style={styles.input}>
         <TextInput
           style={{marginLeft:5}}
           multiline={true}
           placeholder="Enter your ident-id"
           onChangeText={(text) => this.setState({text})}
         />
         </View>
         <View style={styles.submit}>
 
         <TouchableOpacity
         onPress={() => {RNIdnowLibrary.startIdent(this.state.text)}}
         style={styles.buttonInput}>
         <Text>Continue</Text>
       </TouchableOpacity>
          </View>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     paddingTop: 80,
     height: "100%",
     // flex: 1,
     // justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   submit:{
     width: "80%",
     marginRight:10,
     marginLeft:10,
     marginTop:5,
     paddingTop:10,
     paddingBottom:10,
     backgroundColor:'#F5FCFF',
     borderRadius:20,
     textAlign:'center',
     fontWeight: 'bold',
     fontSize: 18
   },
   input:{
     width: "80%",
     marginRight:10,
     marginLeft:10,
     color: "#FFFFFF",
     marginTop:20,
     backgroundColor:'#ff6b40',
     borderRadius:20,
     textAlign:'center',
     textTransform: 'uppercase'
   },
   title: {
     fontSize: 18,
     marginTop:80,
     textAlign: 'center',
     fontWeight: 'bold'
   },
   buttonInput:{
     justifyContent: 'center',
     alignItems: 'center',
     padding: 12,
     borderRadius: 20,
     backgroundColor: '#ff6b40'
   }
 
 });