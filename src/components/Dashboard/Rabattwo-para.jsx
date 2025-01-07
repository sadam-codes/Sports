import { Container } from "react-bootstrap";
import leftcolon from "../../assets/images/leftsemicolon.png";
import rightcolon from "../../assets/images/rightsemicolon.png";
import group from "../../assets/images/group.png";

function Rabattwopara() {
  return (
    <Container className="pb-5">
      <div className="d-lg-flex d-sm-inline-block">
        <p className="backgroundImage m-lg-2 m-sm-0 py-2 px-lg-5 px-sm-3 py-lg-5 py-sm-3 text-white">
          <div className="leftparent">
            <img className="leftcolon" src={leftcolon} alt="NoDisplay" />
          </div>
          A cet egard, Notre objectif ultime est de redynamiser la pratique de
          sport dans nos villes ,nos villages et nos quartiers,surtout
          populaires ,qui constituent un reservoir inepuisable de sportifs pour
          notre pays. Cest aussi une pepiniere feconde ou sest eclos le talent
          de nombre de nos grades champions ,dont certains sadonnaient ,pieds
          nus,et avec spontaneite ,a leur sport favori .lls se contentaient de
          lhonneur darborer le maillot national,de porter hout le drapeau du
          maroc et de faire resonner Ihymne national au cours des rencontres
          continentales et internationales .Nous devons,par ailleurs ,stimuler
          et dynamiser la vie associative sportive de maniere a augmenter le
          nombre des licencies , pour le mettre en adequation avec celui de la
          populaton,notamment les jeunes filles et les jeunes garcons qui
          constituent une reelle pepiniere des heros de demain.
          <img className="rightcolon" src={rightcolon} alt="NoDisplay" />
          <p className="mb-0 pt-2 text-white">
            Ectrate de message Royal adress aux participation aux assises
            nationales du sport qui se sont derouslees a skhirat 2013.
          </p>
        </p>
        <img className="w-100 p-1" src={group} alt="No display" />
      </div>
    </Container>
  );
}

export default Rabattwopara;
