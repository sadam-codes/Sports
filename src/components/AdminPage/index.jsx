import { Container } from "react-bootstrap";
import Navbar from "../../assets/genericComponents/Navbar";
import Slider from "./Slider";
import Slicker from "./Slicker";
import FlexerPara from "./FlexerPara";
import Comment from "./Coments";
import Sport from "./Sport";
import Concours from "./Concours";
import Bluebg from "./Bluebg";
import Footer from "../../assets/genericComponents/Footer";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <Slider />
      <Slicker />
      <div className="backgrundcolor">
        <FlexerPara />
      </div>
      <Comment />
      <div className="backgrundcolorr">
        <Sport />
      </div>
      <Concours />
      <Container className="backimage">
        <Bluebg />
      </Container>
      <div className="volyeballbg d-flex justify-content-center mt-5">
        <Footer />
      </div>
    </>
  );
}
