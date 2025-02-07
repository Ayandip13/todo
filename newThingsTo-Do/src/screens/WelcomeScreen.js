import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

const WelcomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const loadingHandle = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate("RecipeList");
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        style={{ height: 300, width: 300, borderRadius: 300, marginTop: 200 }}
        source={require("../../assets/images/download.jpg")}
      />
      <Text
        style={{
          color: "#f96163",
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        40+ Premium recipes
      </Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 40,
          color: "#3c444c",
        }}
      >
        Cook Like a Chef
      </Text>

      <TouchableOpacity
        onPress={() => loadingHandle()}
        activeOpacity={0.7}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          marginTop: 38,
        }}
      >
        <Text style={{ fontSize: 21, color: "#fff", fontWeight: "700" }}>
          Less Gooo..
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          style={{ marginTop: 30 }}
          size={"large"}
          color={"#f96163"}
        />
      )}
    </View>
  );
};

export default WelcomeScreen;
