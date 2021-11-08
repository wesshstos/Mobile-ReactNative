import React  from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, StatusBar  } from 'react-native';
import {styles} from './style'

export default function App(){
  let img = 'https://lh3.googleusercontent.com/R5DhJQbRnQBInLX_b9Wxagjzm_qKvfpMYEoR6kgrlj39mAbly50O-iLp3RBnxxSPxAgWjqgkHrfHug3YGKLeqqhY8jtQO7fJJnVR7wBzUUbEZM6w-VXsm6_REsKPSfj98HBkXpSF1fRqCdf9iSVfzd16klcta2mhL0Q8GnmHFmvTqdT4OjNllZ33FuKnvBUUTL7HMsyX8UDYOzf6MrMAat8qNz-wD6M5ZyOBvOZr0-TLlZElZMow6E26Y7s6Elr0r7yvpNSIeUL11V528AM7HkG9zGkn2jk2RRex5VwI8wSyKmDzNT3tpuJzNmHfJc1YgSKJSZgeco3-IxZxYSGlgj7mUd9hfyqbodBNaxB0cKPt7uZPHezIdkeobEH5RaqETmlo_cUXNHm-Z178O5Pi-CEU4RpSm3BQjzOthRbwbzBZd7qvccujzFkwUJQyEV_l3KXl461QLS6BFp2xuNxQ4vjNbBp84wKMDlWvTQa7xja2mFo5Vjqt7uVcFzfeIoFPpWf7hho2yROuLpwfdfZrmHlzcun5-kTmRyIlVWkPDsWZXMzGzxzEIuc9gZAb8C8vRFKnomsxmlj5Zt8CFd8j-bOBPy4BkNwTa8RepefMFnE6yh9wBArU2ygt1j7J__HAgu08Q7Sd7tNO_VWv0-vmgE3PDL2dXBdbXwHTzAplGPuq_m3JvVwpI7OLZoCOs5iqC-s8psR07BkkWgttPKM8aiTD0g=s637-no?authuser=0'  
  return(

    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <View style={styles.infoHeader}>
        <Text style={styles.textHeader}>Weslley H. Santos</Text>
        <Text style={styles.txtStatus}>Cursando ADS</Text>
      </View>
    </View>
     
    <View style={styles.areaImg}>
      <Image
      style={styles.imgPerfil}
      source={{ uri: img }}/>
    </View>
    
    <Text style={styles.label}>Dados Pessoais</Text>
    <View style={styles.dados}>
      <Text style={styles.textPrincipal}>
        29 anos - Estudante - Guarujá-SP 
      </Text>
    </View>
    <Text style={styles.label}>Formação</Text>
    <View style={styles.dados}>
      <Text style={styles.textPrincipal}>
        Cursando Analise e Desenvolvimento de Sistemas - Universidade Paulista UNIP
      </Text>
    </View>
    <Text style={styles.label}>Experiência</Text>
    <View style={styles.dados}>
      <Text style={styles.textPrincipal}>
        Em busca da primeira vaga no ramo da tecnologia
      </Text>
    </View>
    <Text style={styles.label}>Projetos</Text>
    <View style={styles.dados}>
      <Text style={styles.textPrincipal}>
        Mobile-ReactNative, Web-NodeJs-ReactJS, Projeto-Pousada
      </Text>
    </View>
 </SafeAreaView>
  )
}
