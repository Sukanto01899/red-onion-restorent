import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import useCart from '../../Hooks/useCart';

const Cartpage = () => {
    const [carts, setCarts] = useCart();
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        let cartTotal = 0;
        for(let cart of carts){
            const quantityTotal = cart.price * cart.quantity
            cartTotal +=quantityTotal
        }
        setTotal(cartTotal)
    }, [carts])
    return (
        <section className='w-[80%] mx-auto flex flex-col md:flex-row justify-between'>
            <div className='w-full'>
                {carts.map(cart => <Cart cart={cart}/>)}
            </div>
            <div className='w-full'>
                <h4>From restorent</h4>
                <div>
                    <h3>Subtotal + {carts.length} items</h3>
                    <h3>Tax {total * 0.02}</h3>
                    <h3>Delivery fee {total * 0.03}</h3>
                    <h3>Total = {total}</h3>
                    <button>Continue</button>
                </div>
            </div>
        </section>
    );
};

export default Cartpage;