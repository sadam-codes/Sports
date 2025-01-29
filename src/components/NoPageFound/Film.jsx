import { Container } from "react-bootstrap";
import documentair from "../../assets/images/documentair.png";
import TAKEROLE from "../../assets/images/TAKEROLE.png";

function FootballPart() {
  return (
    <Container>
      <div className="parenDiv d-lg-flex d-sm-inline-block">
        <img
          className="secondimagewdith float-left"
          src={TAKEROLE}
          alt="No Display"
        />
        <div className="cameraman px-4 py-3">
          <div className="d-flex align-items-center">
            <img
              className="footballstyling"
              src={documentair}
              alt="No display"
            />
            <h3 className="commoncolor px-2 py-3 mb-0 fw-bold">
              MEILLEUR FILM DOCUMENTAIRE
            </h3>
          </div>
          <p className="main-para mb-0">
            Rabat jeunesse propose des compétitions de Football par genre et
            selon les categories dages suivantes:
          </p>

          <p className="main-para mb-0 py-2">
            Le comite dorganisation, dirige par un delegue et assiste par des
            arbitres, veillera a la gestion des matchs entre les differentes
            equipes. Les resultats des rencontres seront publies sur le site web
          </p>
          <p className="main-para mb-0 py-2">
            Le programme de la competition sera publié des la finalisation de
            loperation dinscription et du tirage au sort.
          </p>
          <p className="main-para mb-0 py-2">
            Des grands prix seront attribués aux gagnants de cette compétition.
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
