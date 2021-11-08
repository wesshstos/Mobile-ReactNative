import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 19,
        justifyContent: 'center',
        backgroundColor: '#91a',
        width: '100%',
        height: '14%',
    },
    contentHeader: {
        position: 'absolute',
        right: 35,
        bottom: 10,
    },
    textHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    legendHeader: {
        fontSize: 15,
        color: 'white',
        marginTop: 5,
        marginLeft: 15,
        fontStyle: 'italic',
    },
    areaImg: {
        position: 'relative',
        top: 50,
    },
    imgPerfil:{
        width: 115,
        height: 115,
        borderRadius: 100,
        borderWidth: 4, 
        borderColor: '#92a'
    }
})