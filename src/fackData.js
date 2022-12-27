export const setFoodCart = (id)=>{
    console.log(';ok')
    const foodCart = getFoodCart();
    if(foodCart[id]){
        foodCart[id] += 1;
    }else{
        foodCart[id] =1
    }
    localStorage.setItem('foodCart', JSON.stringify(foodCart))
}

export const getFoodCart = ()=>{
    let foodCart;
    const localCart = localStorage.getItem('foodCart');
    if(localCart){
        foodCart =  JSON.parse(localCart);
        return foodCart
    }
    else{
        return foodCart = {}
    }
}
