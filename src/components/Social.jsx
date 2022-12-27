import React from 'react';

const Social = () => {
    return (
        <div>
            <div className='flex justify-center py-1 items-center bg-white w-[300px] border-2 mb-3 cursor-pointer'>
                <img className='w-[40px] h-[40px] mr-3' src="https://i.ibb.co/CKzXWPk/GOOG-0ed88f7c.png" alt="" />
                <h5>Google</h5>
            </div>
            <div className='flex items-center justify-center bg-white w-[300px] py-1 border-2 cursor-pointer'>
                <img className='w-[40px] h-[40px] mr-3' src="https://i.ibb.co/bRDrSRK/github-logo-icon-143772.png" alt="" />
                <h5>Github</h5>
            </div>
        </div>
    );
};

export default Social;