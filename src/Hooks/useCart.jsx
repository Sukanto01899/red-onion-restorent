import { useEffect, useState } from 'react';
import { breakfast } from '../../public/food';
import { getFoodCart } from '../fackData';

const useCart = () => {
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        const foodCart = getFoodCart()
        const allCart = [];
        for(let mealId in foodCart){
            const getFood = breakfast.find(food => food.mealId === +mealId  )
            if(getFood){
                getFood['quantity'] = foodCart[mealId]
                allCart.push(getFood)
            }
        }
        setCarts(allCart)
    }, [])
    
    return [carts, setCarts]
};

export default useCart;