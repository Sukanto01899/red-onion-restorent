import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({food}) => {
    const {name, img, mealType, mealId} = food
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/${mealType}/${mealId}`)
    }
    return (
        <div onClick={handleNavigate} className='w-[350px] lg:w-full mx-auto flex flex-col items-center justify-center duration-200 hover:shadow-lg hover:border-2 py-6 rounded-md cursor-pointer'>
            <div className='w-[200px] h-[200px]'>
            <img className='w-full' src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Food;