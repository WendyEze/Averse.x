import Ionicons from '@expo/vector-icons/Ionicons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
const backgroundimage = require('@/assets/images/background.jpg')
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function Map() {
  return (
   <ImageBackground source={backgroundimage} style={styles.background}>  
      <View style={styles.title}>
        <Text style={styles.text}>Map</Text>
       
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
      fontFamily: 'BebaNeue',
      letterSpacing: .9,
  },

  background: {
      flex: 1,
      resizeMode: 'cover', // Cover the entire container
    },
});
