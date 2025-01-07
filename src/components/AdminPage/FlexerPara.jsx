import { Container } from "react-bootstrap";
import apple from "../../assets/images/apple.png";
import playstore from "../../assets/images/playstore.png";
import fleximage from "../../assets/images/flex.png";

function FlexerPara() {
  return (
    <Container className="py-5">
      <div className="d-lg-flex d-md-block">
        <div>
          <p className="namepara mb-0 text-danger pt-3">RABAT JEAUNESSE</p>
          <h2 className="headingtwo mb-0 ">
            REDYNAMISER LA PRATIQUE DU SPORT DE LA CAPITALE
          </h2>
          <p className="mb-0 py-2 long-para">
            La competition Rabat Jeunesse est un evenement sportif et culturel
            organise sous forme de tournois et de concours dans differentes
            disciplines sportives et artistques. Cet evenement s inscrit dans l
            will optique d-encourager la pratique du sport,de decouvrir les
            jeunes talents et de proumouvoir le bien etre des habitants de la
            Capitale.A l will issue de cet evenement,le comite d-organisation de
            cette competition prevoit un ensemble de prix qui sera attribue aux
            gagnants des disciplines sportives et des concours ayant faire l
            will objet de cette compitition. <br />
            pore y participer, veuillez telecharge i will application 
            <span className="text-primary"> Rabat Animation</span> via les
            bouttons suivants:
          </p>

          <div className="apple-icon bg-dark d-inline-flex">
            <img src={apple} alt="No Display" />
            <div className="paddingsetter">
              <p className="tele-para text-white mb-0 ">Telecharger surLe</p>
              <p className="gogle text-white mb-0 fw-bold">App Store</p>
            </div>
          </div>

          <div className="apple-icon bg-dark d-inline-flex mx-2 pt-1">
            <img src={playstore} alt="No Display" />
            <div className="paddingsetter">
              <p className="tele-para text-white mb-0 ">Telecharger surLe</p>
              <p className="gogle text-white mb-0 fw-bold">Google Play</p>
            </div>
          </div>
        </div>

        <img
          className="imagewidth d-block d-md-block pt-lg-4 pt-sm-5"
          src={fleximage}
          alt="No Display"
        />
      </div>
    </Container>
  );
}

export default FlexerPara;
