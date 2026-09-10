import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useRouter } from 'expo-router';
import { useMenu } from './menuContext';

export default function AddDishScreen() {
  const router = useRouter();
  const { addMenuItem } = useMenu();

  const [dishName, setDishName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');

  const handleAddDish = () => {
    if (!dishName || !price || !course) {
      Alert.alert(
        'Missing information',
        'Please enter the dish name, price and course.'
      );
      return;
    }

    addMenuItem({
      id: Date.now().toString(),
      dishName: dishName,
      price: price,
      course: course,
      description: description,
    });

    router.replace('/');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add New Dish
      </Text>

      <Text style={styles.label}>
        Dish Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.label}>
        Price
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="decimal-pad"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>
        Course
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Starter, Main Course, Dessert"
        value={course}
        onChangeText={setCourse}
      />

      <Text style={styles.label}>
        Description
      </Text>

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter dish description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleAddDish}
      >
        <Text style={styles.saveButtonText}>
          Save Dish
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelButtonText}>
          Cancel
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  saveButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cancelButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  cancelButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});