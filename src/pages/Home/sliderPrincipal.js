import React from 'react'
import './style.sass'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//- slider Actual
export default function VersionSlider({ ...props }) {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        centerMode: false,
        swipe: true,
        touchMove: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    autoplay: true,
                    infinite: true,
                    centerMode: false,
                    swipe: true,
                    touchMove: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    const sliders = [
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1610745580129-home-sliderdesktopgeneral.jpg",
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1611339475594-home-sliderdesktopmoda.jpg",
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1610647205504-home-sliderdesktopherramientas.jpg",
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1610642381796-home-sliderdesktopelectronicayaudio.jpg",
        "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1610592718804-home-sliderdesktophogar.jpg"
    ]

    return (
        <div className="contSlider sliderPrincipal">
            <div className="container contSlideP">
                {sliders.length !== 0
                    ?
                    <Slider {...settings}>
                        {
                            sliders.map((enlace, index) =>
                                <img loading="lazy" src={enlace} alt={"imagen" + index}  importance="low" key={index}/>
                            )
                        }
                    </Slider>
                    : null
                }
            </div>
        </div>
    )
}
