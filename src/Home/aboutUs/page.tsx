import FirstPart from "./component/first";
import JoinUs from "./component/joinUs";
import SecondPart from "./component/second";
import Services from "./component/services";

const AboutUs = () => {
  return (
    <div className="pt-28">
      <div className="px-24 max-xl:px-10 max-md:px-5">
        <FirstPart />
        <SecondPart />
      </div>
      <Services />
      <div className="px-24 max-xl:px-10 max-md:px-5">
        <JoinUs />
      </div>
    </div>
  );
};

export default AboutUs;
