import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';

const HButton = ({title, image, value}) => {
  return(
    <TouchableOpacity
        title="Naruto Fans"
        // onPress={onPress}
        style= {styles.button}
      >
      <Image source = {image}/>
      <Text style = {styles.text}>{title}</Text>
      <View><Text style = {styles.text1}>{value}</Text></View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: "#37167D",
    padding: 20,
    width: 346,
    height: 70,
    borderRadius: 10,
    justifyContent: "left",
    alignItems: "center",
    flexDirection:"row",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    // textAlign: "center",
    transform: [ { translateX: 30 },{ translateY: 0 }],
    fontWeight: "bold",
    color: "white",
    flex: .5,
    fontSize: 18,
    fontFamily: 'BebaNeue',
    letterSpacing: .9,
  }, 
  text1: {
    color: 'white',
    fontSize: 18,
    alignContent: 'right',
    transform: [ { translateX: 120 },{ translateY: 0 }],
    fontFamily: 'BebaNeue',
    letterSpacing: .9,
    // alignSelf: "right",
    // marginLeft: 'auto',
  }
  // {/*alignContent: "right", transform: [ { translateX: 30 },{ translateY: 0 }],*/}
})

export default HButton;