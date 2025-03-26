import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

export default function Header({ showMenu = false, title = "Carelink" }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* logo / tet?? */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/favicon.png')}  // Your logo path
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Menu Icon (conditionally shown) */}
      {showMenu && (
        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f68181",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 18,
  },
});
