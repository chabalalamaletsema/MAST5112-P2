import React from 'react';
import { Stack } from 'expo-router';
import { MenuProvider } from './menuContext';

export default function RootLayout() {
  return (
    <MenuProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Menu',
          }}
        />

        <Stack.Screen
          name="adddish"
          options={{
            title: 'Add New Dish',
          }}
        />

        <Stack.Screen
          name="explore"
          options={{
            title: 'Explore',
          }}
        />
      </Stack>
    </MenuProvider>
  );
}

