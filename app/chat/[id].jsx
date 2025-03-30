import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useMessages } from '../context/MessagesContext';
import { useChat } from '../context/ChatContext';

const ChatScreen = () => {
  const { id } = useLocalSearchParams();
  const { messages } = useMessages();
  const { chats, sendMessage } = useChat();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const caregiver = messages.find((msg) => msg.id === id);

  if (!caregiver) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Caregiver not found.</Text>
      </View>
    );
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(id, { text: message, sender: 'You', timestamp: new Date().toLocaleTimeString() });
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{caregiver.name}</Text>
      </View>

      <View style={styles.profile}>
        <Image source={{ uri: caregiver.image }} style={styles.avatar} />
        <Text style={styles.specialty}>{caregiver.specialty}</Text>
      </View>

      {/* Chat messages */}
      <FlatList
        data={chats[id] || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'You' ? styles.sentMessage : styles.receivedMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />

      {/* Message input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  specialty: {
    fontSize: 18,
    color: '#555',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    margin: 8,
    maxWidth: '70%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#9E110D',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    color: 'white'
  },
  timestamp: {
    fontSize: 12,
    color: '#f0f0f0',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#9E110D',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
});
