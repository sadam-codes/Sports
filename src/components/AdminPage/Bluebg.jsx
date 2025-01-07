import leftclock from "../../assets/images/leftclock.png";
import rightclock from "../../assets/images/rightclock.png";

function Bluebg() {
  return (
    <div className="backimage py-4 text-center">
      <img className="leftclock d-lg-block d-md-none d-sm-none align-left" src={leftclock} alt="No Display" />
      <div className="text-center">
      <img
          className="rightside d-lg-block d-md-none d-sm-none align-left"
          src={rightclock}
          alt="No Display"
        />
        <div>
          <h1 className="les-heading text-white mb-0 d-inline-block">
            LES INSCRIPTIONS SONT OUVERTES
          </h1>
          <h1 className="les-heading text-white mb-0 d-inline-block">
            JUSQUAU 18 SEPTEMBRE 2022
          </h1>
          
          <div className="parentdiv pt-4">
            <button className="mon-button text-white" type="button">
              INSCRIRE MON EQUIPE
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bluebg;
