import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:15,
    },
    image:{
        width:'100%',
        height:Dimensions.get('window').height/4,
        borderRadius:10,
    },
    inner_container:{
        top:-40,
    },
    text:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        position:'absolute',
        width:'100%',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        textAlign: 'right',
    }
})
export default styles;