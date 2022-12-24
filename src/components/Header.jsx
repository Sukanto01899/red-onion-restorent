import React from 'react';
import banner from '../../public/images/bannerbackground.png';

const Header = () => {
    return (
        <>
            <header style={{backgroundImage: `url("${banner}")`, backgroundRepeat: 'no-repeat'}} className="bg-cover bg-center h-[60vh] flex justify-center items-center">
               <div className=''>
                <h1 className='text-center text-2xl md:text-3xl uppercase'>Best food waiting for your belly</h1>
                <div className='relative mt-4 w-[80%] mx-auto'>
                    <input className='w-full h-10 text-xl py-3 px-5 outline-none rounded-[15px]' type="text" name="" placeholder='Search here...'/>
                    <button className='absolute leading-10 bg-red-600 text-white text-md px-3 rounded-[15px] right-0 border-none outline-none uppercase hover:bg-red-400'>search</button>
                </div>
               </div>
            </header>
        </>
    );
};

export default Header;