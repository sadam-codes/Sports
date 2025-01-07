import { Container } from "react-bootstrap";
import DESSIN from "../../assets/images/DESSIN.png";
import handstwo from "../../assets/images/handstwo.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <div className="handstwoBg py-4">
          <div className="d-flex align-items-center">
            <img className="footballstyling" src={DESSIN} alt="No dispaly" />
            <h3 className="commoncolor px-2 mb-0 fw-bold">
              MEILLEUR DESSIN
            </h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes :
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
          <div className="text-start py-2">
            <button className="subscribe-button" type="button">
              SINSCRIRE
            </button>
          </div>
          <p className="main-para mb-0 ">
            Des grands prix seront attribués aux gagnants de cette compétition.
          </p>
          <p className="main-para mb-0 ">
            Pour sinscrire, veuillez cliquer sur le bouton suivant.
          </p>
        </div>
        <img className="imagewidth" src={handstwo} alt="No Display" />
      </div>
    </Container>
  );
}

export default FootballPart;
