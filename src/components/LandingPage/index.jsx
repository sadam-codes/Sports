import Navbar from "../../assets/genericComponents/Navbar";
import FootballPart from "./FootballPart";
import LesSport from "./LesSport";
import VolleyballPart from "./VolleyballPart";
import BasketballPart from "./BasketballPart";
import UrbainsPart from "./UrbainsPart";
import HandballPart from "./HandballPart";
import Crossfit from "./CrossFit";
import Footer from "../../assets/genericComponents/Footer";

function index() {
  return (
    <>
      <div className="navbar-section">
        <Navbar />
      </div>
      <LesSport />
      <div className="footballsecBgcolor">
        <FootballPart />
      </div>
      <div className="volyeballbg">
        <VolleyballPart />
      </div>
      <div className="footballsecBgcolor">
        <BasketballPart />
      </div>
      <div className="volyeballbg">
        <UrbainsPart />
      </div>
      <div className="footballsecBgcolor">
        <HandballPart />
      </div>
      <div className="volyeballbg">
        <Crossfit />
        <Footer />
      </div>
    </>
  );
}

export default index;
