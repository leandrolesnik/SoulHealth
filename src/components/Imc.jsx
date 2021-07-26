import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import {css} from "./css";


export default function Imc() {
 

// Esse componente deve ter um formulário que possua campos para peso e altura. Ao
// clicar no botão, Realizar o calculo do Imc e mostrar seu resultado com base nas
// seguintes situações:

// Abaixo do peso :
// 17 a 18,4 kg/m2
// Fadiga, stress, ansiedade

// Peso normal    
// 18,5 a 24,9 kg/m2           
// Menor risco de doenças cardíacas e vasculares

// Acima do peso
// 25 a 29,9 kg/m2
// Fadiga, má circulação, varizes
const[cor, setCor] = useState({bgcor: "#CFCFFF"});
const[imc, setImc] = useState(
  {
    P: 0,
    A: 0, 
    R: "",
    T1: "",
    T2: "",
    // bgcor: "",
  }
);

const handleInputChange = (nomeCampo, valorCampo) => {
  setImc({
      ...imc, [nomeCampo]:valorCampo,
  })
};

const calcImc = () => {
  const condicao = Number((imc.P / (imc.A * imc.A))).toFixed(1);
  if(condicao < 17){
    setImc({
      ...imc, R: condicao, T1: "Desnutrição", T2: `Anorexia, \n fraquesa, ansiedade \n`
    });
    setCor({bgcor: "#FFAFAF"});
  } else if(condicao >= 17 && condicao <= 18.4){
    setImc({
      ...imc, R: condicao, T1: "Abaixo do peso", T2: `Fadiga, \n stress, ansiedade \n`
    });
    setCor({bgcor: "#FFFF6F"});

  } else if(condicao >= 18.5 && condicao <= 24.9){
    setImc({
      ...imc, R: condicao, T1: "Peso normal", T2: `Menor risco de \n doenças cardíacas e vasculares \n`
    });
    setCor({bgcor: "#AFAFFF"});

  } else if(condicao >= 25  && condicao <= 29.9){
    setImc({
      ...imc, R: condicao, T1: "Acima do peso", T2: `Fadiga, \n má circulação, varizes \n`
    });
    setCor({bgcor: "#FFAFAF"});
  } else if(condicao >30){
    setImc({
      ...imc, R: condicao, T1: "Obesidade", T2: `Fadiga, \n hipertensão, diabetes \n`
    });
    setCor({bgcor: "#FFAFAF"});
  }
};

  return (
    <View style={css.ViewImc1}>
      <Text style={css.TituloIMC}>Calcule o seu IMC</Text>
      <View style={css.ViewImc2}>
        <Text style={{
          backgroundColor: cor.bgcor,
          width: "100%",
          fontSize: 46,
          color: "#FFF",
          fontFamily: "sans-serif-condensed",
          textAlign: 'center',
        }}>{imc.R}</Text>
        <Text style={css.TextoIMCT1}>{imc.T1}</Text>
        <Text style={css.TextoIMCT2}>{imc.T2}</Text>
      </View>
      <View style={css.ViewImc3}>
        <TextInput style={css.TextInput} onChangeText={
          (valorCampo) => handleInputChange("P", Number(valorCampo))
          } keyboardType="numeric" placeholder="Peso" placeholderTextColor="#FFF" />
        <TextInput style={css.TextInput} onChangeText={
          (valorCampo) => handleInputChange("A", Number(valorCampo))
          } keyboardType="numeric" placeholder="Altura" placeholderTextColor="#FFF" />
        <TouchableOpacity>
          <Text style={css.btnCalc} onPress={calcImc}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
