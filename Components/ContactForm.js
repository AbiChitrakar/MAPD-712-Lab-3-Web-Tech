import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function ContactForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const sendButton = () => {
    alert(`Thank you ${firstName} ${lastName} for the inputs`);
  };

  const clearButton = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contactFormHeader}>Contact Form</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Input Your First Name"
        placeholderTextColor={"grey"}
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Input Your Last Name"
        placeholderTextColor={"grey"}
        onChangeText={(value) => setLastName(value)}
        value={lastName}
      />
      <Text style={styles.label}>Email</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Input Your Email"
        placeholderTextColor={"grey"}
        onChangeText={(value) => setEmail(value)}
        value={email}
      />

      <Button onPress={sendButton} title="Send" />
      <TouchableOpacity style={styles.clearButton} onPress={clearButton}>
        {<Text style={styles.clearButton}>Clear</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 110,
  },

  contactFormHeader: {
    textAlign: "center",
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
  },

  label: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: "bold",
  },

  textInput: {
    paddingBottom: 16,
  },
  clearButton: {
    backgroundColor: "orange",
    alignItems: "center",
    padding: 5,
    borderRadius: 40,
    marginTop: 5,
  },
});
