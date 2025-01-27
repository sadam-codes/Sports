import { Container, Col, Row, Card } from "react-bootstrap";
import bluebg from "../../assets/images/bluebg.png";
import phoneicon from "../../assets/images/moblie-icon.png";
import octain from "../../assets/images/octain-icon.png";
import backk from "../../assets/images/bggg.png";
import yellow from "../../assets/images/yellowbg.png";
import microsoft from "../../assets/images/microsoft-icon.png";
import green from "../../assets/images/greenbg.png";
import family from "../../assets/images/family-icon.png";
import redline from "../../assets/images/redLine.png";

const cardData = [
  {
    image: backk,
    icon: phoneicon,
    step: "Ètape 01",
    description:
      "Inscrire sur www.rabatjeunesse ou i Application Rabat Animation.",
  },
  {
    image: bluebg,
    icon: octain,
    step: "Ètape 02",
    description:
      "Sélectionner la discipline sportive ou le domaine de concours objet de.",
  },
  {
    image: yellow,
    icon: microsoft,
    step: "Ètape 03",
    description:
      "Choisir le district et le quartier puis spécifier votre catégorie dâge.",
  },
  {
    image: green,
    icon: family,
    step: "Ètape 04",
    description:
      "Remplir les informations personnelles de(s) participant(e)(s)",
  },
];

function CardExample() {
  return (
    <Container className="py-5 mb-0">
      <div>
        <h1 className="coment-heading text-center coment">COMMENT INSCRIRE</h1>
      </div>
      <Row>
        {cardData.map((card, index) => (
          <Col md={6} lg={3} sm={12} className="mb-0" >
            <div className="text-center py-5 border-0 position-relative">
              <img src={card.image} alt="No Display" />
              <img
                src={card.icon}
                alt="No Display"
                style={{
                  position: "relative",
                  right: "80px",
                }}
                loading="lazy"
              />
              {index < 3 && (
                <div
                  className="redline d-lg-block d-none"
                  style={{
                    position: "absolute",
                    top: '90px',
                    left: '190px',
                  }}
                  loading="lazy"
                >
                  <img src={redline} alt="Red Line" loading="lazy"/>
                </div>
              )}
              <Card.Body>
                <div className="siddu">
                  <p className="etape mb-0">{card.step}</p>
                  <p className="text mb-0">{card.description}</p>
                </div>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardExample;
