import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './MealsCard.style';

const MealsCard = ({food, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: food.strMealThumb}} />
                <View style={styles.inner_container}>
                    <Text numberOfLines={1} style={styles.text}> {food.strMeal} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;