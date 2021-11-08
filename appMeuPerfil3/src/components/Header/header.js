import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './style'
 
export default function Header() {

    let  img = 'https://scontent.fgru11-1.fna.fbcdn.net/v/t1.6435-9/90055585_3261635877394945_6581446050022686720_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHAfgaFXy0gR9mkw7R7kEVBwPLguu7M5IrA8uC67szkioh6n1VDu0sgBqB8gcXzeXrpxu9mh1kqO52VKErDHaFi&_nc_ohc=96KV_wY5vmAAX9sg7Ie&_nc_ht=scontent.fgru11-1.fna&oh=3ace92e07c75180719241fe4fe1db4f7&oe=61ADAE73'

 return (
   <View style={styles.container}>
       <View style={styles.contentHeader}>
        <Text style={styles.textHeader}>Weslley H Santos</Text>
        <Text style={styles.legendHeader}>Escolher o seu tempo é ganhar tempo.</Text>
       </View>
       <View style={styles.areaImg}>
           <Image 
           style={styles.imgPerfil}
           source={{uri: img}} />
       </View>
   </View>
  );
}