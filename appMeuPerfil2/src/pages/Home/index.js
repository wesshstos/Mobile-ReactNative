import React from 'react';
import { View, Text, Button, Image, TouchableOpacity,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles'

export default function Home(){
    
    const navigation = useNavigation();

    let img = 'https://lh3.googleusercontent.com/wqBAL12FsznVwRrcCYyeXxy4w2CN3_KqXcxM3g5DsiUGtD7XI-xkBeXi44_TN44Xg5F15BAFehzvAOC8jeyY4kK8ZhKA0WBUxGb-bGKTWEvfQ7KSPWAg9G8a7iPiSf44Bu53AgFy9VRGEZ8XwyD2lsWBWHiNw1KKMWGY8-OgCW9-cc9q4sorg4UsMwEZZI-7GkPwchRxD2MRFj7b38JjTxG4FC3q5JXj6r_GgVA8AJm-uh-SyDUm_z7XrP8LJ9vlEwxMQO-5Hu7pbJ9EET10SJ5tBd25AGMe6f2xZWNdCtd0rfTp5SCMXtA7vBUktrg5EpXkd1jNFkPVHhoCy3oB-KncPuATNGNZlylpS0BqosINLgaVcJrVIYNRgOkrDgiyOf9H2ZNDYT3gLTf_l6_E2gIuS8itmPWMUP4XmA4Sg2nSskTseN6eLpODmQIo5sWOoJH36n90ujiNd4Kkh2MBJC4OiDCsgNt1DjP8EQhW5agByo0FKWNOdZfgqnGVq1x-RaaRv1mZKRVjyrRhZXfi0FBJkJj8XVUOd1wGTDqjWaTDG5EZyTgjnMg2kA-gzt9AmwSTg0DJbPL5XAq6KdDnSOLKh93rjQLQ0GwFvMDXt7D2s3KoqPriqDh-WyypoGsNxg9F-Y5GuXY3nxAu9EoN_cM4xs0ONcPKZBRMLQsk3QvU4UfoIY5Zx6hkpX8mRgEyycPfz-jWD0utaU0CJFJy_80Lyg=s637-no?authuser=0'

    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnMenu}
                onPress={ () => navigation.toggleDrawer() }>
                    <FontAwesome name='bars' size={35} color='#eee' />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Meu Perfil</Text>
            </View>

            <View style={styles.areaImg}>
                <Image 
                style={styles.imgPerfil}
                source={{uri: img}}
                />
                <Text style={styles.txtProfile}>Weslley Henrique dos Santos</Text>
            </View>
            <View style={styles.areaBtn}>
                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Pessoal') }>
                    <FontAwesome name='user' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Dados Pessoais</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={()=> navigation.navigate('Formação')}>
                    <FontAwesome name='graduation-cap' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Formação</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Experiência') }>
                     <FontAwesome name='briefcase' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Experiência</Text>
                </Pressable>

                <Pressable
                style={styles.btnAcao}
                onPress={ () => navigation.navigate('Projetos') }>
                    <FontAwesome name='tasks' size={20} color='#eee' />
                    <Text style={styles.txtBtn}>Projetos</Text>
                </Pressable>
            </View>

      </View>
    );
}
