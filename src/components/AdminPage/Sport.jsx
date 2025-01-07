import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import footbal from "../../assets/images/footbal.jpg";
import basketbal from "../../assets/images/basketball.jpg";
import voleball from "../../assets/images/volleybal.jpg";
import handball from "../../assets/images/handbal.jpg";
import crossfit from "../../assets/images/crossfit.png";
import sportsUrbians from "../../assets/images/sportsurbain.png";

const sportsData = [
  {
    name: "BASKETBALL",
    image: footbal,
  },
  {
    name: "BASKETBALL",
    image: basketbal,
  },
  {
    name: "VOLLEYBALL",
    image: voleball,
  },
  {
    name: "HANDBALL",
    image: handball,
  },
  {
    name: "CROSS-FIT",
    image: crossfit,
  },
  {
    name: "SPORTS URBIANS",
    image: sportsUrbians,
  },
];

function BasicExample() {
  return (
    <Container className="maxwidth py-5">
      <h1 className="rabat-heading mb-0 text-center fw-bold pb-5">
        LES SPORTS
      </h1>
      <Row>
        {sportsData.map((sport) => (
          <Col md={6} lg={4} sm={12} className="py-3">
            <Card
              className="py-3 px-3 border-radius-5 border-0 custom-card"
              style={{ borderRadius: "10px" }}
            >
              <Card.Img variant="top" src={sport.image}  />
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
