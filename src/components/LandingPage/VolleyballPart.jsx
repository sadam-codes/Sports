import { Container } from "react-bootstrap";
import volleyball from "../../assets/images/volleyballsmallimage.png";
import volleyballmain from "../../assets/images/volleyball.png";
import women from "../../assets/images/women.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <img
          className="secondimagewdith float-left"
          src={women}
          alt="No Display"
        />
        <div className="womenbg px-4 py-4">
          <div className="d-flex align-items-center">
            <img
              className="footballstyling"
              src={volleyballmain}
              alt="No display"
            />
            <h3 className="commoncolor px-2 mb-0 fw-bold">VOLLEYBALL</h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes:
          </p>
          <div className="hello py-3">
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={volleyball}
                alt="No display"
              />
              <span className="para-styling">Moins de 14 ans</span>
            </button>
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={volleyball}
                alt="No display"
              />
              <span className="para-styling">Moins de 16 ans</span>
            </button>
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={volleyball}
                alt="No display"
              />
              <span className="para-styling">Moins de 18 ans</span>
            </button>
          </div>
          <p className="main-para mb-0 py-2">
            Le comité d'organisation, dirigé par un délégué et assisté
            d'arbitres, veillera à la gestion des matchs opposant les diverses
            équipes. Les scores des rencontres seront publiés sur le site web
          </p>
          <p className="main-para mb-0 py-2">
            Le programme de la compétition sera publié dès la finalisation de
            lopération dinscription et du tirage au sort.
          </p>
          <p className="main-para mb-0 py-2">
            Des grands prix seront attribués aux gagnants de cette compétition.
          </p>
          <p className="main-para mb-0 py-2">
            Pour sinscrire, veuillez cliquer sur le bouton suivant.
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
