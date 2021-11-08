import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
 
export default function App(){

  const [contador, setContador] = useState(0)

  function incrementar(){
    setContador(contador + 1)
  }

  function decrementar(){
    if (contador === 0) {
      contador
    } else {
      setContador(contador - 1)
    }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.titleText}> Contador de Clientes</Text>
      <TouchableOpacity 
      onPress={decrementar}
        style={styles.btn}>
        <Text style={styles.textBtn}>-</Text>
      </TouchableOpacity>

      <Text style={styles.textContador}>{contador}</Text>
      
      <TouchableOpacity 
      onPress={incrementar}
      style={styles.btn}>
        <Text style={styles.textBtn}>+</Text>
      </TouchableOpacity>  
    </View>
  );
}
