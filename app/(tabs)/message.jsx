import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useMessages } from '../context/MessagesContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MessagesScreen = () => {
  const { messages } = useMessages();
  const router = useRouter();

  const goToChat = (caregiver) => {
    router.push(`/chat/${caregiver.id}`);  // Navigate to dynamic chat route
  };

  const renderMessage = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => goToChat(item)}
        >
          <Text style={styles.chatButtonText}>Go to Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Navbar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/favicon.png')} style={styles.logo} />
          <Text style={styles.title}>Carelink</Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Add marginTop to push content below the header */}
      <View style={styles.content}>
        {messages.length === 0 ? (
          <Text style={styles.noMessages}>{"\n"}{"\n"}{"\n"}{"\n"}No messages yet. {"\n"}Add caregivers from the Search tab.</Text>
        ) : (
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={styles.list}
          />
        )}
      </View>

    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'transparent',
    position: 'absolute',             // Floating navbar
    zIndex: 1,
    width: '100%',
  },
  backButton: {
    padding: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },

  /* Main Content with marginTop to prevent overlap */
  content: {
    flex: 1,
    marginTop: 80,   // Pushes content below the header
    paddingHorizontal: 20,
  },

  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#555',
  },
  chatButton: {
    backgroundColor: '#9E110D',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  noMessages: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  }
});
