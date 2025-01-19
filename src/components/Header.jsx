import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#98D8EF'} barStyle={"light-content"}/>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#98D8EF",
    height:85,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    textAlign:'center',
    fontSize:20,
    color:"#EAE2C6",
    fontWeight:'bold'
  },
  icon:{}
});

export default Header;
