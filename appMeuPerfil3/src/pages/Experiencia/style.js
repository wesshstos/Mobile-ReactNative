import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    }, 
    titlePage:{
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        color: '#91a',
        position: 'absolute',
        right: 25,
        top: 130,
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
        marginBottom: 8,
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
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 5,
    },
    legendSkill:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    skillProgress:{
        width: '100%',
        height: 10,
        borderRadius: 100,
        marginBottom: 10,

    }
})