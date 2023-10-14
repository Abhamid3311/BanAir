import React from 'react'
import { ITestimonial } from '../../utils/Types'
import Slider from 'react-slick';
import { FaUserCircle } from "react-icons/fa";

export default function Testimonials({ testimonials }: { testimonials: ITestimonial[] }) {
    // console.log(testimonials);

    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='bg-lightBg'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 py-8  text-textClr'>
                <div>
                    <p className='text-secondary text-sm font-bold'>WHAT OUR CLIENT SAYS</p>
                    <h1 className='text-2xl lg:text-3xl font-bold '>Testimonials</h1>
                </div>

                <div className=''>
                    <Slider {...settings} className='py-5'>
                        {
                            testimonials?.map(testi => <div key={testi.id} className='px-3 bg-lightBg'>
                                <div className='p-4 bg-white rounded-md relative  shadow-md  h-[200px] m-2'>
                                    <p className='text-sm lg:text-base'>{testi.comment}</p>


                                    <div className='mt-3 absolute bottom-3 left-4'>
                                        <div className='flex items-center gap-2'>
                                            <FaUserCircle className="text-4xl" />
                                            <div>
                                                <h1 className='text-lg font-bold text-primary'>{testi.name}</h1>
                                                <p className='text-sm italic'><span>{testi.desi}</span>, <span>{testi.country}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}
