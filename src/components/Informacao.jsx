import React from 'react';
import { View, Text} from 'react-native';
import {css} from "./css";

// Esse componente deve ser um componente baseado em função que receba 3 informações
// via props: titulo, autor e conteúdo. O componente deve renderizar à informação de
// maneira organizada.

export default function Informacao(props) {
  return (
    // {/* BEM VINDO */}
    <View style={css.ViewInformacao}>
      <Text style={css.titulo}>{props.titulo}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
          <View style={{flex: 1, height: 2, backgroundColor: '#9F9FFF'}} />
              <Text style={css.autor}> {props.autor} </Text>
          <View style={{flex: 1, height: 2, backgroundColor: '#9F9FFF',}} />
        </View>
      <Text style={css.conteudo}>{props.conteudo}</Text>
    </View>
    
  )
}

