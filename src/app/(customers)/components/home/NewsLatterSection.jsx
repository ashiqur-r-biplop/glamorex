import CmnSectionTitle from "../HelpingCompo/CmnSectionTitle";
import NewsletterCard from "./cards/NewsletterCard";

const NewsLatterSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto sm:px-6 md:px-8 px-4 my-10">
      <CmnSectionTitle
        title={"Newsletter"}
        subtitle={"Explore our Unique Selection and Exclusive Offers"}
      ></CmnSectionTitle>
      <NewsletterCard />
    </div>
  );
};

export default NewsLatterSection;
