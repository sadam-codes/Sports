import Navbar from "../../assets/genericComponents/Navbar";
import Rabatpara from "./Rabta-para";
import Rabattwopara from "./Rabattwo-para";
import Hexagonal from "./Hexagonal";
import Accordion from "./Accordion";
import Footer from "../../assets/genericComponents/Footer";

function index() {
  return (
    <>
      <div className="navbar-section">
        <Navbar />
      </div>
      <Rabatpara />
      <Rabattwopara />
      <div className="back">
        <Hexagonal />
      </div>
      <Accordion />
      <div className="volyeballbg">
        <Footer />
      </div>
    </>
  );
}

export default index;
