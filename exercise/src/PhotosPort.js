import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PhotosPort = () => {
  return (
    <>
      <View>
        <Text
          style={{
            marginTop: 20,
            color: "#DFF2EB",
            fontWeight: "bold",
            fontSize: 30,
            marginLeft: 80,
          }}
        >
          Photos
        </Text>

        <View
          style={{
            backgroundColor: "#DFF2EB",
            height: 0.5,
            width: 130,
            marginTop: 7,
            marginLeft:55
          }}
        />

        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/IMG_20221103_134626.jpg")}
            />
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/IMG-20230126-WA0038.jpg")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/IMG-20230329-WA0007.jpg")}
            />
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/IMG-20240115-WA0087.jpg")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/IMG20230323174211.jpg")}
            />
            <Image
              style={styles.image}
              source={require("../assets/portfolioPhotos/Screenshot_2024-05-14-02-11-03-82_965bbf4d18d205f782c6b8409c5773a4.jpg")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PhotosPort;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  },
});
