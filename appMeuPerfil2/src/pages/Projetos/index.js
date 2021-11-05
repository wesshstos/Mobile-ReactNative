import React from 'react';
import { View, Text,TouchableOpacity, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Projetos(){
    
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-left' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Projetos</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.titleContent}>Projetos em Andamentos</Text>
                <Text style={styles.txtContent}>    -Projeto Pousada</Text>
                <Text style={styles.txtContent}> -Desenvolvimento Web (ReactJS + NodeJS)</Text>
                <Text style={styles.txtContent}>   -Desenvolvimento Mobile (React Native)</Text>
            </View>

            <View style={styles.areaBtns}>
                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Home')  }>
                    <FontAwesome name='home' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={()=> navigation.navigate('Pessoal')}>
                    <FontAwesome name='user' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Formação') }>
                     <FontAwesome name='graduation-cap' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Experiência') }>
                    <FontAwesome name='briefcase' size={20} color='#eee' />
                </Pressable>
            </View>
            
        </View>
    );
}