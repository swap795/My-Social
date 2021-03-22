import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Platform, TextInput, TouchableOpacity, Alert, Dimensions} from 'react-native'


import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


// constants folder
import strings from '../constants/strings';
import colors from '../constants/colors';

const PrimaryText = styled.Text`
   font-size: 35px;
   font-family: 'AppleSDGothicNeo-Bold';
`;

const SecondaryText = styled.Text`
   font-size: 20px;
   font-family: 'AppleSDGothicNeo-Regular';
`;

const AlternativeText = styled.Text`
   font-size: 20px;
   font-family: 'AppleSDGothicNeo-Light';
`;

const ButtonText = styled.Text`
   font-size: 25px;
   font-family: 'AppleSDGothicNeo-SemiBold';
`;


function LogoutScreen() {

   return (
      <LinearGradient 
         colors={['#ffffff', '#ffffff', '#224A48']}
         style={styles.background}
      > 
         <View style={styles.app}>
            <View>
               <Image
                  style={styles.logo}
                  source={require('../assets/logo.png')}
               />
            </View>
            <View style={styles.fieldMessage}>
               <View style={styles.messages}>
                  <PrimaryText style={colors.primaryText}>{strings.signIn}</PrimaryText>
                  <AlternativeText style={colors.secondaryText}>{strings.signInMessage}</AlternativeText>
               </View>
               <View style={styles.inputs}>
                  <TextInput placeholder={strings.userNamePlaceholder}/>
                  <TextInput placeholder={strings.passwordPlaceholder}/>
               </View>
            </View>
            <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button is pressed')}>
                  <ButtonText style={colors.secondaryText}>{strings.signInButtonMessage}</ButtonText>
               </TouchableOpacity>
               <AlternativeText style={colors.secondaryText}>{strings.forgotPassword}</AlternativeText>
            </View>
            <View style={styles.footer}>
               <AlternativeText style={colors.alternativeText}>{strings.signUpPromptMessage}</AlternativeText>
               <AlternativeText>{strings.signUp}</AlternativeText>
            </View>
         </View>
      </LinearGradient>
   )
}


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
   app: {
      flexDirection: 'column',
      height: 100,
      width: screenWidth,
      justifyContent: 'center',
      alignContent: 'space-between',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 250,
   },
   background: {
      height: screenHeight
    },
   button: {
      backgroundColor: '#1FCF7B',
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30,
      padding: 15,
      borderRadius: 20,
   },
   buttonContainer: {
      alignItems: 'center',
      marginBottom: 12,
   },
   fieldMessage: {
      margin: 20,
      marginTop: 40
   },
   footer: {
      marginLeft: 20
   },   
   inputs: {

   },
   logo: {
      width: 390,
      height: 150
   },
   messages: {
      
   },
})


export default LogoutScreen
