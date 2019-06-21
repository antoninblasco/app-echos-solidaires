import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from "./src/pages/Login";
import Accueil from "./src/pages/Accueil";
import Signin from "./src/pages/Signin";
import Actualite from "./src/pages/Actualite";
import Panier from "./src/pages/Panier";


const AppNavigator = createStackNavigator({
    Login : {
      screen: Login
    },
    Accueil:{
        screen: Accueil
    },
    Inscription:{
        screen: Signin
    },
    Actualite:{
        screen: Actualite
    },
    Panier:{
        screen: Panier
    }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
