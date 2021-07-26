import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import Imc from './Imc';
import Informacao from './Informacao';
import {css} from './css';
import Footer from './Footer';

export default function Content() {
  return (
    <ScrollView>
      <View>
        {/*  Passando na props textos de boas vindas ao app. */}
        <Informacao 
        titulo="Bem vindo ao SoulHealth" 
        autor={`Sua atitude \nreflete sua saúde`}
        conteudo={`Acompanhe nossos informativos e dicas diárias para melhorar a sua saúde e o seu bem estar, trazidas exclusivamente para você, aqui, em nosso aplicativo.`} />
      </View>
      
      {/* <View style={css.hr} /> */}

      {/* Mostrando alguma curiosidade pela props */}
      <View style={{backgroundColor: "#EFEFFF",}}>
        <Informacao 
        titulo={`Curiosidades \nsobre o corpo humano`}
        autor="Você sabia que:" 
        conteudo={`¤ Seu nariz pode detectar 1 trilhão de aromas diferentes. As mulheres têm melhor olfato do que os homens.\n\n¤ Os espirros normais excedem 24 km/h, enquanto a tosse marca de 50 a 60 km/h. \n\n¤ O corpo humano tem ferro suficiente para fazer um prego de 7 cm de comprimento.\n\n¤ Todo mundo tem o seu próprio cheiro, incluindo gêmeos idênticos. 
        `} />
      </View>

      {/* <View style={css.hr} /> */}
      {/* Apresentação do Imc – dados relacionados ao imc */}
      <View>
        <Informacao 
          titulo="IMC" 
          autor="O que é o IMC?" 
          conteudo="IMC é a sigla para Índice de Massa Corporal,que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado." />
      </View>

      <Image source={require('../../assets/fita.jpg')} style={css.Img}></Image>
      
      <Imc />
      {/* Dicas de exercícios físicos */}
      
      <View>
        <Informacao 
          titulo={`Dicas de \nexercícios físicos`}
          autor="Corrida estacionária" 
          conteudo="A corrida ou marcha estacionária é um exercício no qual
          você simula os movimentos como se estivesse correndo, mas sem sair do
          lugar. É uma excelente opção para trabalhar a parte cardiorrespiratória e
          manter o condicionamento físico em dia. Faça 4 séries de 40 segundos com
          intervalos de 20 segundos entre elas." />
          <Image source={require("../../assets/corrida.jpg")} style={{position:"absolute", top: 540, zIndex:1, alignSelf: "center",}} />
      </View>
      
      <View style={{marginTop: 40,}}>
        <Informacao style={{cfontSize: 0,}} autor={`Prancha \nabdominal no solo`}
          conteudo="O tronco, o quadril e as pernas não tocam o
          chão enquanto os antebraços estão apoiados no solo. O truque para ser eficaz
          é manter o alinhamento da coluna e não prender a respiração. Faça três séries
          de 30 segundos, no mínimo." />
          <Image source={require("../../assets/prancha.png")} style={{zIndex:1, alignSelf: "center",}} />
      </View>
      <Footer />
    </ScrollView>
  )
}