import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',

    },
    header: {
      width: '100%',
      height: '18%',
      backgroundColor: '#90f',
      justifyContent: 'center',
      marginBottom: 50,
    },
    infoHeader:{
      position: 'absolute',
      right: 0,
      top: '40%',
      padding: '5%',
    },
    textHeader:{
      fontSize: 25,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#eee',
    },
    txtStatus:{
      fontSize: 20,
      fontStyle:'italic',
      color: '#eee',
      marginLeft: 15
    },
    areaImg: {
      position: 'absolute',
      top: '7%',
      left: '5%',
    },
    imgPerfil: {
      width:150,
      height:150,
      borderRadius: 150, 
      borderWidth: 5, 
      borderColor: "#90f",
    },
    myName: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#eee',
      marginTop: 25,
    },
    label:{
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#90f',
      marginTop: 15,
      marginBottom: 10
    },
    dados: {
      borderColor: '#90f',
      borderWidth: 2,
      borderRadius: 15,
      width: '80%',
      height: '7%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textPrincipal: {
      color: '#eee',
      fontSize: 18,
      textAlign: 'center',
    }
  })