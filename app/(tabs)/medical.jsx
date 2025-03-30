import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MedicalHistoryScreen = () => {
  const router = useRouter();

  // Medical history state
  const [history, setHistory] = useState('Patient has a history of hypertension and occasional migraines.');
  const [isEditing, setIsEditing] = useState(false);

  // Medications state
  const [medications, setMedications] = useState([
    'Aspirin', 'Metformin', 'Lisinopril', 'Atorvastatin', 'Paracetamol', 'Ibuprofen',
    'Amlodipine', 'Simvastatin', 'Losartan', 'Prednisone', 'Warfarin', 'Cetirizine',
    'Alprazolam', 'Levothyroxine', 'Omeprazole', 'Ranitidine'
  ]);

  const [selectedMeds, setSelectedMeds] = useState([]);  // Meds selected in the second card
  const [medicationTimes, setMedicationTimes] = useState({});  // Dynamic schedule

  // Toggle edit mode for history
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const saveHistory = () => {
    Alert.alert('Saved', 'Medical history updated.');
    setIsEditing(false);
  };

  // Toggle medication selection
  const toggleMedication = (med) => {
    setSelectedMeds((prev) =>
      prev.includes(med) ? prev.filter((m) => m !== med) : [...prev, med]
    );

    // Automatically add to schedule if selected
    setMedicationTimes((prev) => ({
      ...prev,
      [med]: prev[med] || 'Morning',  // Default time when first selected
    }));
  };

  // Change time for a medication
  const changeTime = (med, time) => {
    setMedicationTimes((prev) => ({
      ...prev,
      [med]: time
    }));
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.title}>Carelink</Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Medical History Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medical History</Text>
          {isEditing ? (
            <TextInput
              style={styles.textInput}
              value={history}
              onChangeText={setHistory}
              multiline
            />
          ) : (
            <Text style={styles.historyText}>{history}</Text>
          )}

          <TouchableOpacity style={styles.editButton} onPress={isEditing ? saveHistory : toggleEditMode}>
            <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        {/* Medications Card with Independent Scroll */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medications</Text>

          <View style={styles.medicationScrollContainer}>
            <ScrollView nestedScrollEnabled={true}>
              {medications.map((med, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.medicationItem}
                  onPress={() => toggleMedication(med)}
                >
                  <Ionicons
                    name={selectedMeds.includes(med) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color={selectedMeds.includes(med) ? '#9E110D' : '#ccc'}
                  />
                  <Text style={styles.medText}>{med}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Medication Schedule Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medication Schedule</Text>

          {selectedMeds.length === 0 ? (
            <Text style={styles.noMedText}>No medications selected yet</Text>
          ) : (
            selectedMeds.map((med, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text style={styles.scheduleText}>{med}</Text>

                {/* Time selection */}
                <View style={styles.timeSelectionContainer}>
                  {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                    <TouchableOpacity
                      key={time}
                      onPress={() => changeTime(med, time)}
                      style={[
                        styles.timeButton,
                        medicationTimes[med] === time && styles.selectedTimeButton
                      ]}
                    >
                      <Text style={styles.timeButtonText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))
          )}
        </View>

      </ScrollView>
    </View>
  );
};

export default MedicalHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'transparent',
  },
  backButton: {
    padding: 5,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medicationScrollContainer: {
    maxHeight: 250,  // Independent scrollable area
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  medText: {
    fontSize: 16,
    marginLeft: 10,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#9E110D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleItem: {
    marginBottom: 20,
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  selectedTimeButton: {
    backgroundColor: '#9E110D',
  },
  timeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  noMedText: {
    fontSize: 16,
    color: '#888',
  }
});
