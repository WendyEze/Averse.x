import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const GButton = ({title, image}) => {
  return(
    <TouchableOpacity
        title="Naruto Fans"
        // onPress={onPress}
        style= {styles.button}
      >
      <Image source = {image}/>
      <Text style = {styles.text}>{title}</Text>
      <View style = {styles.circle}></View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: "#37167D",
    padding: 20,
    width: 346,
    height: 90,
    borderRadius: 10,
    justifyContent: "left",
    alignItems: "center",
    flexDirection:"row",
    marginTop: 20,
  },
  text: {
    // textAlign: "center",
    transform: [ { translateX: 20 },{ translateY: 0 }],
    fontWeight: "bold",
    color: "white",
    flex: .8,
    fontFamily: 'BebaNeue',
    letterSpacing: .9,
    fontSize: 18,
  }, 
  circle: {
    backgroundColor: "lime",
    width: 7,
    height: 7,
    borderRadius: 50,
    alignContent: 'right',
    transform: [ { translateX: 30 },{ translateY: 0 }],
    // alignSelf: "right",
    // marginLeft: 'auto',
  }
  // {/*alignContent: "right", transform: [ { translateX: 30 },{ translateY: 0 }],*/}
})

export default GButton;