import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import p1 from "../assets/image/portfolio/kasir.png";
import p2 from "../assets/image/portfolio/klasik.png";
import p3 from "../assets/image/portfolio/menu.png";
import p4 from "../assets/image/portfolio/open-kitchen.png";
import p5 from "../assets/image/portfolio/private-dinner.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  const slides = [
    {
      mainTitle: "",
      img: p1,
    },
    {
      mainTitle: "",
      img: p2,
    },
    {
      mainTitle: "",
      img: p3,
    },
    {
      mainTitle: "",
      img: p4,
    },
    {
      mainTitle: "",
      img: p5,
    },
  ];

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: nav2,
    ref: sliderForRef,
    responsive: [
      {
        breakpoint: 576, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
        },
      }
    ],
  };

  const settingsNav = {
    slidesToShow: 4.34,
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    focusOnSelect: true,
    ref: sliderNavRef,
    responsive: [
      {
        breakpoint: 768, // Pada layar dengan lebar 768px atau kurang
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
          slidesToShow: 2.3,
        },
      }
    ],
  };

  return (
    <section
      id="portfolio"
      className="bg-light text-dark d-flex flex-column align-items-center justify-content-center p-3"
    >
      <div className="container">
      <div className="row w-100 py-5">
        <div className="col-12 col-md-4 col-sm-12">
          <h2 className="fw-bold">Galeri Restoran</h2>
        </div>
        <div className="col-12 col-md-4 col-sm-12">
          <p>
            Kami akan memberikan pengalaman pelayanan yang terbaik,
            Buat Pengalaman makanmu lebih spesial dan harmonis disini !!
          </p>
        </div>
        <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center"}}>
          <a href="https://instagram.com/mdkrtf" target="_blank"><button className="btn btn-dark" style={{padding:"12px 28px", borderRadius:"15px"}}>
            Reservasi Sekarang
          </button></a>
        </div>
      
      </div>

      <Slider {...settingsFor} className="slider-for">
        {slides.map((slide, index) => (
          <div key={index} className="image-wrapper position-relative">
            <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
            <div className="text-white position-absolute">
              <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
