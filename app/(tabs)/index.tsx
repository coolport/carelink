import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const ProfileScreen = () => {
  //like react, you can only return one parent view / div / component / etc
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/bg1.png')} resizeMode="cover" style={styles.background}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/home.jpeg')}
          />
        </View>
        <Text style={styles.text}>hi</Text>
      </ImageBackground>
    </View>
  );
};

//basically wrapped css.
//differences: camelCase instead of kebabCase
//             no px, because dp is default.
//             quotes on colors, strings, etc./
//u can technically use css or others like nativewind (tw port), but this is standard in modern react..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'blue',
  },
  background: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center', //center center 
    alignItems: 'center', // center y wise, x still up top
  },
  image_container: {
    width: 200,               // for circle, set width and height to equal
    height: 200,
    borderRadius: 150,         // Half of width/height to make it circular
    overflow: 'hidden',// prevent image from spilling      
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ProfileScreen;
