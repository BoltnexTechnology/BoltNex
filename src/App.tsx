import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./utils/route";
import Home from "./Home/page";
import AboutUs from "./Home/aboutUs/page";
import Careers from "./Home/Careers/page";
import BoltsHome from "./Home/BoltsHome/page";
import ContactUs from "./Home/ContactUs/page";
import PrivacyPolicy from "./Home/PrivacyPolicy/page";
import TermsOfUse from "./Home/TermsOfUse/page";
import ScrollToTop from "./component/scrollToTop";
function Layout() {
  return (
    <section className="">
      <div className="overflow-y-scroll overflow-x-hidden  max-w-[2000px] mx-auto scroll-container  h-screen">
      <ScrollToTop />

        <Routes>
          <Route path={AppRoutes.home} element={<Home />}>
            <Route path={AppRoutes.home} element={<BoltsHome />} />
            <Route path={AppRoutes.aboutUs} element={<AboutUs />} />
            <Route path={AppRoutes.careers} element={<Careers />} />
            <Route path={AppRoutes.contactUs} element={<ContactUs />} />
            <Route path={AppRoutes.privacyPolicy} element={<PrivacyPolicy />} />
            <Route path={AppRoutes.termsOfUse} element={<TermsOfUse />} />
          </Route>
        </Routes>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
