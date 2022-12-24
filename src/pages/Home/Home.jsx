import React, { useState } from 'react';
import { breakfast, dinner, lunch } from '../../../public/food';
import Food from '../../components/Food';
import Header from '../../components/Header';

const Home = () => {
    const [foods, setFood] = useState(breakfast);
    const handleFoodItem = (foodType)=>{
        setFood(foodType)
    }
    
    return (
        <div>
            <Header/>
            <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-16'>
                <div className='text-center space-x-8 text-lg'>
                    <span className='cursor-pointer' onClick={()=> handleFoodItem(breakfast)}>Breakfast</span>
                    <span className='cursor-pointer' onClick={()=> handleFoodItem(lunch)}>Lunch</span>
                    <span className='cursor-pointer' onClick={()=> handleFoodItem(dinner)}>Dinner</span>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {foods.map((food, index) => <Food key={index} food={food}/>)}
            </div>
            </section>
        </div>
    );
};

export default Home;