import Ionicons from '@expo/vector-icons/Ionicons';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
const backgroundimage = require('@/assets/images/background.jpg')
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
// import { SearchBar } from 'react-native-elements';

export default function TabTwoScreen() {
  return (
   <ImageBackground source={backgroundimage} style={styles.background}>  
      <View style={styles.title}>
        <Text style={styles.text}>Explore</Text>
        {/* searchbar */}
        <View style={styles.searchbox}>
          <Text style={{color:'white', fontFamily: 'BebaNeue',}}>Search here</Text>
        </View>

        {/* anime news */}

        <TouchableOpacity style={styles.newsbutton}>
          <Text style={{color:'black', fontFamily: 'BebaNeue', fontSize: 18,}}>Explore News</Text>
        </TouchableOpacity>

        <Text style={{color:'white', fontFamily: 'BebaNeue', fontSize: 20, marginTop: 30, alignSelf: 'left', marginLeft: 25,}}>Popular Anime</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Info')}
            style={styles.button1}>
            <Image source={require('@/assets/images/image 9.png')} style={{width: 150, height: 115, borderRadius: 10}} resizeMode="cover" />
            <Text style={styles.text1}>Naruto Fans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Info')}
            style={styles.button1}>
            <Image source={require('@/assets/images/image 9.png')} style={{width: 150, height: 115, borderRadius: 10}} resizeMode="cover" />
            <Text style={styles.text1}>Naruto Fans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Info')}
            style={styles.button1}>
            <Image source={require('@/assets/images/image 9.png')} style={{width: 150, height: 115, borderRadius: 10}} resizeMode="cover" />
            <Text style={styles.text1}>Naruto Fans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Info')}
            style={styles.button1}>
            <Image source={require('@/assets/images/image 9.png')} style={{width: 150, height: 115, borderRadius: 10}} resizeMode="cover" />
            <Text style={styles.text1}>Naruto Fans</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    // flex: 1,
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

  searchbox: {
    backgroundColor: '#1F1242',
    alignItems:'center',
    justifyContent:'center',
    width: 344,
    borderRadius: 10,
    height: 39,
  },
  newsbutton: {
    backgroundColor:'yellow',
    marginTop: 30,
    width: 344,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,

  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%', // Ensure the container takes the full width
    paddingHorizontal: 20, // Add some horizontal padding
  },
  button1: {
    backgroundColor: 'none',
    // padding: 10,
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%', // Adjust width to fit two buttons per row
    marginVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    // borderWidth: 2,
  },
  text1: {
    textAlign: 'center',
    // fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    fontFamily: 'BebaNeue',
    letterSpacing: .9,
    fontSize: 15,
  },
});
