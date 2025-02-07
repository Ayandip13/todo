import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 17,
        marginVertical: 12,
        borderRadius:9,
        elevation:9
    }}
    >
        <FontAwesome name={icon} size={24} color="#f96163" style={{marginTop:8, left:-2}}/>
      <TextInput placeholder={placeholder} style={{paddingLeft:9, fontSize:18, color:'#808080'}}/>
    </View>
  );
};

export default SearchFilter;