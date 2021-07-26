import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import {css} from "./css";

export default function Footer() {
  return (
    <View style={css.ViewFooter}>
      <Text style={css.tituloFooter}>©Leandro Lesnik - SoulCode - BCW3</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/leandrolesnik/')}>
        <Image source={require("../../assets/instagram.png")}/>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => Linking.openURL('https://www.linkedin.com/in/leandro-lesnik/')}>
        <Image source={require("../../assets/linkedin.png")}/>
      </TouchableOpacity>
    </View>
  )
}