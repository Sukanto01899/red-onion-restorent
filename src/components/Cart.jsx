import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className='flex justify-between bg-gray-100 mb-4 py-2 px-3 rounded-lg'>
            <div className='flex '>
            <img className='w-[60px] h-[60px]' src={cart.img} alt="" />
            <div className='ml-5'>
                <h5 className='text-sm font-normal'>{cart.name}</h5>
                <h4 className='text-[red] font-semibold'>{cart.price}</h4>
                <h6 className='text-[12px]'>Delivery Home</h6>
            </div>
            </div>
            <div className='flex items-center'>
                <button className='px-2'>+</button>
                <div className='w-12 h-5 flex items-center justify-center py-1 bg-slate-400'>{cart.quantity}</div>
                <button className='px-2'>-</button>
            </div>
        </div>
    );
};

export default Cart;