import Testimony from './reviews'

const Services = () => {
  return (
    <div className="relative px-24 max-xl:px-10 max-md:px-5 py-20 max-md:py-14 flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <img 
        src="/servicePage.jpg" 
        alt="Services background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

     {/* Text content */}
      <div className="relative z-10 text-white flex flex-col justify-center">
        <div className="my-8 ">
          <h1 className="text-4xl font-semibold max-xl:text-3xl max-md:text-2xl">
            What We Do
          </h1>
          <p className="text-lg mt-2 max-xl:text-base max-md:text-sm text-white/80">
            Every product we build helps service businesses operate with
            less friction:
          </p>
        </div>

        <Testimony />
      </div>
    </div>
  )
}

export default Services
