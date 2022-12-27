import { useEffect, useState } from 'react';
import { getFoodCart } from '../fackData';

const useCart = () => {
    const foodCart = getFoodCart()
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        const allCart = [];
        for(let mealId in foodCart){
            const getFood = carts.filter(cart => cart.mealId = mealId)
            console.log(getFood)
        }
    }, [])
    
    return [carts, setCarts]
};

export default useCart;