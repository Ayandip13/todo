import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const AllPort = () => {
  return (
    <>
      <View style={styles.upperMainCard}>
        <Text style={styles.upperMainCardText}>13.11.2002</Text>
        <Text style={styles.upperMainCardText}>
          Cross Platform App Developer
        </Text>
        <Text style={styles.upperMainCardText}>
          Dev by Day, Design Wizerd by Morning
        </Text>
      </View>

      <View style={styles.originDetails}>
        <Ionicons
          style={{ marginRight: -3, marginTop: -5 }}
          name="pin-outline"
          size={22}
          color="#DFF2EB"
        />
        <Text style={styles.originDetailsText}>Naihati,India</Text>

        <Ionicons
          style={{ marginRight: -1, marginTop: -5, marginLeft: 5 }}
          name="arrow-up"
          size={20}
          color="#DFF2EB"
        />
        <Text style={{ fontSize: 20, color: "#DFF2EB", marginLeft: 2 }}>
          Joined on Dec 29, 2024
        </Text>
      </View>

      <View style={{backgroundColor:'#DFF2EB', height:0.5, width:280, marginTop:20}}/>

      <View style={styles.socialCards}>
        <View style={styles.emailCard}>
          <Ionicons name="mail" size={35} color="#DFF2EB" />
          <Text
            style={{
              marginTop: 7,
              color: "#DFF2EB",
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            Email
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://mail.google.com/mail/u/0/#inbox?compose=new"
              )
            }
            style={{
              marginTop: 3,
              color: "#DFF2EB",
              fontWeight: "600",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            ayandippaul284@gmail.com
          </Text>
        </View>
        <View style={styles.facebookCard}>
          <Ionicons name="logo-facebook" color="#DFF2EB" size={30} />
          <Text
            style={{
              marginTop: 9,
              color: "#DFF2EB",
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            Facebook
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/p/Manuel-Nuer-100075863620251/"
              )
            }
            style={{
              marginTop: 6,
              color: "#DFF2EB",
              fontWeight: "600",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            @ayandip_paul
          </Text>
        </View>
      </View>

      <View style={styles.socialCards}>
        <View style={styles.gitHubCard}>
          <Ionicons name="logo-github" size={35} color="#DFF2EB" />
          <Text
            style={{
              marginTop: 7,
              color: "#DFF2EB",
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            GitHub
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://github.com/Ayandip13"
              )
            }
            style={{
              marginTop: 3,
              color: "#DFF2EB",
              fontWeight: "600",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            Click to Open GitHub
          </Text>
        </View>
      </View>

      <View style={styles.socialCards}>
        <View style={styles.LinkdinCard}>
          <Ionicons name="logo-linkedin" size={35} color="#DFF2EB" />
          <Text
            style={{
              marginTop: 7,
              color: "#DFF2EB",
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            Linkedin
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/ayandip-paul-a11258272/"
              )
            }
            style={{
              marginTop: 3,
              color: "#DFF2EB",
              fontWeight: "600",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            Click here to Visit linkedin
          </Text>
        </View>


        <View style={styles.instagramCard}>
          <Ionicons name="logo-instagram" size={35} color="#DFF2EB" />
          <Text
            style={{
              marginTop: 7,
              color: "#DFF2EB",
              fontWeight: "800",
              fontSize: 18,
            }}
          >
            Instagram
          </Text>
          <Text
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/apaulfloyd13/"
              )
            }
            style={{
              marginTop: 3,
              color: "#DFF2EB",
              fontWeight: "600",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            Click to Visit Instagram
          </Text>
        </View>
      </View>
    </>
  );
};

export default AllPort;

const styles = StyleSheet.create({
  upperMainCard: {
    marginLeft: -20,
    marginTop: 28,
  },
  upperMainCardText: {
    color: "#DFF2EB",
    marginTop: 5,
    fontSize: 15,
  },
  originDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    marginLeft: -15,
  },
  originDetailsText: {
    fontSize: 20,
    color: "#DFF2EB",
  },
  socialCards: {
    flexDirection: "row",
    marginTop: 20,
  },
  emailCard: {
    height: 90,
    width: 180,
    backgroundColor: "#074799",
    borderRadius: 15,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: "column",
    marginRight: 10,
  },
  facebookCard: {
    height: 90,
    width: 100,
    backgroundColor: "#35A5EE",
    borderRadius: 15,
    paddingTop: 8,
    paddingLeft: 12,
  },
  gitHubCard: {
    height: 90,
    width: 284,
    backgroundColor: "#25262F",
    borderRadius: 15,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: "column",
    marginRight: 3,
  },
  LinkdinCard:{
    height: 190,
    width: 133,
    backgroundColor: "#155E95",
    borderRadius: 15,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: "column",
    marginRight:10
  },
  instagramCard:{
    height: 140,
    width: 130,
    backgroundColor: "#7A07A3",
    borderRadius: 15,
    paddingTop: 8,
    paddingLeft: 12,
    flexDirection: "column",
  }
});
