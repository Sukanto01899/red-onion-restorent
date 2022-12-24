import React from 'react';

const Food = ({name, image}) => {
    return (
        <div className='w-[350px] lg:w-full mx-auto flex flex-col items-center justify-center duration-200 hover:shadow-lg hover:border-2 py-6 rounded-md cursor-pointer'>
            <div className='w-[200px] h-[200px]'>
            <img className='w-full' src={image} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Food;