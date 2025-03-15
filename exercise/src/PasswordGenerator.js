import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { Clipboard } from "react-native";

const PasswordGenerator = () => {
  // State variables for user input and generated password
  const [length, setLength] = useState(""); // Length of the password
  const [lowerCase, setLowerCase] = useState(false); // Toggle for lowercase letters
  const [upperCase, setUpperCase] = useState(false); // Toggle for uppercase letters
  const [numbers, setNumbers] = useState(false); // Toggle for numbers
  const [charecters, setCharecters] = useState(false); // Toggle for special characters
  const [password, generatedPassword] = useState(""); // Generated password
  const [visible, setVisible] = useState(false); // Modal visibility state

  // Function to generate password based on selected options
  const passwordGeneratorFunc = () => {
    let pass = ""; // Generated password
    let str = ""; // Character set based on user selections

    // Build the character set based on selected options
    if (lowerCase) str += "qwertyuiopasdfghjklzxcvbnm";
    if (upperCase) str += "QWERTYUIOPASDFGHJKLZMXNCBV";
    if (numbers) str += "1234567890";
    if (charecters) str += "!@#$%>^&*_+;:/<`~?,";

    // Generate password using the character set
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    generatedPassword(pass); // Set the generated password
  };

  // Validate user input and call the password generator
  const handlePasswordGeneratorFunc = () => {
    if (length === "") {
      setVisible(true); // Show modal if length is not specified
      return;
    }
    passwordGeneratorFunc(); // Generate password
  };

  // Function to close the modal
  const closeModal = () => {
    setVisible(false);
  };

  // Function to copy password to clipboard with a long press
  const longPressHandler = () => {
    if (password) {
      Clipboard.setString(password); // Copy password to clipboard
      ToastAndroid.show("Password copied to clipboard!", ToastAndroid.SHORT); // Show toast notification
    }
  };

  // Effect to generate password when component mounts
  useEffect(() => {
    passwordGeneratorFunc();
  }, []);

  return (
    <View>
      {/* Title */}
      <Text style={styles.main_Text}>Password Generator</Text>

      {/* Input for password length */}
      <View style={styles.lengthView}>
        <Text
          style={{ fontSize: 17, marginTop: 19, color: "white", opacity: 0.9 }}
        >
          Password length :
        </Text>
        <TextInput
          value={length}
          style={styles.input}
          onChangeText={setLength}
          placeholder="Ex.8"
          keyboardType="numeric"
        />
      </View>

      {/* Switches for character type options */}
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
          Include Uppercase letters :
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
          Include Characters :
        </Text>
        <Switch
          value={charecters}
          onValueChange={() => setCharecters((prev) => !prev)}
        />
      </View>

      {/* Buttons for generating and resetting password */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => handlePasswordGeneratorFunc()}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text>Generate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // Reset all states
            generatedPassword("");
            setLength("");
            setCharecters(false);
            setLowerCase(false);
            setNumbers(false);
            setUpperCase(false);
          }}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Generated password displayed as a non-editable text input */}
      <TouchableOpacity
        onLongPress={longPressHandler}
        activeOpacity={0.8}
        style={{ marginTop: 20 }}
      >
        <TextInput
          value={password}
          style={styles.generatedText}
          editable={false}
        />
      </TouchableOpacity>

      {/* Modal to prompt the user to input a valid length */}
      <Modal isVisible={visible}>
        <View
          style={{
            height: 130,
            backgroundColor: "gray",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            borderBottomRightRadius: 7,
            borderBottomLeftRadius: 7,
          }}
        >
          <Text style={{ paddingTop: 26, paddingLeft: 22 }}>
            Please enter a valid password length!
          </Text>
          <TouchableOpacity
            onPress={() => closeModal()}
            activeOpacity={0.8}
            style={styles.ModalButton}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// Styles for the components
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
    marginBottom: 35,
  },
  cards: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  generatedText: {
    height: 40,
    width: 340,
    backgroundColor: "#CBDCEB",
    marginHorizontal: 10,
    marginTop: 30,
    color: "#4A628A",
    textAlign: "center",
    borderRadius: 5,
    elevation: 18,
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: "#F0F3FF",
    paddingTop: 10,
    alignItems: "center",
    marginLeft: 50,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 8,
  },
  ModalButton: {
    paddingVertical: 11,
    backgroundColor: "white",
    height: 35,
    width: 70,
    paddingHorizontal: 21,
    marginLeft: 220,
    marginTop: 40,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 3,
  },
});

export default PasswordGenerator;
