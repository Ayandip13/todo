import {
  Image,
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
    <ScrollView showsVerticalScrollIndicator={false}>
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

          <View style={{ left: 11 }}>
            <View style={{ flexDirection: "row", marginTop: 190, left: -120 }}>
              <View
                style={{
                  backgroundColor: "#98D8EF",
                  alignItems: "center",
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  borderRadius: 7,
                }}
              >
                <Ionicons name="time-outline" size={40} />
                <Text style={{ fontWeight: "500" }}>{item.time}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", left: -10, bottom: 73 }}>
              <View
                style={{
                  backgroundColor: "#FFA09B",
                  alignItems: "center",
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  borderRadius: 7,
                }}
              >
                <Ionicons name="cafe" size={40} />
                <Text style={{ fontWeight: "500" }}>{item.difficulty}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                left: -120,
                bottom: 145,
                left: 100,
              }}
            >
              <View
                style={{
                  backgroundColor: "#E7D283",
                  alignItems: "center",
                  paddingHorizontal: 28,
                  paddingVertical: 10,
                  borderRadius: 7,
                }}
              >
                <FontAwesome name="fire" size={40} />
                <Text style={{ fontWeight: "500" }}>{item.difficulty}</Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 20,
              bottom: 120,
              fontWeight: "bold",
              right: 110,
            }}
          >
            Ingradients:
          </Text>
          <View style={{width:150, height:0.5, backgroundColor:'#6A80B9', bottom:117, right:80, marginTop:8}}/>


          {item.ingradients.map((ingradient) => {
            return (
              <View
                style={{
                  bottom: 110,
                  alignSelf: "flex-start",
                  marginLeft: 40,
                  flexDirection: "row",
                  marginTop:8,
                  top:-105
                }}
              >
                <Ionicons
                  name="bulb-sharp"
                  style={{ right: 7, bottom: 4 }}
                  size={17}
                  color={"#D84040"}
                />
                <Text style={{ textAlign: "left", right: 5, top: -1, fontSize:16 }}>
                  {ingradient}
                </Text>
              </View>
            );
          })}

          <Text
            style={{
              fontSize: 20,
              bottom: 120,
              fontWeight: "bold",
              right: 130,
              marginTop: 30,
            }}
          >
            Steps:
          </Text>
          <View style={{width:150, height:0.5, backgroundColor:'#6A80B9', bottom:115, right:80, marginTop:5}}/>

          {item.steps.map((step, index) => {
            return (
              <View
                style={{
                  bottom: 110,
                  alignSelf: "flex-start",
                  marginLeft: 40,
                  flexDirection: "row",
                  marginTop:10
                }}
              >
                <Text style={{ textAlign: "left", right: 9, top: -1, fontWeight:"500", fontSize:19 }}>
                {`${index+1}.  ${step}`}
                </Text>
              </View>
            );
          })}
          <Text style={{fontSize:16, color:'#727D73', fontWeight:'800', bottom:20}}>Happy Cooking : &#128535;</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
