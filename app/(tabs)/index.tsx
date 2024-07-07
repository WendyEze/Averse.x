import {
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HButton from '@/components/homeassets/homebutton';


const backgroundimage = require('@/assets/images/background.jpg')

export default function HomeScreen() {
  return (
    <ImageBackground source={backgroundimage} style={styles.background}> 

    <SafeAreaView style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.imagecontainer}>
            <Image
              source={require('@/assets/images/image 7.png')}
              resizeMode="contain"
              style={styles.image1}
            />
          </View>

          <View style={styles.usercontainer}>
            <Text style ={{color: 'white', fontSize: 22, fontFamily: 'BebaNeue', letterSpacing: .9}}>Josh</Text>
            <Text style={{ color: 'grey', fontSize: 12, fontFamily: 'BebaNeue', letterSpacing: .9,}}>@luffy_fan</Text>

            <View style={styles.detailcontainer}>
              <View style={styles.time}>
                <Image
                  source={require('@/assets/images/time.png')}
                  style={{ width: 25, height: 25, marginBottom: 10 }}
                />
                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'BebaNeue', letterSpacing: .9, }}>
                  value
                </Text>
              </View>

              <TouchableOpacity style={styles.point}>
                <Image
                  source={require('@/assets/images/point.png')}
                  style={{ width: 30, height: 25, marginBottom: 10 }}
                />
                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'BebaNeue', letterSpacing: .9, }}>
                  value
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rank}>
              <Image
                source={require('@/assets/images/rank.png')}
                style={{ width: 40, height: 40, marginLeft:10}}
              />
              <Text
                style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, fontFamily: 'BebaNeue', letterSpacing: .9, }}>
                1. Naruto {'\n'}
                2. One Piece {'\n'}
                3. Hunter x Hunter
              </Text>
            </View>
          </View>
        </View>

        <HButton image ={require('@/assets/images/done.png')}  title = 'Completed' value ='4'/>
        <HButton image ={require('@/assets/images/watch.png')}  title = 'Watching' value ='3'/>
        <HButton image ={require('@/assets/images/queue.png')}  title = 'Queue' value ='9'/>

    </SafeAreaView>

    </ImageBackground>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    // backgroundColor: 'transparent',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },

  topcontainer: {
    flexDirection: 'row',
    width: 346,
    marginBottom: 10,
    marginTop: 30,
  },
  detailcontainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  usercontainer: {
    marginTop:10,
    width: '60%',
    // borderWidth: 1,
    padding: 10,
  },
  imagecontainer: {
    width: '40%',
    // borderWidth: 1,
    // padding: 10,
  },
  image1: {
    width: '100%', // Adjust the size as needed
    height: 250,
    // borderWidth:1,
    // aspectRatio: 1, // Ensures the image maintains its aspect ratio
  },
  point: {
    flexDirection: 'column',
    // padding: 20,
    // borderWidth: 1,
    borderRadius: 10,
    marginTop: 40,
    margin: 5,
    height: 70,
    width: '50%',
    backgroundColor: '#0C0827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    flexDirection: 'column',
    // padding: 20,
    // borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    marginTop: 40,
    height: 70,
    width: '50%',
    backgroundColor: '#0C0827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rank: {
    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: -4,
    width: '104%',
    height: 80,
    backgroundColor: '#0C0827',
  },
});





// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { SafeAreaView } from 'react-native-safe-area-context';
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">AVerse</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
