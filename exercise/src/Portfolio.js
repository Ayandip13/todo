import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Linking } from "react-native";
import AllPort from "./AllPort";
import PhotosPort from "./PhotosPort";
import ProjectsPort from "./ProjectsPort"

const Portfolio = () => {
  const [allport, setAllport] = useState(false);
  const [photosPort, setPhotosPort] = useState(false);
  const [projectPort, setProjectsPort] = useState(false)

  const photosportHandle = () => {
    setPhotosPort(true);
    setAllport(false);
    setProjectsPort(false)
  };

  const allportHandle = () => {
    setAllport(true);
    setPhotosPort(false);
    setProjectsPort(false)
  };

  const projectPortHandle = () => {
    setProjectsPort(true)
    setAllport(false)
    setPhotosPort(false)
  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/download.jpg")}
        />
        <Text style={styles.nameText}>Ayandip Paul</Text>
        <Text style={{ color: "#DFF2EB", fontSize: 20, fontWeight:'thin' }}>@Ayandip13</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.styleIcon}
            onPress={() => Linking.openURL("https://github.com/Ayandip13")}
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/download.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleIcon}
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/p/Manuel-Nuer-100075863620251/"
              )
            }
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/download (1).png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleIcon}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/ayandip-paul-a11258272/"
              )
            }
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/download (2).png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleIcon}
            onPress={() => Linking.openURL("https://x.com/Ayandip02")}
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/download (3).png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleIcon}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/apaulfloyd13/")
            }
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/download (1).jpg")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainerCards}>
          <TouchableOpacity
            onPress={() => allportHandle()}
            style={styles.cardDetails}
          >
            <Text style={{ color: "#DFF2EB", fontSize: 18 }}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardDetails}
            onPress={() => photosportHandle()}
          >
            <Text style={{ color: "#DFF2EB", fontSize: 18 }}>Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardDetails} onPress={()=>projectPortHandle()}>
            <Text style={{ color: "#DFF2EB", fontSize: 18 }}>Projects</Text>
          </TouchableOpacity>
        </View>


        {allport && <AllPort />}        
        {photosPort && <PhotosPort />}
        {projectPort && <ProjectsPort/>}



      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 150,
    backgroundColor: "#427D9D",
    height: 900,
    width: 320,
    marginHorizontal: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    elevation: 40,
    position: "relative",
  },
  mainImage: {
    height: 170,
    width: 200,
    borderRadius: 20,
    elevation: 20,
    position: "absolute",
    top: -55, // Moves half of the image outside the top border
    alignSelf: "center",
  },
  nameText: {
    color: "#DFF2EB",
    fontSize: 35,
    marginTop: 135,
    fontWeight: "ultralight",
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 5,
  },
  iconImage: {
    height: 30,
    width: 30,
    borderRadius: 4,
  },
  styleIcon: {
    height: 42,
    width: 42,
    backgroundColor: "#6A9AB0",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginTop: 13,
  },
  mainContainerCards: {
    flexDirection: "row",
    marginTop: 40,
  },
  cardDetails: {
    marginHorizontal: 20,
  },
});

export default Portfolio;
