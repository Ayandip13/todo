import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const { item } = route.params;

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#3A7D44",
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            flexDirection: "row",
            top: 60,
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack("RecipeCard")}>
            <FontAwesome name={"arrow-circle-left"} size={28} color={"white"} />
          </Pressable>
          <Pressable>
            <FontAwesome name={"heart-o"} size={28} color={"white"} />
          </Pressable>
        </SafeAreaView>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            marginTop: 240,
            alignItems: "center",
            borderTopRightRadius: 45,
            borderTopLeftRadius: 45,
          }}
        >
          <View
            style={{ height: 300, width: 300, position: "absolute", top: -150 }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                borderTopLeftRadius: 155,
                borderBottomRightRadius: 155,
              }}
            />
          </View>

          <Text
            style={{
              color: "#2C3930",
              fontSize: 30,
              fontWeight: "900",
              top: 160,
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              color: "#2C3930",
              fontSize: 17,
              fontWeight: "400",
              top: 170,
              textAlign: "center",
              marginHorizontal: 15,
            }}
          >
            {item.description}
          </Text>

          <View style={{ flexDirection: "row", marginTop: 190, left: -120 }}>
            <View
              style={{
                backgroundColor: "orange",
                alignItems: "center",
                paddingHorizontal: 24,
                borderRadius: 7,
                paddingVertical: 10,
              }}
            >
              <Ionicons name="time-outline" size={40} />
              <Text style={{ fontWeight: "500" }}>{item.time}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", left: -120, marginTop: 10 }}>
            <View
              style={{
                backgroundColor: "orange",
                alignItems: "center",
                paddingHorizontal: 29.5,
                borderRadius: 7,
                paddingVertical: 10,
              }}
            >
              <Ionicons name="cafe" size={40} />
              <Text style={{ fontWeight: "500" }}>{item.difficulty}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", left: -120, marginTop: 10 }}>
            <View
              style={{
                backgroundColor: "orange",
                alignItems: "center",
                paddingHorizontal: 33,
                borderRadius: 7,
                paddingVertical: 10,
              }}
            >
              <FontAwesome name="fire" size={40}/>
              <Text style={{ fontWeight: "500" }}>{item.difficulty}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
