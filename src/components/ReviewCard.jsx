import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className=''>
            <img className='w-[360px] h-[360px] object-contain' src={review.img} alt="" />
            <div className='mt-4 pl-4'>
                <h3 className='font-semibold'>{review.title}</h3>
                <p className='text-[12px] w-[80%] mt-3'>{review.des}</p>
                <button className='text-[blue] text-sm'>See More</button>
            </div>
        </div>
    );
};

export default ReviewCard;