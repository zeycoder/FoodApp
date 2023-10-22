import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee',
    },
    image:{
        width:'100%',
        height:300,

    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical:5
    },
    inner_container:{
        margin:5
    },
    title:{
        color:'#a52a2a',
        fontSize:25,
        fontWeight:'bold'
    },
    country:{
        color:'#a52a2a',
        fontSize:18,
        fontWeight:'bold',
    },
    desc:{
        marginBottom:10
    }
})
export default styles;