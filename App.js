// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';


import HomeScreen from './screens/HomeScreen';
import LogoutScreen from './screens/LogoutScreen';

export default function App() {
  return (        
    <View style={styles.container}>
      <LogoutScreen />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
  }
});
