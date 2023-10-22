import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({food, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: food.strCategoryThumb}} />
                <Text style={styles.text}> {food.strCategory} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;