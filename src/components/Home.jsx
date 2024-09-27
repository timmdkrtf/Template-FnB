import NasiGoreng from "../assets/image/food/Group 2 (1).png"
import AllDessert from "../assets/image/food/Group 7 (4).png"
import Slider from "react-slick";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <BsChevronRight class="arrows" style={{color:"black"}}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <BsChevronLeft class="arrows" style={{color:"black"}}/>
      </div>
    );
  }

function Home(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />
      };
    return(
        <div className="home" id="home">
                <div className="content-home">
                    <div className="container">
                        <Slider {...settings}>
                            <div className="slide-card nasgor">
                                <div className="text-left">
                                    <p>Cita rasa Berkelas masakan nusantara</p>
                                    <h1>Nasi Goreng Kampung</h1>
                                    <a href="#menu"><button>Discover Menu</button></a>
                                </div>
                                <div className="image-right">
                                    <img src={NasiGoreng} alt="nasi goreng kampung" />
                                </div>
                            </div>
                            <div className="slide-card dessert">
                                <div className="text-left">
                                    <p>All the Desserts You Want, Right Here</p>
                                    <h1>Choose Your Dessert</h1>
                                    <a href="#menu"><button>Discover Menu</button></a>
                                </div>
                                <div className="image-right">
                                    <img src={AllDessert} alt="nasi goreng kampung" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
        </div>
    );
}

export default Home;