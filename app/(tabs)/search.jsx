import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginRight: '55%',
    marginTop: '5%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    width: '70%',
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
    marginTop: '10%',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ProfileScreen;
