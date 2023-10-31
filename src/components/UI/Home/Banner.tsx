import Slider from "react-slick";
import { bannerData } from "../../utils/StaticData";
import { CSSProperties } from 'react';
import { Button } from "flowbite-react";
import Link from "next/link";
import { ISlide } from "@/components/utils/Types";


export default function Banner() {

    //Slick Slider Settings
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full bg-lightBg">
            <Slider {...settings}>
                {
                    bannerData.map(data => <BannerItem key={data.id} data={data} />)
                }
            </Slider>
        </div>
    )
};


const BannerItem = ({ data }: { data: ISlide }) => {
    const { id, title, desc, btn, btnLink, img } = data;

    const containerStyle: CSSProperties = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0.2, 0.5), rgba(0, 0, 0.2, 0.5)), url(${img})`,
    };

    return (
        <div style={containerStyle} className=" text-white h-full lg:h-[90vh] w-full banner-img">

            <div className=" max-w-7xl mx-auto px-5 lg:px-0 flex items-center h-4/5 ">
                <div className="w-full lg:w-1/2 py-10 lg:py-0">
                    <h1 className="text-2xl lg:text-5xl font-bold text-start mb-3 w-full">{title}</h1>
                    <p className="text-sm lg:text-base">{desc}</p>

                    <Link href={btnLink}>  <Button color="warning" className="px-3 lg:px-6 font-bold mt-3">{btn}</Button></Link>


                </div>
            </div>
        </div >
    )
}
