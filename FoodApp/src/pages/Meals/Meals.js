import React from 'react';
import { FlatList, View } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MealsCard from '../../components/Card/MealsCard/MealsCard';

const Meals = ({route, navigation}) =>{
    const {categories} = route.params
    const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}filter.php?c=${categories}`;
    const {datas,loading,error} = useFetch(apiUrl);
   
    if(loading){return <Loading />}
    if(error){return <Error />}

    const handleSelect = (meal) => navigation.navigate('Detail',{meal:meal})
    const handleMeals = ({item}) => <MealsCard food={item} onSelect={()=>handleSelect(item)}/>

    return <FlatList data={datas.data.meals} renderItem={handleMeals}/>
}
export default Meals;