import Hero from "./component/Hero";
import MissionStrip from "./component/missionStrip";
import AboutBoltNet from "./component/aboutBoltNet";
import FlagShipProject from "./component/flagShipProject";
import FocusAreas from "./component/focusAreas";
import MarketOppurtunity from "./component/marketOppurtunity";
import FutureVision from "./component/futureVision";
import Team from "./component/team";

const BoltsHome = () => {
  return (
    <div>
      <div className="px-24 max-xl:px-10 max-md:px-5">
        <Hero />
      </div>
      <MissionStrip />
      <FocusAreas />
      <div className="px-24 max-xl:px-10 max-md:px-5">
        <AboutBoltNet />
        <FlagShipProject />
        <MarketOppurtunity />
        <FutureVision />
        <Team />
      </div>
    </div>
  );
};

export default BoltsHome;
