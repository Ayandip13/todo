import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
  }, [])
  


  return (
    <View style={styles.container}>
      <Animatable.Image animation='slideInDown' source={require('../../assets/icon.png')} style={{height:300, width:300, borderRadius:300}}/>
      <Animatable.Text animation='slideInDown' style={{fontSize:40, color:'black', fontWeight:'600', marginTop:19}}>Zomato</Animatable.Text>
      <Animatable.Text animation='slideInDown' style={{fontSize:20, color:'black', fontWeight:'500', bottom:30, position:'absolute'}}>Let's get started with the Zomato</Animatable.Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#05B681',
    justifyContent:'center',
    alignItems:'center'
  }
})