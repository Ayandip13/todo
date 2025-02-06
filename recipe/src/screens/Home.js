import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.topView}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ height: "100%", width: "100%" }}
        />
        <View style={styles.transparentView}>
          <Text style={{color:'white', fontSize:35,right:70, bottom:50, fontWeight:'bold'}}>ZomaTooooo</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "white",
              borderRadius:6,
              flexDirection:'row',
              alignItems:'center'
            }}
          >
            {/* <Image source={require('../../assets/favicon.png')}/> */}
            <Ionicons name="search" size={21} style={{marginLeft:20}}/>
            <Text style={{fontSize:15, marginLeft:17, color:'#9e9e9e'}}>Search anything you want</Text>
          </TouchableOpacity>
          <Text style={{top:10, color:'white', fontWeight:'bold'}}>Search 100+ recipes with just one click</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    width: "100%",
    height: "40%",
  },
  transparentView: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
