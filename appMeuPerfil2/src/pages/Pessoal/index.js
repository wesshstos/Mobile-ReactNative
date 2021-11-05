import React from 'react';
import { View, Text,TouchableOpacity, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Pessoal(){
    
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.goBack() }>
                    <FontAwesome name='arrow-left' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Dados Pessoais</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.txtContent}>Idade: 29 anos</Text>
                <Text style={styles.txtContent}>Ocupação: Estudante</Text>
                <Text style={styles.txtContent}>Localização: Guarujá-SP</Text>
                
                <View style={styles.areaSocial}>

                    <TouchableOpacity style={styles.pressSocial}>
                        <Image 
                        style={styles.imgSocial}
                        source={require('../../Img/github.png')}/>
                        <Text style={styles.txtSocial}>wesshstos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.pressSocial}>
                        <Image 
                        style={styles.imgSocial}
                        source={require('../../Img/instagram.png')}/>
                        <Text style={styles.txtSocial}> @leloniino</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.pressSocial}>
                        <Image 
                        style={styles.imgSocial}
                        source={require('../../Img/linkedin.png')}/>
                        <Text style={styles.txtSocial}> weslleyhsantos</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.pressSocial}>
                        <Image 
                        style={styles.imgSocial}
                        source={require('../../Img/twitter.png')}/>
                        <Text style={styles.txtSocial}> @leloninoo</Text>
                    </TouchableOpacity>


                </View>

            </View>

            <View style={styles.areaBtns}>
                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Home')  }>
                    <FontAwesome name='home' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={()=> navigation.navigate('Formação')}>
                    <FontAwesome name='graduation-cap' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Experiência') }>
                     <FontAwesome name='briefcase' size={20} color='#eee' />
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Projetos') }>
                    <FontAwesome name='tasks' size={20} color='#eee' />
                </Pressable>
            </View>
            
        </View>
    );
}