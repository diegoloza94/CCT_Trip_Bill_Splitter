import React, { useState } from "react";

// UI elements
import {
  View,
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

const About = ({ navigation }) => {
  
  const [message, setMessage] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={[basic.container]}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <Text style={[form.heading, form.field]}>About Me</Text>
          <Text style={form.message}>{message}</Text>

          <View style={[form.field, form.field1]}>
          <Text style={form.text}>Diego Lozano Elizondo</Text>
          </View>
          <View style={[form.field, form.field1]}>
          <Text style={form.text}>diegoloza94@gmail.com</Text>
          </View>
          <View style={[form.field, form.field1]}>
          <Text style={form.text}>App Version: 1.0.0 (Beta)</Text>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default About;
