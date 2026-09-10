import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useRouter } from 'expo-router';
import { useMenu } from './menuContext';

export default function HomeScreen() {
  const router = useRouter();
  const { menuItems } = useMenu();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Christoffel's Kitchen Menu
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/adddish')}
      >
        <Text style={styles.addButtonText}>
          + Add New Dish
        </Text>
      </TouchableOpacity>

      {menuItems.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>
            No dishes added
          </Text>

          <Text style={styles.emptySubtitle}>
            Tap "Add New Dish" to add your first dish.
          </Text>
        </View>
      ) : (

        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>

              <View style={styles.cardHeader}>
                <Text style={styles.dishName}>
                  {item.dishName}
                </Text>

                <Text style={styles.price}>
                  R{item.price}
                </Text>
              </View>

              <Text style={styles.course}>
                {item.course}
              </Text>

              {item.description ? (
                <Text style={styles.description}>
                  {item.description}
                </Text>
              ) : null}

            </View>
          )}
        />

      )}
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
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },

  addButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  emptySubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
  },

  course: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444444',
  },
});
