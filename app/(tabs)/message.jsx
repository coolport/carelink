import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useMessages } from '../context/MessagesContext';
import { useRouter } from 'expo-router';

const MessagesScreen = () => {
  const { messages } = useMessages();
  const router = useRouter();

  const goToChat = (caregiver) => {
    Alert.alert(`Navigating to chat with ${caregiver.name}`);
    // You can later navigate to the chat screen here
    // router.push(`/chat/${caregiver.id}`);
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
      {messages.length === 0 ? (
        <Text style={styles.noMessages}>No messages yet. Add caregivers from the Search tab.</Text>
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    backgroundColor: '#4CAF50',
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
  }
});

export default MessagesScreen;
