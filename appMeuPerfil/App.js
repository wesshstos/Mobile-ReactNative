import React  from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, StatusBar  } from 'react-native';
import {styles} from './style'

export default function App(){
  let img = 'https://lh3.googleusercontent.com/bjWv9e1_npAw29nQ-GHUFk-mEqYoLi5gJtKYe68qtP9jh61kBwym8T4AZft91u4Y7DhGc2ElUtMvukUf4jlQTd2ZMwR2CKMMZH6InUoxXwriqKw14GFC77DUQl3_h870_sWGn-QboH5QPJIMA9Gqo9tbD3R1kyiiqbhT7rFXcM0aNZ66KMt_yn076ftxfZH0OmRhhH2Uo5rI9cgVJ41e3mJVVcgWeQ4b5rvvFYt0MVNcnJZgkFmtkYr07zdE3WuccMTSEwErtzQtArZX0iLppgoU4N-bi2GSZi9eWpDZB1oEDVg5zRQZIWTX7qU77Fy5Y0_DMJQHEikJguPeo3iqS-alLJL5_fXNbivFMUMuIaooLJdT3u49eGQgM9T2Uzcl0LazWZiF2chnRMbLC80vz4POrUBlRvwchAwkPw7is_3o4wAGDwMybmALDBpli1ARNTJ_8-jw6I7Q8zFJgflUq27gzKLwpAEnMeYgjbiF0ooO_9D7CjUX5Gp8TgSrXUiBbQnU_5d-2IObhx2qFp68IamcEHB9bzDL25tY-8hwV7DmaXSTxwd_7S4AEZgynsrBqXMtyKs7OryFUsfriTWepUUm2u0VfqTJHisfyRzf4Ek_HqEOQLPiIeQ9sR8mzagTnl_ux3k2_y5LDkbBYmWPiqn0idCz9plKyHI4FT5ItNOTSB-gh0zvqAoKG35Uqijba21FTribuDd7Mv_gSrHbZbGpKQ=s637-no?authuser=0'  
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
