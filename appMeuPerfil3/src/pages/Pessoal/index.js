import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
 
export default function Pessoal() {
 return (
   <View style={styles.container}>
    <Header />
    <Text style={styles.titlePage}>Dados Pessoais</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Idade</Text>
        <Text style={styles.text}>29 anos</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Ocupação</Text>
        <Text style={styles.text}>Estudante</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Localização</Text>
        <Text style={styles.text}>Guarujá - São Paulo</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Objetivos Pessoais</Text>
        <Text style={styles.textList}>- Morar Sozinho</Text>
        <Text style={styles.textList}>- Morar em outra cidade ou pais</Text>
        <Text style={styles.textList}>- Fazer um curso de DJ</Text>
        <Text style={styles.textList}>- Ter uma vida boa e ajuda quem eu posso</Text>
      </View>

    </View>     
   </View>
  );
}
