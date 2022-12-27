import { default as React } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { reviews } from '../Data/reviews';
import ReviewCard from './ReviewCard';


const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
        ]
      };
    return (
        <div className='w-full'>
          <h2 className='text-3xl'> Why you choose us</h2>
          <p className='text-sm w-[90%] md:w-[60%] lg:w-[40%] my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat qui debitis illum necessitatibus dolorem fugit vitae voluptatum quam quis,</p>
          <Slider {...settings}>
            {reviews.map(review => <ReviewCard review={review}/>)}
          </Slider>
        </div>
      );
};

export default ReviewSlider;