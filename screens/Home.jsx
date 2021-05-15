import React from "react";

// UI elements
import { View, Text, TouchableOpacity, Image } from "react-native";
// Custom styles      <Image source={require("../assets/split.jpg")} style={basic.image} />
import { basic, form } from "../shared/styles";

const Home = ({ navigation }) => {
  return (
    <>
      <Image source={require("../assets/split.jpg")} style={basic.image} />
      <View style={basic.container}>
        <View>
          <View style={form.field}>
            <Text style={form.heading}>Split the Bill of your Trip</Text>
            <Text style={[form.text, { paddingVertical: 5, lineHeight: 25 }]}>
             
            </Text>
          </View>
          <View style={form.field}>
            <TouchableOpacity onPress={() => navigation.navigate("Calculate")} style={form.button}>
              <Text style={form.buttonText}> $ Calculate</Text>
            </TouchableOpacity>
            </View>
            <View style={form.field}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={form.button}>
              <Text style={form.buttonText}> Log Out</Text>
            </TouchableOpacity>
            </View> 
        </View>
      </View>
    </>
  );
};

export default Home;
