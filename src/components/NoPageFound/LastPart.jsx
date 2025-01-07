import { Container } from "react-bootstrap";
import aimation from "../../assets/images/aimation.png";
import played from "../../assets/images/lastimage.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <img
          className="secondimagewdith float-left"
          src={played}
          alt="No Display"
        />
        <div className="px-4 pt-5">
          <div className="d-flex align-items-center">
            <img className="footballstyling" src={aimation} alt="No display" />
            <h3 className="commoncolor px-2 py-3 mb-0 fw-bold">
              MEILLEUR GROUPE DANIMATION
            </h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes équipes Les résultats des rencontres seron:
          </p>

          <p className="main-para mb-0 py-2">
            Le comité dorganisation présidé par un délégué et accompagné par des
            arbitres assureront la gestion des rencontres entre les différentes
            t affichés via le site web www.rabatjeunesse.ma.
          </p>

          <div className="text-start">
            <button className="subscribe-button" type="button">
              SINSCRIRE
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FootballPart;
