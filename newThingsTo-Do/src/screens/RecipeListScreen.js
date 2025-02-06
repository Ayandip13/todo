import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 35 }}>
      <Header headerText={"Hey, Sayani"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder="Enter your favourite recipe" />


      <View>
        <Text style={{fontSize:22, fontWeight:'bold', }}>Categories</Text>
        <CategoriesFilter/>
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
