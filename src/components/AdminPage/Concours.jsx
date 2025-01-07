import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import hands from "../../assets/images/hands.png";
import mice from "../../assets/images/mice.png";
import commentary from "../../assets/images/commentary.png";
import film from "../../assets/images/film.png";
import media from "../../assets/images/media.jpg";
import clicks from "../../assets/images/clicks.png";

const sportsData = [
  {
    name: "DESSIN",
    image: hands,
  },
  {
    name: "CHANSON",
    image: mice,
  },
  {
    name: "COMMENTATEUR SPOTIF",
    image: commentary,
  },
  {
    name: "FILM DOCUMENTAIRE",
    image: film,
  },
  {
    name: "MEDIA",
    image: media,
  },
  {
    name: "GRUPE D'ANIMATION",
    image: clicks,
  },
];

function BasicExample() {
  return (
    <Container className="maxwidth py-5 text-center">
      <h1 className="rabat-heading mb-0 text-center fw-bold pb-5">
        LES CONCOURS
      </h1>
      <Row>
        {sportsData.map((sport) => (
          <Col md={6} lg={4} sm={12} className="py-3">
            <Card
              className="py-3 px-3 border-radius-5 custom-cardtwo border-0"
              style={{ borderRadius: "10px" }}
            >
              <Card.Img variant="top" src={sport.image} />
              <h3 className="mb-0 text-center fw-bold py-3 gamesstyling">
                {sport.name}
              </h3>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BasicExample;
