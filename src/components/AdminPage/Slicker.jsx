import { Container } from "react-bootstrap";
import Slider from "react-slick";
import firstplayer from "../../assets/images/firstPlayer.png";
import secondplayer from "../../assets/images/secondPlayer.png";
import thirdplayer from "../../assets/images/thirdPlayer.png";
import fourthplayer from "../../assets/images/fourtPlayer.png";
import last from "../../assets/images/last.png";

function ResponsiveSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="text-lg-auto text-sm-center">
      <Slider {...settings}>
        <div>
          <img src={firstplayer} alt="Not Display" className="zeroimage" />
        </div>
        <div>
          <img src={secondplayer} alt="Not Display" className="firstimage" />
        </div>
        <div>
          <img src={thirdplayer} alt="Not Display" className="secondimage" />
        </div>
        <div>
          <img src={fourthplayer} alt="Not Display" className="thirdimage" />
        </div>

        <div>
          <img src={last} alt="Not Display" className="lastimage" />
        </div>
        <div>
          <img src={fourthplayer} alt="Not Display" className="thirdimage" />
        </div>
      </Slider>
    </Container>
  );
}

export default ResponsiveSlider;
