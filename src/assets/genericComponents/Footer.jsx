import { Container, Row, Col } from "react-bootstrap";
import { BiLogoFacebook } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import insta from "../images/insta.png";
import apple from "../images/apple.png";
import playstore from "../images/playstore.png";
import imageone from "../images/image 1.png";

function Footer() {
  return (
    <Container className="py-3 border-danger">
      <Row className="d-flex justify-content-between">
        <Col xs={12} md={6} lg={3}>
          <img src={imageone} alt="No Display" />
          <p className="footer-para mb-0">
            La compétition Rabat jeunesse est un événement sportif et culturel.
            disciplines sportives et artistiques and holds.
          </p>
          <p className="footer-para mb-0">
            Cet événement sinscrit dans loptique dencourager la pratique du
            sport, de découvrir les jeunes talents et le bien-être des habitants
            de la capitale.
          </p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h5 className="footer-headings fw-bold pt-5 mb-0">PAGES</h5>
          <p className="footer-shortpara mb-0 py-2">
            Politique de confidentialité
          </p>
          <p className="footer-shortpara mb-0 py-2 ">Mentions légales-CGU</p>
          <p className="footer-shortpara mb-0 py-2 ">Gérer les cookies</p>
          <p className="footer-shortpara mb-0 py-2 ">CONTACT</p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h5 className="footer-headings fw-bold pt-lg-5 pt-sm-2 mb-0">
            INFORMATION
          </h5>
          <p className="footer-shortpara mb-0 py-2">FAQ</p>
          <p className="footer-shortpara mb-0 py-2 ">CONTACT</p>
        </Col>
        <Col xs={12} md={6} lg={3} className="pb-2">
          <h5 className="footer-headings fw-bold pt-lg-5 pt-sm-2 mb-0">
            Suivez-nous
          </h5>
          <img src={insta} alt="No Display" />
          <BiLogoFacebook className="socialamedia-icons text-primary mx-2" />
          <BsYoutube className="socialamedia-icons text-danger mx-2 " />

          <div className="d-flex py-3">
            <div className="appleIconsfooter bg-dark d-inline-flex">
              <img src={apple} alt="No Display" />
              <div className="paddingsetter">
                <p className="tele-paraFooter text-white mb-0 ">
                  Telecharger surLe
                </p>
                <p className="telefw-paraFooter text-white mb-0 fw-bold">
                  App Store
                </p>
              </div>
            </div>

            <div className="appleIconsfooter bg-dark d-inline-flex mx-1">
              <img src={playstore} alt="No Display" />
              <div className="paddingsetter px-2 py-2">
                <p className="tele-paraFooter text-white mb-0 ">
                  Telecharger surLe
                </p>
                <p className="telefw-paraFooter text-white mb-0 fw-bold">
                  Google Play
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <p className="footer-lastpara text-center mb-0 pt-3">
        © Copyright 2022 Rabat Animation - All rights reserved
      </p>
    </Container>
  );
}

export default Footer;
