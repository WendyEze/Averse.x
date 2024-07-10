// ChitChatter.tsx
import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const backgroundimage = require('@/assets/images/background.jpg')

const ChitChatter = () => {
  return (
    <ImageBackground source={backgroundimage} style={styles.background}>
    <View style={styles.container}>
      <Text style={{marginTop: 90, color: 'white', fontFamily: 'BebaNeue', fontSize: 22,}}>Naruto Fans</Text>
      <Image source={require('@/assets/images/naruto.jpg')} style={{marginTop:20, width:300, height:180, borderRadius: 10}} resizeMode='fill'/>
      
      <View style={styles.detail1}>
        <View style={styles.member}>
          <Image/>
          <Text style={{color:'white', fontWeight:'bold', fontFamily: 'BebaNeue', fontSize: 18}}>2k+</Text>
        </View>

        <View style={styles.created}>
          <Text style={{color:'white', fontWeight:'bold', fontFamily: 'BebaNeue', fontSize: 18}}>created By</Text>
          <Text style={{color:'white', fontFamily: 'Inter'}}>Averse Admin</Text>
        </View>
      </View>

      <View style={styles.detail2}>
        <View style={styles.rules}>
          <Image/>
          <Text style={{color:'white', fontWeight:'bold', marginBottom:10, fontFamily: 'BebaNeue', fontSize: 18}}>Rules</Text>
          <Text style={{color:'white', fontFamily: 'Inter', fontSize: 16}}>
            1. Spoiler Warning is a must!{'\n'}
            2. Be kind to each other{'\n'}
            3. Have fun!
            </Text>
        </View>

        <View style={styles.summary}>
          <Text style={{color:'white', fontWeight:'bold', marginBottom:10, fontFamily: 'BebaNeue', letterSpacing: .9, fontSize: 18}}>Summary</Text>
          <Text style={{color:'white', fontFamily: 'Inter', fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>
      </View>
      <Text style={{color:'yellow', fontWeight:'bold', margin:10, fontFamily: 'BebaNeue', letterSpacing: .9, fontSize:20}}>Chats</Text>
      <TouchableOpacity style={styles.channel}>
        <Text style={{color:'white', fontWeight:'bold', marginBottom:10, fontFamily: 'BebaNeue', letterSpacing: .9, fontSize:20}}>General</Text>
      </TouchableOpacity>
    
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },

  detail1: {
    flexDirection: 'row',
    width: '90%',
    padding: 5,
    height: 80,
    marginTop: 10,
    justifyContent: 'center',
  },
  member: {
    width:'30%',
    // borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius:10,
    backgroundColor: '#10022D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  created: {
    width:'70%',
    // borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius:10,
    backgroundColor: '#10022D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detail2:{
    flexDirection: 'row',
    width: '90%',
    padding: 5,
    height: 150,
    justifyContent: 'center',
  },
  rules: {
    width:'50%',
    // borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius:10,
    // backgroundColor: '#10022D',
    alignItems: 'left',
    justifyContent: 'center',
  },
  summary:{
    width:'50%',
    // borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius:10,
    // backgroundColor: '#10022D',
    alignItems: 'left',
    justifyContent: 'center',
  },
  channel:{
    backgroundColor: '#37167D',
    width: 344,
    marginTop: 10,
    // alignItems: 'left',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    paddingTop:10,
    // borderWidth:2,
  }
});

export default ChitChatter;
