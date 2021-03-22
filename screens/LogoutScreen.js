import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, Platform, TextInput, TouchableOpacity, Alert, Dimensions, TouchableWithoutFeedback} from 'react-native'

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
   font-weight: bold;
   font-size: 20px;
   font-family: 'AppleSDGothicNeo-Light';
`;

const ButtonText = styled.Text`
   font-size: 25px;
   font-family: 'AppleSDGothicNeo-SemiBold';
`;



function LogoutScreen() {
   // TextInput style change logic
   const [isFocused, setIsFocused] = useState(false)
   const [isFocused2, setIsFocused2] = useState(false)

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
                  <TextInput 
                     style={isFocused === true ? styles.inputFocused : styles.input} 
                     placeholder={strings.userNamePlaceholder} 
                     placeholderTextColor={"white"}
                     onFocus={ () => setIsFocused(true) }
                     onBlur={ () => setIsFocused(false) }
                  />
                  <TextInput 
                     style={isFocused2 === true ? styles.inputFocused : styles.input} 
                     placeholder={strings.passwordPlaceholder}
                     placeholderTextColor={"white"}
                     onFocus={ () => setIsFocused2(true) }
                     onBlur={ () => setIsFocused2(false) }
                  />
               </View>
            </View>
            <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sign in')}>
                  <ButtonText style={colors.secondaryText}>
                     {strings.signInButtonMessage}
                  </ButtonText>
               </TouchableOpacity>
               <TouchableWithoutFeedback onPress={ () => Alert.alert('Forgot Password') }>
                  <AlternativeText style={colors.secondaryText}>
                     {strings.forgotPassword}
                  </AlternativeText>
               </TouchableWithoutFeedback>
            </View>
            <View style={styles.footer}>
               <AlternativeText style={colors.alternativeText}>{strings.signUpPromptMessage}</AlternativeText>
               <TouchableWithoutFeedback onPress={ () => Alert.alert('Sign up') }>
                  <AlternativeText style={{ marginLeft: 10 }}>{strings.signUp}</AlternativeText>
               </TouchableWithoutFeedback>
            </View>
         </View>
      </LinearGradient>
   )
}


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
   app: {
      // justifyContent: 'space-between',
      flexDirection: 'column',
      height: screenHeight,
      width: screenWidth,
      // alignContent: 'space-between',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 100,
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
      marginBottom: 15
   },
   buttonContainer: {
      alignItems: 'center',
      marginTop: 15,
   },
   fieldMessage: {
      margin: 20,
      marginTop: 80
   },
   footer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 150,
      marginLeft: 20
   },   
   input: {
      backgroundColor: '#bbbbbb',
      padding: 20,
      margin: 5,
      borderRadius: 20,
      fontSize: 20
   },
   inputs: {
      marginTop: 20,
   },
   inputFocused: {
      backgroundColor: '#97b2b0',
      padding: 20,
      margin: 5,
      borderRadius: 20,
      fontSize: 20,
   },
   logo: {
      width: 390,
      height: 150
   },
})


export default LogoutScreen
