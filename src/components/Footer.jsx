import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='md:col-span-2'>
                <img className='w-[120px]' src='https://i.ibb.co/tX9c4nJ/logo.png' alt="" />
            </div>
            <div className='flex flex-col space-y-3'>
                <a className='text-white' href="">About Online Food</a>
                <a className='text-white' href="">Read our blog</a>
                <a className='text-white' href="">Sign up to deliver</a>
                <a className='text-white' href="">Add your restorent</a>
            </div>
            <div className='flex flex-col space-y-3'>
                <a className='text-white' href="">Get help</a>
                <a className='text-white' href="">Read our blog</a>
                <a className='text-white' href="">Sign up to deliver</a>
                <a className='text-white' href="">Add your restorent</a>
            </div>
        </>
    );
};

export default Footer;