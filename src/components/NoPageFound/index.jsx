import Navbar from "../../assets/genericComponents/Navbar";
import LesConcours from "./LesConcours";
import DessinnPart from "./DessinnPart";
import ChansaonPart from "./ChansaonPart";
import Commenttaor from "./Commenttaor";
import Film from "./Film";
import Media from "./Media";
import LastPart from "./LastPart";
import Footer from "../../assets/genericComponents/Footer";

export default function NoPage() {
  return (
    <>
      <div>
        <Navbar />
        <LesConcours />
      </div>
      <div className="footballsecBgcolor">
        <DessinnPart />
        <div className="volyeballbg">
          <ChansaonPart />
        </div>
        <div className="footballsecBgcolor">
          <Commenttaor />
        </div>
        <div className="volyeballbg">
          <Film />
        </div>
        <div className="footballsecBgcolor">
          <Media />
        </div>
      </div>
      <div className="volyeballbg">
        <LastPart />
        <Footer />
      </div>
    </>
  );
}
