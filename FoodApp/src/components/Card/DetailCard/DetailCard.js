import React from 'react';
import { View, ScrollView, Text, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';
import styles from './DetailCard.style';

const DetailCard =({meal, mealDetails})=> {
    return(
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
            <View style={styles.inner_container} >
                <Text style={styles.title} >{mealDetails.strMeal}</Text>
                <Text style={styles.country} >{mealDetails.strArea}</Text>
                <View style={styles.line}/>
                <Text style={styles.desc} >{mealDetails.strInstructions}</Text>
                <Button title='Watch on Youtube' color='red' style={styles.btn} onPress={() => Linking.openURL(mealDetails.strYoutube)} />
            </View>
        </ScrollView>
    )
}
export default DetailCard;