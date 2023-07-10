import NewsletterCard from "./cards/NewsletterCard";

const NewsLatterSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto sm:px-6 md:px-8 px-4 my-10">
      <p className="text-center text-4xl font-semibold mb-5">NewsLetter!</p>
      <NewsletterCard />
    </div>
  );
};

export default NewsLatterSection;
