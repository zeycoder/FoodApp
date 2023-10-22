import React from 'react';
import { FlatList } from 'react-native';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error'
import useFetch from '../../hooks/useFetch/useFetch';
import CategoriesCard from '../../components/Card/CategoriesCard/CategoriesCard';

const Categories = ({navigation}) =>{
    const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}${'categories.php'}`;
    const {datas, loading, error} = useFetch(apiUrl)
    if(loading){return <Loading />}
    if(error){return <Error />}

    const handleSelect = (categories)=>{navigation.navigate('Meals',{categories: categories})}
    const handleCategories = ({item})=> <CategoriesCard food={item} onSelect={()=>handleSelect(item.strCategory)} />

    return <FlatList data={datas.data.categories} renderItem={handleCategories} />
}
export default Categories;