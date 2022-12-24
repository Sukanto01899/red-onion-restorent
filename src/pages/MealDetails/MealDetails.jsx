import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { breakfast, dinner, lunch } from '../../../public/food';

const MealDetails = () => {
    const [foodTime, setFoodTime] = useState([])
    const [food, setFood] = useState({})
    const {mealTime, mealName} = useParams()
    useEffect(()=>{
        if(mealTime === 'breakfast'){
            setFoodTime(breakfast)
        }else if(mealTime === 'dinner'){
            setFoodTime(dinner)
        }else{
            setFoodTime(lunch)
        }

        const getFood  = foodTime.find(fo => fo.mealId + '' === mealName)
        if(getFood){
            setFood(getFood)
        }
    }, [foodTime])
    
    return (
        <div className='100% md:w-[90%] lg:w-[60%] mt-6 mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
                <div>
                    <h1 className='text-4xl mb-6'>{food.name}</h1>
                    <h2>{food.title}</h2>
                    <h3 className='my-4 text-xl'>Price : ${food.price}</h3>
                    <div className='flex items-center border-2 w-36 rounded-3xl mb-4'>
                        <div className='px-3 py-1 text-lg cursor-pointer'>+</div>
                        <input className='w-20 h-8 text-center outline-none' type="text" value={'1'}/>
                        <div className='px-3 py-1 text-lg cursor-pointer text-red-600 font-semibold'>-</div>
                    </div>
                    <button className='bg-[red] text-white px-8 py-2 rounded-2xl'>Add</button>
                </div>
                <div className='w-[500px] h-[500px]'><img className='w-full' src={food.img} alt="" /></div>
            </div>
        </div>
    );
};

export default MealDetails;