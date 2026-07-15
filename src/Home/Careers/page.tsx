import BuisnessModel from "./component/buisnessModel";
import Join from "./component/join";

const Careers = () => {
  return (
    <div className="px-24 max-xl:px-10 max-md:px-5 pt-28 pb-10">
      {/* Title */}
      <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-center">
        Careers
      </h1>

      {/* Intro Text */}
      <div className="max-w-3xl mt-5 leading-loose text-lg max-md:text-base mx-auto text-center w-full text-black/60">
        <p>
          Boltnex Technology is a small, product-led team building software
          that removes operational friction from service businesses,
          starting with BQueue. We're early-stage, so the people who join us
          now shape how the product and the company grow from here.
        </p>
      </div>

      {/* Sections */}
      <BuisnessModel />
      <Join />
    </div>
  );
};

export default Careers;
