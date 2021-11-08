import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    }, 
    titlePage:{
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        color: '#91a',
        position: 'absolute',
        right: 60,
        top: 115,
    },
    conteudo:{
        backgroundColor: '#ddd',
        width: '100%',
        height: '79.4%',
        position: 'absolute',
        bottom: 0,
        padding: 10,
    },
    txtLbl:{
        borderBottomWidth: 3,
        borderBottomColor: '#90a',
        padding: 10,
        marginBottom: 15,
    },
    label:{
        fontSize: 25,
        color: '#91a',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    text:{
        fontSize: 20,
    },
    textList:{
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 5,
    }
    
})