import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupScreen from '@/components/groupassets/grouphome';
import ChitChatter from '@/components/groupassets/groupdetails';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function GroupStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GroupMain" component={GroupScreen} />
        <Stack.Screen name="ChitChatter" component={ChitChatter} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default GroupStack;



// import React from 'react';

// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';
// // import { StyleSheet, Image, Platform } from 'react-native';
// import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
// import GButton from '@/components/searchassets/gbutton';
// import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import ChitChatter from '@/components/groupassets/chat';
// // import { WebView } from 'react-native-webview';

// const backgroundimage = require('@/assets/images/background.jpg')


// export default function GroupScreen() {

//     // const navigation = useNavigation();
    
//     return (
//         <ImageBackground source={backgroundimage} style={styles.background}>  
//       <View style={styles.title}>
//         <Text style={styles.text}>Groups</Text>
//         {/* <Text style={{color:'white'}}>hello</Text> */}
//         <GButton
//           image={require('@/assets/images/image 9.png')}
//           title="Naruto Fans"
//           // onPress={() => navigation.navigate('chat.tsx')}
//         />

//       <GButton
//           image={require('@/assets/images/image 9.png')}
//           title="Naruto DieHards"
//           // onPress={() => navigation.navigate('Info')}
//         />
//       {/* <TouchableOpacity onPress={() => navigation.navigate(ChitChatter)}>
//         <Text>Hello</Text>
//       </TouchableOpacity> */}

//       {/* <WebView
//         source={{ html: '<iframe src="https://chitchatter.im/public/naruto%20fans?embed=1" allow="camera;microphone;display-capture;fullscreen" width="800" height="800" />' }}
//         style={styles.webview}
//         // allowsInlineMediaPlayback={true}
//         // mediaPlaybackRequiresUserAction={false}
//       /> */}
//       </View>
//       </ImageBackground>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     title: {
//       flex: 1,
//       justifyContent: 'flex-start',
//       paddingTop: 80,
//       alignItems: 'center', 
//     },
    
//     text:{
//         color: "#fff",
//         fontSize: 20,
//         marginBottom: 20,
//     },

//     background: {
//         flex: 1,
//         resizeMode: 'cover', // Cover the entire container
//       },
//       webview: {
//         width: 200,
//         height: 400,
//         // width: Dimensions.get('window').width,
//         // height: Dimensions.get('window').height,
//       },
//   });

