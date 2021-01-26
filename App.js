import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 10, paddingTop: 70}}>
      <View>
        <TextInput placeholder="Course Goals" style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title='ADD'/>
      </View>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});
