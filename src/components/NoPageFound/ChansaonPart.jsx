import { Container } from "react-bootstrap";
import music from "../../assets/images/music.png";
import mice from "../../assets/images/micer.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <img
          className="secondimagewdith float-left"
          src={mice}
          alt="No Display"
        />
        <div className="miceBg px-4 py-3">
          <div className="d-flex align-items-center">
            <img
              className="footballstyling"
              src={music}
              alt="No display"
            />
           <h3 className="commoncolor px-2 py-3 mb-0 fw-bold">MEILLEUR CHANSON</h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes:
          </p>

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
          <div className="text-start pb-3">
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
