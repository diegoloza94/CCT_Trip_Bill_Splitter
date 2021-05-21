import React from "react";

// UI elements
import { View, Text, TouchableOpacity, Image } from "react-native";
// Custom styles      <Image source={require("../assets/split.jpg")} style={basic.image} />
import { basic, form } from "../components/styles";


//here I put one picture could help us to get a friendly app and also I added 2 section about the calculate 
//is direct to another screen that you can do the expenses
//and another the log out because I want to close the application o the session
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
              <Text style={form.buttonText}> $ Calculate Trip Bill</Text>
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


/*<View style={form.field}>
<TouchableOpacity onPress={() => navigation.navigate("ListBills")} style={form.button}>
<Text style={form.buttonText}> All List Bills</Text>
</TouchableOpacity>
</View>*/