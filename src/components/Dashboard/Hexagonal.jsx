import { Container, Row, Col } from "react-bootstrap";
import polygon from "../../assets/images/Polygon.png";
import polygontwo from "../../assets/images/polygontwo.png";

function Hexagonal() {
  return (
    <Container className="pt-5">
      <div className="text-center text-white">
        <h4>Objectifs de organization de</h4>
        <h4>Rabat jeunesse</h4>
      </div>
      <Row className="text-center pt-5">
        <Col>
          <img
            className="polygonimage"
            src={polygon}
            alt="NO display"
            loading="lazy"
          />

          <div className="text-center text-white position-relative bottom-50">
            <p className="mb-0 fontsizing px-3 pt-5">
              Généraliser l’accès aux équipements sportifs de proximité pour les
              jeunes des quartiers.
            </p>
            <img
              className="polygonimagetwo"
              src={polygontwo}
              alt="NO display"
              loading="lazy"
            />
          </div>
        </Col>

        <Col>
          <img
            className="polygonimage"
            src={polygon}
            alt="NO display"
            loading="lazy"
          />

          <div className="text-center text-white position-relative bottom-50">
            <p className="mb-0 fontsizing px-3 pt-5">
              Renforcer les liens sociaux entre les jeunes et les générations au
              niveau des quartiers de la ville de Rabat.
            </p>
            <img
              className="polygonimagetwo"
              src={polygontwo}
              alt="NO display"
              loading="lazy"
            />
          </div>
        </Col>

        <Col>
          <img
            className="polygonimage"
            src={polygon}
            alt="NO display"
            loading="lazy"
          />

          <div className="text-center text-white position-relative bottom-50">
            <p className="mb-0 fontsizing px-3 pt-5">
              Développer les sports féminins des jeunes à travers la le
              développement de ses capacités.
            </p>
            <img
              className="polygonimagetwo"
              src={polygontwo}
              alt="NO display"
              loading="lazy"
            />
          </div>
        </Col>

        <Col>
          <img className="polygonimage" src={polygon} alt="NO display" />

          <div className="text-center text-white position-relative bottom-50">
            <p className="mb-0 fontsizing px-3 pt-5">
              Soutenir l’initiative individuelle des jeunes à travers la le
              développement de ses capacités.
            </p>
            <img
              className="polygonimagetwo"
              src={polygontwo}
              alt="NO display"
            />
          </div>
        </Col>

        <Col>
          <img className="polygonimage" src={polygon} alt="NO display" />

          <div className="text-center text-white position-relative bottom-50">
            <p className="mb-0 fontsizing px-3 pt-5">
              Lutter contre les phonèmes de la délinquance et ledéveloppement de
              sentiment de patriotisme et de civisme.
            </p>
            <img
              className="polygonimagetwo"
              src={polygontwo}
              alt="NO display"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hexagonal;
