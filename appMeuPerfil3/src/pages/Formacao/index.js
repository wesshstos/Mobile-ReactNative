import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style'
import Header from '../../components/Header/header'
 
export default function Formacao() {
 return (
  <View style={styles.container}>
    <Header />
    <Text style={styles.titlePage}>Formação</Text>
    <View style={styles.conteudo}>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Curso</Text>
        <Text style={styles.text}>Técnologo em Análise e Desenvolvimento de Sistemas</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Instituição</Text>
        <Text style={styles.text}>Universidade Paulista - UNIP</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Localização</Text>
        <Text style={styles.text}>Campus II Rangel - Santos - São Paulo</Text>
      </View>

      <View style={styles.txtLbl}>
        <Text style={styles.label}>Cursos Extras</Text>
        <Text style={styles.textList}>- Curso Basico de HTML, CSS, JavaScript</Text>
        <Text style={styles.textList}>- Montagem e Manutenção de Computadores e Redes</Text>
        <Text style={styles.textList}>- Programação Básico Python</Text>
        <Text style={styles.textList}>- Web Design e Design Gráfico</Text>
      </View>

    </View>     
 </View>
  );
}
