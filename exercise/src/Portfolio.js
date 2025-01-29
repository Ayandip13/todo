import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Linking } from "react-native";

const Portfolio = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/download.jpg")}
        />
        <Text style={styles.nameText}>Ayandip Paul</Text>
        <Text style={{color:'#F4EDD3', fontSize:20}}>@Ayandip13</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={()=> Linking.openURL("https://github.com/Ayandip13")}><Image style={styles.iconImage} source={require("../assets/download.png")}/></TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/p/Manuel-Nuer-100075863620251/")}><Image style={styles.iconImage} source={require('../assets/download (1).png')}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.linkedin.com/in/ayandip-paul-a11258272/")}><Image style={styles.iconImage} source={require('../assets/download (2).png')}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://x.com/Ayandip02")}><Image style={styles.iconImage} source={require('../assets/download (3).png')}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/apaulfloyd13/")}><Image style={styles.iconImage} source={require('../assets/download (1).jpg')}/></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 150,
    backgroundColor: "#427D9D",
    height: 900,
    width: 320,
    marginHorizontal: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    elevation: 40,
    position: "relative",
  },
  mainImage: {
    height: 170,
    width: 200,
    borderRadius: 20,
    elevation: 20,
    position: "absolute",
    top: -55, // Moves half of the image outside the top border
    alignSelf: "center",
  },
  nameText:{
    color:'#F4EDD3',
    fontSize:35,
    marginTop:135,
    fontFamily:'Arial',
    fontWeight:'100'
  },
  iconsContainer:{
    flexDirection:'row',
    marginTop:10,
    gap:5
  },
  iconImage:{
    height:30,
    width:30
  }
});

export default Portfolio;
