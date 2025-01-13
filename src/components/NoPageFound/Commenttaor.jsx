import { Container } from "react-bootstrap";
import commentator from "../../assets/images/commentator.png";
import catchfootball from "../../assets/images/catchfootball.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <div className="footballerBg py-5">
          <div className="d-flex align-items-center">
            <img
              className="footballstyling"
              src={commentator}
              alt="No dispaly"
            />
            <h3 className="commoncolor px-2 py-3 mb-0 fw-bold">
              MEILLEUR COMMENTATEUR
            </h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes :
          </p>

          <p className="main-para mb-0 py-2">
            Le comité d'organisation, dirigé par un délégué et assisté
            d'arbitres, veillera à la gestion des matchs entre les équipes. Les
            scores des rencontres seront disponibles sur le site web
          </p>
          <p className="main-para mb-0 py-2">
            Le programme de la compétition sera publié dès la finalisation de
            lopération dinscription et du tirage au sort.
          </p>
          <div className="text-start py-2">
            <button className="subscribe-button" type="button">
              SINSCRIRE
            </button>
          </div>
        </div>
        <img className="imagewidth" src={catchfootball} alt="No Display" />
      </div>
    </Container>
  );
}

export default FootballPart;
