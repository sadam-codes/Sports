import { Col, Container, Row } from "react-bootstrap";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";

import Football from "../../assets/images/football.png";
import yogga from "../../assets/images/yogga.png";
import basketball from "../../assets/images/basketball.png";
import volleyball from "../../assets/images/volleyball.png";
import urbains from "../../assets/images/urbains.png";
import handball from "../../assets/images/handball.png";

const sportsData = [
  { name: "FOOTBALL", image: Football },
  { name: "CROSS-FIT", image: yogga },
  { name: "BASKETBALL", image: basketball },
  { name: "VOLLEYBALL", image: volleyball },
  { name: "SPORTS URBAINS", image: urbains },
  { name: "HANDBALL", image: handball },
];

function LessSport() {
  return (
    <Container className="py-5">
      <div className="text-center">
        <h3 className="rabat-heading mb-0 fw-bold text-center pt-5 pb-2">
          LES SPORT
        </h3>
        <p className="signs-para mb-0">
          La competitions <LiaLessThanSolid className="signs" />
          <LiaLessThanSolid className="signs" />
          Rabat Jeunesse
          <LiaGreaterThanSolid className="signs" />
          <LiaGreaterThanSolid className="signs" /> concerne les disciplines
          sportives suivantes.
        </p>
      </div>
      <Row className="py-4 text-center">
        {sportsData.map((sport) => (
          <Col key={sport.name} md={4} className="py-3">
            <img className="px-lg-2 px-sm-0" src={sport.image} alt="No Display" />
            {sport.name}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LessSport;
