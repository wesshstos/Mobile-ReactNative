import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#888',
    },
    header:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: '100%',
        height: '12%',
        backgroundColor: '#90f',
        marginBottom: 50,
    },

    btnMenu:{
        position: 'absolute',
        left: '10%',
        bottom: '25%',

    },
    txtHeader:{
        color: '#eee',
        fontSize: 30,
        position: 'absolute',
        top: '46%',
        left: '35%',
    },
    content:{
        borderWidth: 4,
        borderColor: '#90a',
        width: '90%',
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: 'rgba(250, 255, 255, 0.5)',
        padding: '5%',
    },
    txtContent:{
        fontSize: 20,
    },
    areaBtns:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btnAcao:{
        width: 50,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#90a",
        marginBottom: 25,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#92f',
        padding: 10,
    },
})