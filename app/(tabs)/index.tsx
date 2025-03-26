import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Header } from '@/components/ui/Header';

const ProfileScreen = () => {
  const router = useRouter()

  //like react, you can only return one parent view / div / component / etc
  return (
    <View style={styles.container}>


      <View style={styles.header}>

        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/favicon.png')}  // Replace with your logo path
            style={styles.logo}
          />
          <Text style={styles.title}>Carelink</Text>
        </View>

        {/* Menu Icon */}
        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>


      </View>



      <ImageBackground source={require('../../assets/images/bg1.png')} resizeMode="cover" style={styles.background}>

        {/* <Text style={styles.header}>PlaceHolder</Text> */}
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/home.jpeg')}
          />
        </View>

        <View style={styles.buttoncontainer}>

          <TouchableOpacity style={styles.button} onPress={() => router.navigate('/search')} >
            Find Caregiver
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.navigate('/search')}>
            Medical History
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.navigate('/search')}>
            Medication
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.navigate('/search')}>
            Contact
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </View >
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: '#f68181'
    marginTop: '20%'
  },
  backButton: {
    padding: 10
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  menuButton: {
    padding: 10,
  },
  buttoncontainer: {
    marginTop: 0,
    width: '100%',
    height: '100%',

  },
  button: {
    // marginTop: 200,
    // width: 80,
    // height: 80,
    // borderRadius: 60,
    // borderColor: 'black'
    backgroundColor: "#ff6767",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
    marginTop: 40,
    color: 'white',



    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,


  },
  background: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center', //center center 
    alignItems: 'center', // center y wise, x still up top
  },
  image_container: {
    width: 270,               // for circle, set width and height to equal
    height: 270,
    borderRadius: 135,         // Half of width/height to make it circular
    overflow: 'hidden',// prevent image from spilling      
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#af6e6e',
    marginTop: '7%',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,


  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ProfileScreen;
