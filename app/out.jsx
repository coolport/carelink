

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>whatever man</Text>
      {/* can be access manually or through links etc, but 
      the app still loads / prioritizes nested structures
      especially wit the presence of index.jsx 

      if you change layout in outermost layout/root file,
      di na sya maloload ,, at all*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'blue',
  }
});

export default ProfileScreen;
