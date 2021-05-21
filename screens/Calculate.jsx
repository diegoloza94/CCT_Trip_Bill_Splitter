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
import { basic, form, colors , styles} from "../components/styles";
import Trip from '../components/trip';

export function Calculate({ navigation}) {
  /*const [trip, setTrip] = useState();*/
  const [tripItems, setTripItems] = useState([]);

/*const Calculate = ({ navigation }) => {*/
  const [trip, setTrip] = useState("");
  const [amount, setamount] = useState("");
  const [description, setdescription] = useState("");
  const [user, setuser] = useState("");
  const [message, setMessage] = useState("");

  const validateAmount = amount => {
    var re = /^[0-9]+$/;
    return re.test(amount);
  };

  const validateUser = user => {
    var re = /^[0-9]+$/;
    return re.test(user);
  };

  const handleSubmit = () => {
    if (
      amount === "" ||
      description === "" ||
      user === "" ||
      trip === ""
    ) {
      setMessage("Fill in all fields");
    } else if (!validateAmount(amount)) {
        setMessage("Only numbers are accepted in amount field");
    } else if (!validateUser(user)) {
        setMessage("Only numbers are accepted in user field");
    } else {
      setMessage("");
      setTrip("");
      setamount("");
      setdescription("");
      setuser("");
      setTripItems([...tripItems, trip, amount, description])
      /*navigation.navigate("Home");*/
    }
  };

  const handleAddBill = () => {
    Keyboard.dismiss();
    setTripItems([...tripItems,trip, amount, description])
    setTrip("");
    setamount("");
    setdescription(""); 
    setuser("");
  }

  const completeTrip = (index) => {
    let itemsCopy = [...tripItems];
    itemsCopy.splice(index, 1);
    setTripItems(itemsCopy)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={[basic.container]}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <Text style={[form.heading, form.field]}>Trip</Text>
          <Text style={form.message}>{message}</Text>

          <View style={form.field}>
            <Text style={form.label}>Trip</Text>
            <TextInput
              onChangeText={value => setTrip(value)}
              name="trip"
              style={form.input}
              value={trip}
              autoCapitalize="none"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Amount</Text>
            <TextInput
              onChangeText={value => setamount(value)}
              name="amount"
              style={form.input}
              value={amount}
              autoCapitalize="none"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Description</Text>
            <TextInput
              onChangeText={value => setdescription(value)}
              name="description"
              style={form.input}
              value={description}
              autoCapitalize="none"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>How Many Users would you like to share the bills</Text>
            <TextInput
              onChangeText={value => setuser(value)}
              name="user"
              style={form.input}
              value={user}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={handleAddBill} style={form.button}>
            <Text style={form.buttonText}>Add User</Text>
        </TouchableOpacity>
          </View>

          <View style={form.field}>
            <TouchableOpacity onPress={handleSubmit} style={form.button}>
              <Text style={form.buttonText}>Add Bill Trip</Text>
            </TouchableOpacity>
          </View>

        <View>
          {
            tripItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTrip(index)}>
                  <Trip text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default Calculate;
