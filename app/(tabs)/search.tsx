import React from 'react';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { StyleSheet, Image, Platform } from 'react-native';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const backgroundimage = require('@/assets/images/background.jpg')


export default function SearchScreen() {
    return (
        <ImageBackground source={backgroundimage} style={styles.background}>  
      <View style={styles.title}>
        <Text style={styles.text}>Groups</Text>
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
    },

    background: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire container
      },
  });

