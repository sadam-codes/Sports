import { Container } from "react-bootstrap";
import basketball from "../../assets/images/basketball.png";
import whitebasketball from "../../assets/images/whitebasket.png";
import basketman from "../../assets/images/basketman.jpg";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <div className="basketbg">
          <div className="d-flex align-items-center pt-3">
            <img className="footballstyling" src={basketball} alt="No dispaly" />
            <h3 className="commoncolor px-2 py-3 mb-0 fw-bold">BASKETBALL</h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes :
          </p>
          <div className="hello py-3">
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={whitebasketball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 16 ans</span>
            </button>
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={whitebasketball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 19 ans</span>
            </button>
            <button className="foootbalButtons px-2" type="button">
              <img
                className="footballstylingforbuttons"
                src={whitebasketball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 21 ans</span>
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
          <p className="main-para mb-0 py-2 ">
            Des grands prix seront attribués aux gagnants de cette compétition.
          </p>
          <p className="main-para mb-0 py-2">
            Pour sinscrire, veuillez cliquer sur le bouton suivant.
          </p>
          <div className="text-start pb-4">
            <button className="subscribe-button" type="button">
              SINSCRIRE
            </button>
          </div>
        </div>
        <img className="imagewidth" src={basketman} alt="No Display" />
      </div>
    </Container>
  );
}

export default FootballPart;
