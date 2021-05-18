import React, { useState } from "react";

// UI elements
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Custom styles
import { basic, form, colors } from "../components/styles";
import Calculate from "./Calculate";

const ListBills = ({ navigation }) => {
  const [trip, setTrip] = useState("");
  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [message, setMessage] = useState("");

  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={[basic.container]}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <Text style={[form.heading, form.field]}>List of Trip Bills</Text>
          <Text style={form.message}>{message}</Text>          
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });

export default ListBills;
