import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import DetailCard from '../../components/Card/DetailCard/DetailCard';

const Detail = ({route}) =>{
    const {meal} = route.params
    const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}lookup.php?i=${meal.idMeal}`;
    const {datas, loading, error} = useFetch(apiUrl);

    if(loading){return <Loading />}
    if(error){return <Error />}

    const mealDetails = datas.data.meals[0];

    return <DetailCard meal={meal} mealDetails={mealDetails} />
}
export default Detail;