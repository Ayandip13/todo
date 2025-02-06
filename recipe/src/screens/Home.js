import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MEAL_FILTERS } from "../Data";

const Home = () => {
  useEffect(() => {
    getTrendyRecipes();
  }, []);

  const APP_ID = "780ddbc7";
  const APP_KEY = "c8da985eb38e55d81c8f5cfb91feec2d";

  
  const getTrendyRecipes = () => {
    let myHeaders = new Headers();

    myHeaders.append("accept", "application/json");
    myHeaders.append("Accept-Language", "en");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.topView}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ height: "100%", width: "100%" }}
        />
        <View style={styles.transparentView}>
          <Text
            style={{
              color: "white",
              fontSize: 35,
              right: 70,
              bottom: 50,
              fontWeight: "bold",
            }}
          >
            ZomaTooooo
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "white",
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <Image source={require('../../assets/favicon.png')}/> */}
            <Ionicons name="search" size={21} style={{ marginLeft: 20 }} />
            <Text style={{ fontSize: 15, marginLeft: 17, color: "#9e9e9e" }}>
              Search anything you want
            </Text>
          </TouchableOpacity>
          <Text style={{ top: 10, color: "white", fontWeight: "bold" }}>
            Search 100+ recipes with just one click
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "600",
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        Categories
      </Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={MEAL_FILTERS}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  elevation: 7,
                  marginHorizontal: 5,
                  marginTop: 6,
                  marginBottom: 19,
                }}
              >
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text
                  style={{
                    padding: 4,
                    marginHorizontal: 5,
                    marginTop: 40,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
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
  // card:{
  //   width:"70%",
  //   height:"60%",
  //   elevation:7,
  //   justifyContent:'center',
  //   alignItems:"center",
  //   backgroundColor:'white'
  // },
  categoryIcon: {
    width: 60,
    height: 60,
    top: 20,
    left: 20,
    borderRadius: 5,
    opacity: 0.8,
  },
});
