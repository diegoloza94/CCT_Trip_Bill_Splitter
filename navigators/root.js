import React from "react";

// Screens
import Login from "../screens/Login";
import Signup from '../screens/Signup';
import Calculate from "../screens/Calculate";
import About from "../screens/About";
import ListBills from "../screens/ListBills";
import Home from "../screens/Home";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom styles
import { colors } from "../components/styles";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "SPLIT BILL TRIP",
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: "transparent",
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOffset: {
                height: 0,
            },
            
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
              letterSpacing: 1,
              padding: 15,
              fontSize: 15,
          }
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Calculate" component={Calculate} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ListBills" component={ListBills} />
        <Stack.Screen options={{headerMode: 'none', headerShown: false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
