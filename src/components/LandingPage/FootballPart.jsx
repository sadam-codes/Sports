import { Container } from "react-bootstrap";
import Football from "../../assets/images/football.png";
import whiteFootball from "../../assets/images/whitefootball.png";
import man from "../../assets/images/men.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <div className="bgimage">
          <div className="d-flex align-items-center pt-4">
            <img className="footballstyling" src={Football} alt="No dispaly" />
            <h3 className="commoncolor px-2 mb-0 fw-bold">FOOTBALL</h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les catégories dâges suivantes :
          </p>
          <div className="hello py-4">
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={whiteFootball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 12 ans</span>
            </button>
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={whiteFootball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 15 ans</span>
            </button>
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={whiteFootball}
                alt="No dispaly"
              />
              <span className="para-styling">Mions de 18 ans</span>
            </button>
            <button className="foootbalButtons" type="button">
              <img
                className="footballstylingforbuttons"
                src={whiteFootball}
                alt="No dispaly"
              />
              <span className="para-styling">De 18 ans et plus</span>
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
        <img className="imagewidth" src={man} alt="No Display" />
      </div>
    </Container>
  );
}

export default FootballPart;
