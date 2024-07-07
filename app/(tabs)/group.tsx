import React from 'react';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { StyleSheet, Image, Platform } from 'react-native';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import GButton from '@/components/searchassets/gbutton';

const backgroundimage = require('@/assets/images/background.jpg')


export default function SearchScreen() {
    return (
        <ImageBackground source={backgroundimage} style={styles.background}>  
      <View style={styles.title}>
        <Text style={styles.text}>Groups</Text>
        {/* <Text style={{color:'white'}}>hello</Text> */}
        <GButton
          image={require('@/assets/images/image 9.png')}
          title="Naruto Fans"
          // onPress={() => navigation.navigate('Info')}
        />

      <GButton
          image={require('@/assets/images/image 9.png')}
          title="Naruto DieHards"
          // onPress={() => navigation.navigate('Info')}
        />
      </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 80,
      alignItems: 'center', 
    },
    
    text:{
        color: "#fff",
        fontSize: 20,
        marginBottom: 20,
    },

    background: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire container
      },
  });

