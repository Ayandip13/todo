import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Weather = () => {
  const [city, setCity] = useState("Kolkata");
  const [weatherData, setWeatherData] = useState({});

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDay();
  const year = currentDate.getFullYear();

  const details = `${day} ${month} ${year}`;

  const API_key = "11e56864810f6f7372448aa0a6e7d0a7";

  const weatherFunc = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      const data = await resp.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherFunc();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(e) => setCity(e)}
          placeholder="Enter a City name"
        />
        <TouchableOpacity onPress={() => weatherFunc()} activeOpacity={0.6}>
          <Text
            style={{
              backgroundColor: "#CDC1FF",
              color: "#7E5CAD",
              marginHorizontal: 40,
              height: 35,
              width: 100,
              textAlign: "center",
              textAlignVertical: "center",
              borderRadius: 5,
              marginLeft: 130,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
        <View style={{flexDirection:'row', marginHorizontal:70}}>
          <Ionicons name="location" style={{marginTop:13, marginRight:-5}} color={'#FFE1FF'} size={60}/>
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              marginTop: 30,
              color: "#E5D9F2",
            }}
          >
            {weatherData && weatherData.name}
          </Text>
        </View>

      <View style={styles.mainCard}>
        <Text style={styles.details}>{details}</Text>
        <Text style={styles.temp}>
          {" "}
          {weatherData.main && Math.round(weatherData.main.temp - 273.15)}
          °C{" "}
        </Text>
        <Text style={styles.situation}>
          {" "}
          {weatherData.weather && weatherData.weather[0].main}
        </Text>

        <View style={styles.weatherMetadata}>
          <Text style={styles.metaText}>
            {" "}
            Wind      | {weatherData.wind && weatherData.wind.speed} km/h
          </Text>
          <Text style={styles.metaText}>
            {" "}
            Humidity | {weatherData.main && weatherData.main.humidity} %
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  mainCard: {
    height: 370,
    width: 300,
    backgroundColor: "#DAD2FF",
    elevation: 20,
    borderRadius: 20,
    marginTop: 100,
    marginHorizontal: 30,
  },
  details: {
    marginTop: 45,
    color: "#6A80B9",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  temp: {
    fontSize: 90,
    textAlign: "center",
    marginTop: 20,
    color: "#6A80B9",
    fontWeight: "100",
  },
  situation: {
    fontSize: 35,
    textAlign: "center",
    color: "#6A80B9",
    marginTop: 20,
  },
  weatherMetadata: {
    // alignItems: "flex-end",
    marginTop: 60,
    height: 50,
    width: 180,
    marginLeft: 80,
  },
  metaText: {
    fontSize: 20,
    marginTop: 10,
    color: "#6A80B9",
  },
  header: {
    marginTop: 38,
  },
  inputBox: {
    textAlign: "center",
    height: 45,
    marginHorizontal: 30,
    borderColor: "#7E5CAD",
    borderWidth: 0.6,
    marginBottom: 20,
    marginTop: 25,
    borderRadius: 5,
  },
});
