import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#eee',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        padding:3,
        margin:5
    },
    image:{
        width:75,
        height:75,
        resizeMode:'contain',
        marginLeft:10,

    },
    text:{
        fontSize:20,
        marginLeft:10,
        alignSelf:'center'
    }
})
export default styles;