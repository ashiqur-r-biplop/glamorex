import { MdKeyboardArrowRight } from "react-icons/md";
import aboutBanner from "../../../../public/bg-about.jpg";
import TrustedSection from "../components/home/TrustedSection";
import AboutGlamorex from "../components/about/AboutGlamorex";
import OurMission from "../components/about/OurMission";
import NewsletterCard from "../components/home/cards/NewsletterCard";
import OurPromise from "../components/about/OurPromise";
import OurTeam from "../components/about/OurTeam";
const AboutPage = () => {
  return (
    <div>
      <div
        className="banner-section bg-slate-800 bg-blend-overlay bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: `url(${aboutBanner.src})` }}
      >
        <div className="bg-black py-5 px-20 rounded-2xl bg-opacity-50 text-white space-y-3">
          <h2 className="text-center text-2xl font-semibold ">About Us</h2>
          <p className="flex gap-2 items-center">
            Home <MdKeyboardArrowRight className="text-lg" /> About
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-[100px]">
        <AboutGlamorex />
        <OurPromise />
        <OurMission />
        <OurTeam />
        <TrustedSection />
      </div>
    </div>
  );
};

export default AboutPage;
