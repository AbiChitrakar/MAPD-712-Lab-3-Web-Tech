import { StyleSheet, View } from "react-native";
import React from "react";
import ContactForm from "./Components/ContactForm";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <ContactForm />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
