import React, { useState } from "react";
import axios from "axios";
import services from "../services/loginservice"; 

// UI elements
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

// Custom styles
import { basic, form, colors } from "../components/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  //validation of the email. I didn´t add the specific email like google.com or hotmail.com because i wanted the app works first, maybe in the future
  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  //validation the password allow only numbers
  const validatePassword = password => {
    let re = /[0-9]+/;
    return re.test(password);
  };

  //here I´m putting when you submit the lines in case if all the validations are corrects are going to the screen HOME
  /*const handleSubmit = () => {
    if (email === "" || password === "") {
      setMessage("Fill in all fields");
    } else if (!validateEmail(email)) {
      setMessage("Only valid email addresses are accepted");
    } else if (password.length <= 10) {
      setMessage("Password should have more than 10 characters");
    } else if (!validatePassword(password)) {
      setMessage("Password should include numbers");
    } else {
      setMessage("");
      setPassword("");
      setEmail("");
      navigation.navigate("Home");
    }
  };*/

  //here I´m putting when you submit the lines in case if all the validations are corrects are going to the screen HOME
  const handleSubmit = () => {
    axios.post("http://localhost:8080" + "/Login", {
    method: "POST",
    Headers: {"Content-Type": "application/json"},
  })
  .then((Response) => {
    console.log('response -'.Response);
  }).catch(err =>{
    console.log('error -'.err );
  })
  navigation.navigate("Home");
}
  //start with the screen with the form asking you about the email and password
  //i add as well the Terms & Conditions because maybe in the future I saw this everywhere the terms
  //I add as well and I know is not correct to put in this section about me but I wanted to put there
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[basic.container]}>
        <Text style={[form.heading, form.field]}>Log In</Text>
        <Text style={form.message}>{message}</Text>
        <View style={form.field}>
          <Text style={form.label}>Email</Text>
          <TextInput
            onChangeText={value => setEmail(value)}
            name="email"
            style={form.input}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <View style={form.field}>
          <Text style={form.label}>Password</Text>
          <TextInput
            onChangeText={value => setPassword(value)}
            name="password"
            style={form.input}
            secureTextEntry={!showPassword}
            value={password}
            autoCapitalize="none"
          />
          <Ionicons
            onPress={() => setShowPassword(!showPassword)}
            style={form.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>

        <View style={form.field}>
          <CheckBox
            onClick={() => setTermsCheck(!termsCheck)}
            isChecked={termsCheck}
            checkBoxColor={colors.secondary}
            checkedCheckBoxColor={colors.tertiary}
            rightText={"Terms & Conditions"}
            rightTextStyle={form.terms}
          />
        </View>

        <View style={form.field}>
          {termsCheck && (
            <TouchableOpacity onPress={handleSubmit} style={form.button}>
              <Text style={form.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
          {!termsCheck && (
            <TouchableOpacity
              disabled
              onPress={handleSubmit}
              style={[form.button, form.disabled]}
            >
              <Text style={form.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={[form.field, form.field1]}>
          <Text style={form.text}>You don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>About Me</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
