import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';  // Import BlurView

const ProfileScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/images/hero2.jpg')}
        resizeMode="cover"
        style={styles.heroBackground}
      >
        <View style={styles.darkOverlay}>
          <BlurView intensity={50} tint="dark" style={styles.glassOverlay}>
            <View style={styles.heroContent}>

              <View style={styles.titleContainer}>
                <Image
                  source={require('../../assets/images/favicon.png')}
                  style={styles.favicon}
                />
                <Text style={styles.heroTitle}>Carelink</Text>
              </View>

              <Text style={styles.heroTagline}>
                Because you want only the {"\n"} best for your loved ones.
              </Text>

              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => router.push('/search')}
              >
                <Text style={styles.ctaText}>Find Caregiver</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </ImageBackground>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  heroBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',   // Dark transparent overlay
  },

  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroContent: {
    alignItems: 'center',
    zIndex: 2,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  favicon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  heroTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Cochin',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  heroTagline: {
    fontSize: 20,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 30,
  },

  ctaButton: {
    backgroundColor: '#9E110D',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  ctaText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
});
