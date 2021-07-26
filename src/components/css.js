import { StyleSheet, Dimensions } from 'react-native';

export const css = StyleSheet.create({
  // LINHA HORIZONTAL
  hr: {
    flex: 1,
    backgroundColor: '#CFCFFF',
    height: 2,
    alignSelf: 'center',
    width: '50%',
    margin: 30,
  },
  
  // COMPONENE IMC
  Img: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width /2,
  },
  Titulo:{
    fontSize: 26,
    color: "#c2c2c2",
  },
  ViewImc1: {
    flex: 1,
    width: Dimensions.get("screen").width,
    marginTop: 30,
  },
  ViewImc2: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("screen").width - 200,
    alignItems: "center",
    backgroundColor: "#CFCFFF",
  },
  ViewImc3: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("screen").width - 160,
    backgroundColor: "#CFCFFF",
    alignItems: "center",
    marginBottom: 30,
  },
  TituloIMC: {
    fontSize: 42,
    fontFamily: "sans-serif-thin",
    color: "#aeaeee",
    textAlign: 'center',
  },
  
  TextoIMCT1: {
    fontSize: 22,
    color: "#6F6FFF",
    fontFamily: "sans-serif-thin",
    textAlign: 'center',
  },
  TextoIMCT2: {
    fontSize: 22,
    color: "#8F8FFF",
    fontFamily: "sans-serif-light",
    textAlign: 'center',
  },
  
  TextInput: {
    width: Dimensions.get("window").width - 50,
    margin: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#AFAFFF",
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: "sans-serif-condensed",
    color: "#8F8FFF",
  },
  btnCalc: {
    width: Dimensions.get("window").width - 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    backgroundColor: "#AFAFFF",
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    fontFamily: "sans-serif-condensed",
    color: "#FFFFFF",
  },

  // COMPONENTE HEADER
  ViewHeader: {
    width: Dimensions.get("window").width,
    backgroundColor: "#9F9FFF",
  },
  tituloHeader: {
    fontSize: 52,
    color: "#FFFFFF",
    fontFamily: "sans-serif-thin",
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 125,
  },

  // COMPONENTE INFORMACAO
  ViewInformacao: {
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'flex-start',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    padding:10,
  },
  // COMPONENTE INFORMACAO
  titulo: {
    fontSize: 42,
    color: "#aeaeee",
    fontFamily: "sans-serif-thin",
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  autor: {
    fontSize: 32,
    color: "#9F9FFF",
    fontFamily: "sans-serif-light",
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  conteudo: {
    fontSize: 21,
    color: "#9F9FFF",
    fontFamily: "sans-serif",
    textAlign: 'justify',
    textAlignVertical: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  // COMPONENTE FOOTER
  ViewFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get("window").width,
    backgroundColor: "#9F9FFF",
    marginTop: 50,
    padding: 5,
    height: 50,
  },

  tituloFooter: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "sans-serif-condensed",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})


