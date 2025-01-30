import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProjectsPort = () => {
  return (
    <>
      <Text
        style={{
          color: "#DFF2EB",
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Projects
      </Text>

      <View
        style={{
          backgroundColor: "#DFF2EB",
          height: 0.5,
          width: 130,
          marginTop: 7,
        }}
      />

      <View style={styles.Cards}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          : Password Generator App :{" "}
        </Text>
        <Text
          onPress={() =>
            Linking.openURL(
              "https://github.com/Ayandip13/todo/blob/master/exercise/src/PasswordGenerator.js"
            )
          }
          style={{
            fontSize: 18,
            marginTop: 10,
            textAlign: "center",
            color: "#DFF2EB",
            textDecorationLine: "underline",
          }}
        >
          Click Here to Visit the github Repo
        </Text>
      </View>
      <View style={styles.Cards}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          : Todo App :{" "}
        </Text>
        <Text
          onPress={() =>
            Linking.openURL(
              "https://github.com/Ayandip13/todo/blob/master/todoz/src/NewTodo.js"
            )
          }
          style={{
            fontSize: 18,
            marginTop: 10,
            textAlign: "center",
            color: "#DFF2EB",
            textDecorationLine: "underline",
          }}
        >
          Click Here to Visit the github Repo
        </Text>
      </View>
      <View style={styles.Cards}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          : Portfolio App :{" "}
        </Text>
        <Text
          onPress={() =>
            Linking.openURL(
              "https://github.com/Ayandip13/todo/blob/master/exercise/src/Portfolio.js"
            )
          }
          style={{
            fontSize: 18,
            marginTop: 10,
            textAlign: "center",
            color: "#DFF2EB",
            textDecorationLine: "underline",
          }}
        >
          Click Here to Visit the github Repo
        </Text>
      </View>
    </>
  );
};

export default ProjectsPort;

const styles = StyleSheet.create({
  Cards: {
    height: 100,
    width: 300,
    backgroundColor: "#7AB2D3",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 8,
    marginTop: 25,
  },
});
