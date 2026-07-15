import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/route";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const socialArray = [
    {
      img: <PiInstagramLogoFill />,
      link: "https://www.instagram.com/boltnextechnology/",
    },
    {
      img: <FaXTwitter />,
      link: "https://x.com/boltnex1877",
    },
    {
      img: <IoMdMail />,
      link: "mailto:support@boltnex.com",
    },
  ];

  const linkStyle =
    "hover:text-bolts-blue transition-colors duration-200 cursor-pointer";

  return (
    <footer className="px-24 max-xl:px-16 max-lg:px-10 max-md:px-6 pt-20 max-md:pt-14">
      {/* LINK GRID */}
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 pb-10">
        {/* BRAND */}
        <div className="flex flex-col gap-y-3 items-start col-span-1">
          <img src="/logo.svg" alt="Boltnex Technology" className="w-32" />
          <p className="text-black/60 text-sm leading-relaxed max-w-xs">
            Software that removes operational friction from service
            businesses.
          </p>
          <div className="flex gap-x-4 items-center mt-3">
            {socialArray.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/70 hover:text-bolts-blue hover:border-bolts-blue transition-colors duration-200"
              >
                <span className="text-base">{item.img}</span>
              </a>
            ))}
          </div>
        </div>

        {/* COMPANY LINKS */}
        <div className="text-black/60">
          <p className="text-black font-semibold mb-3 text-sm uppercase tracking-wide">
            Company
          </p>
          <div className="space-y-2.5 text-sm">
            <p className={linkStyle}>
              <Link to={AppRoutes.home}>Home</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.aboutUs}>About Us</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.careers}>Careers</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.contactUs}>Contact Us</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.privacyPolicy}>Privacy Policy</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.termsOfUse}>Terms of Use</Link>
            </p>
          </div>
        </div>

        {/* PRODUCT LINKS */}
        <div className="text-black/60">
          <p className="text-black font-semibold mb-3 text-sm uppercase tracking-wide">
            Product
          </p>
          <div className="space-y-2.5 text-sm">
            <a href={`${AppRoutes.home}#bqueue`} className={`block ${linkStyle}`}>
              BQueue
            </a>
            <p className={linkStyle}>
              <Link to={AppRoutes.contactUs}>Request a Demo</Link>
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-black/60">
          <p className="text-black font-semibold mb-3 text-sm uppercase tracking-wide">
            Contact
          </p>
          <div className="space-y-2.5 text-sm">
            <a href="mailto:support@boltnex.com" className={`block ${linkStyle}`}>
              support@boltnex.com
            </a>
            <a href="tel:+447881162899" className={`block ${linkStyle}`}>
              +44 7881 162899
            </a>
            <p>London, United Kingdom</p>
          </div>
        </div>
      </div>

      {/* LEGAL / COPYRIGHT LINE */}
      <div className="py-7 border-t border-black/10 text-center text-sm text-black/50 space-y-1.5">
        <p>
          © {new Date().getFullYear()} Boltnex Technology — All rights reserved.
        </p>
        <p className="text-xs text-black/40">
          Boltnex Technology Ltd is a company registered in England and Wales.
          Company No. 16945866. Registered office: London, United Kingdom.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
