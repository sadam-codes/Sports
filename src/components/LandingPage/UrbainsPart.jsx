import { Container } from "react-bootstrap";
import urbains from "../../assets/images/urbains.png";
import boarding from "../../assets/images/boarding.png";
import roaler from "../../assets/images/roaler.png";
import trottinet from "../../assets/images/trottinet.png";
import urbainMain from "../../assets/images/urbainMain.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <img
          className="secondimagewdith float-left"
          src={urbainMain}
          alt="No Display"
        />
        <div className="urbainsbg px-4 py-4">
          <div className="d-flex align-items-center">
            <img className="footballstyling" src={urbains} alt="No display" />
            <h3 className="commoncolor px-2 mb-0 fw-bold">SPORTS-URBAINS</h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes:
          </p>
          <div className="hello py-4">
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={boarding}
                alt="No display"
              />
              <span className="para-styling">Skate Boarding</span>
            </button>
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={roaler}
                alt="No display"
              />
              <span className="para-styling">Roller</span>
            </button>

            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={boarding}
                alt="No display"
              />
              <span className="para-styling">Free Style Foot</span>
            </button>
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={trottinet}
                alt="No display"
              />
              <span className="para-styling">Trottinet</span>
            </button>
          </div>
          <p className="main-para mb-0 py-2">
            Le comité dorganisation présidé par un délégué et accompagné par des
            arbitres assureront la gestion des rencontres entre les différentes
            équipes. Les résultats des rencontres seront affichés via le site
            web www.rabatjeunesse.ma.
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
