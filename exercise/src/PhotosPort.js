import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PhotosPort = () => {




    
  return (
    <>
      <View>
        <Text style={{marginTop:20, color:'white', fontWeight:'bold', fontSize:30}}>Photos</Text>
        <View>
            <View><Image style={styles.image} source={require('../assets/portfolioPhotos/IMG_20221103_134626.jpg')}/> </View>
        </View>
      </View>
    </>
  );
};

export default PhotosPort;

const styles = StyleSheet.create({
    image:{
        height:100,
        width:100,
        borderRadius:10
    }
});
