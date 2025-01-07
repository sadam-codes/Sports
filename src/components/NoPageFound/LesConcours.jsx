import { Col, Container, Row } from "react-bootstrap";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

import dessin from "../../assets/images/DESSIN.png";
import commentator from "../../assets/images/commentator.png";
import media from "../../assets/images/media.png";
import music from "../../assets/images/music.png";
import documentair from "../../assets/images/documentair.png";
import aimation from "../../assets/images/aimation.png";

const sportsData = [
  { name: "MEILLEUR DESSIN", image: dessin },
  { name: "MEILLEUR COMMENTATEUR", image: commentator },
  { name: "MEILLEUR MEDIA", image: media },
  { name: "MEILLEUR CHANSON", image: music },
  { name: "MEILLEUR DOCUMENTAIRE", image: documentair },
  { name: "MEILLEUR GROUPE DANIMATION", image: aimation },
];

function Hello() {
  return (
    <Container className="py-5">
      <div className="text-center">
        <h1 className="rabat-heading mb-0 fw-bold py-2 text-center pt-5">
          LES CONCOURS
        </h1>
        <p className="signs-para mb-0">
          En marge des competitions sportives, 
           <LiaLessThanSolid className="signs" />
          <LiaLessThanSolid className="signs" />
          Rabat Jeunesse
          <LiaGreaterThanSolid className="signs" />
          <LiaGreaterThanSolid className="signs" />
          organise un ensemble de concours dans des domains differents pour
          choisir :
        </p>
      </div>
      <Row className="py-4 text-center">
        {sportsData.map((sport) => (
          <Col key={sport.name} md={4} className="py-3">
            <img src={sport.image} alt="No Display" />
            <div className="mt-2">{sport.name}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hello;
