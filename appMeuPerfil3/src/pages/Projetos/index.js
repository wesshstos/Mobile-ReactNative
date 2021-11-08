import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
 
export default function Pessoal() {
 return (
   <View style={styles.container}>
    <Header />
    <Text style={styles.titlePage}>Projetos</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Projeto Pousada</Text>
        <Text style={styles.text}>
        Trabalho de conclusão de curso da faculdade.
        O projeto consiste em fazer 3 sistemas para
        o processo diario da pousada </Text>

        <Text style={styles.textList}>- FrontEnd Web (ReactJs) </Text>
        <Text style={styles.textList}>- FrontEnd Desktop (ElectronJS) </Text>
        <Text style={styles.textList}>- FrontEnd Mobile (React Native) </Text>
        <Text style={styles.textList}>- BackEnd (NodeJs + TypeScript)</Text>
        <Text style={styles.textList}>- Banco de Dados (Postgres ) </Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Web-ReactJS-NodeJS</Text>
        <Text style={styles.text}>Trabalhos acadêmico simples para compor a nota </Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Mobile-ReactNative</Text>
        <Text style={styles.text}>Trabalhos acadêmico simples para compor a nota </Text>
      </View>

    </View>   

   </View>
  );
}
