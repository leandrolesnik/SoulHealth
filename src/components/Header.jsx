import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import {css} from "./css";

export default function Header() {
  return (
    <View style={css.ViewHeader}>
      <StatusBar style="auto" />
      <Text style={css.tituloHeader}>SoulHealth</Text>
    </View>
  )
}