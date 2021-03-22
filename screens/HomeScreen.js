import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
   return (
      <View style={styles.container}>
         <View style={styles.headerContainer}> 
            <Text style={styles.header}>
               Welcome to
            </Text>
            <Text style={styles.header}>
               MySocial
            </Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'flex-start'
   },
   headerContainer: {
      alignItems: 'center',

   },
   header: {
      color: '#f39189',
      fontSize: 50
   }
})

export default HomeScreen
