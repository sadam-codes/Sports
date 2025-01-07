import { Container } from "react-bootstrap";
import imageLogo from "../../assets/images/image-logo.png";

function Hell() {
  return (
    <Container className="py-5 bg-white">
      <div className="d-lg-flex d-sm-inline-block">
        <img className="w-100" src={imageLogo} alt="No Dispkay" />
        <div className="pt-lg-3 pt-md-0">
          <p className="mb-0 pt-lg-5 pt-md-3">
            <span className="text-primary">Rabta jeuniese</span> estconcept qui
            vise a creer une dynamique an nieveu des terrains de proximitede la
            vile des lumieres a travers I organisation de plusiers tournios dans
            les discipline sportivs(football , basketball,handball, volleyball,
            cross fit es sports urbains) et ds concurs dans different domaines
            artistiques et culturelles (design, chants, commentairs sportif,
            animation sportif, et media).
          </p>
          <p className="mb-0 pt-2">
            Rabat JEUNESSE invite tous les jeunes et les citoyens de la Capitale
            a participer dans les competitions et les concurs qui seront
            organises dans le cadre de cet evenement.
          </p>
          <p className="mb-0 pt-2">
            Lensemble de competition seront organise pandant tous les weekend
            (samedi at dimanche) au niveau des terrains de proximites dela
            Capitale.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Hell;
