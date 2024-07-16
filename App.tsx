import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Alert,
  useColorScheme,
  Pressable,
  Dimensions,
  
} from 'react-native';
import { 
  NavigationContainer 
} from "@react-navigation/native";

const [BackColor, nextBackColor, buttonColor, buttonPressedColor] = ['#222831', '#393E46' ,'#00ADB5' ,'#EEEEEE'] 


const App = () =>{
  const [timesPressed, setTimesPressed] = useState(0);

  const increment = () => {
    setTimesPressed(timesPressed + 1)
  }

  return (
    <NavigationContainer>
      {
        <SafeAreaView
        style={      
          {
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: BackColor,
            padding: 0,
            margin: 0,
            }
          }>
        
          <SafeAreaView 
            style={styles.container}>
              
              {/**
               * Top Bar for the base page
               */}
              <SafeAreaView
                style={styles.navbar}>

              </SafeAreaView>
            
            <Pressable 
                style={({pressed}) => 
  
                  [
                    {
                      backgroundColor: pressed? buttonPressedColor : buttonColor
                    },
                    styles.incrementVal
                  ]}
  
                onPress={increment}> 
              
              {({pressed}) => (
                  <Text style={styles.text}>
                  
                    {pressed ? 'Pressed!' : 'Press Me'}
                  
                  </Text>
                )}
                
  
            </Pressable>
          </SafeAreaView>
      </SafeAreaView>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 0,
    backgroundColor: BackColor
  },
  navbar:{
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: nextBackColor,
    width: Dimensions.get('screen').width,
    height: 60,
  },
  incrementVal:{
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    height: 70,
    alignItems:'center'
  },
  text:{
    fontSize: 16
  }
})

export default App;