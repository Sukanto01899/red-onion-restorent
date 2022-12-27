import React from 'react';
import Cart from '../../components/Cart';
import useCart from '../../Hooks/useCart';

const Cartpage = () => {
    const [carts, setCarts] = useCart();
    console.log('cart')
    return (
        <section>
            <div>
                {carts.map(cart => <Cart/>)}
            </div>
            <div></div>
        </section>
    );
};

export default Cartpage;