import React, { useState } from 'react';
import { breakfast, dinner, lunch } from '../../../public/food';
import Food from '../../components/Food';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ReviewSlider from '../../components/ReviewSlider';

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
            {/* Review Slider */}
            <section className='mx-auto mt-10 w-[80%]'>
                <ReviewSlider/>
            </section>
            <footer className='bg-[black] pb-8'>
            <div className=' grid grid-cols-1 md:grid-cols-4 py-16 mt-8 w-[80%] mx-auto space-y-8 md:space-y-0'>
                <Footer/>
            </div>
            <div className='flex justify-between text-white text-sm w-[80%] mx-auto'>
                <p className='text-[gray]'>Copyright @ 2022</p>
                <div className='space-x-4'>
                    <a href="">Privacy Policy.</a>
                    <a href="">Term of use</a>
                    <a href="">Pricing</a>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Home;