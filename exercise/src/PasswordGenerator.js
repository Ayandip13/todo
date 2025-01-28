import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import React, { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [text, setText] = useState("");
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [charecters, setCharecters] = useState(false);
  const [password, generatedPassword] = useState("")

  return (
    <View>
      <Text style={styles.main_Text}>Password Generator</Text>
      <View style={styles.lengthView}>
        <Text
          style={{ fontSize: 17, marginTop: 19, color: "white", opacity: 0.9 }}
        >
          Password length :
        </Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={setText}
          placeholder="write something"
        />
      </View>
      <View style={styles.cards}>
        <Text style={{ fontSize: 17, color: "white", opacity: 0.9 }}>
          Include Lowercase letters :
        </Text>
        <Switch
          value={lowerCase}
          onValueChange={() => setLowerCase((prev) => !prev)}
        />
      </View>
      <View style={styles.cards}>
        <Text style={{ fontSize: 17, color: "white", opacity: 0.9 }}>
          Include UpperCase letters :
        </Text>
        <Switch
          value={upperCase}
          onValueChange={() => setUpperCase((prev) => !prev)}
        />
      </View>
      <View style={styles.cards}>
        <Text style={{ fontSize: 17, color: "white", opacity: 0.9 }}>
          Include Numbers :
        </Text>
        <Switch
          value={numbers}
          onValueChange={() => setNumbers((prev) => !prev)}
        />
      </View>
      <View style={styles.cards}>
        <Text style={{ fontSize: 17, color: "white", opacity: 0.9 }}>
          Include Charecters :
        </Text>
        <Switch
          value={charecters}
          onValueChange={() => setCharecters((prev) => !prev)}
        />
      </View>

      <TextInput value={password} style={styles.generatedText} readOnly/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#3C3D37",
    width: 180,
    marginTop: 20,
    borderRadius: 5,
    textAlign: "center",
  },
  main_Text: {
    marginTop: 50,
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  lengthView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    marginBottom:35
  },
  cards: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  generatedText:{
    height:40,
    width:340,
    backgroundColor:"#CBDCEB",
    marginHorizontal:10,
    marginTop:30,
    color:'#4A628A',
    textAlign:'center',
    borderRadius:5
  }
});

export default PasswordGenerator;