import aboutImg from "../../../../public/assets/img/about.jpg";

const AboutGlamorex = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div>
            <div className="hidden md:block">
              <div>
                <div className="section-title mb-8">
                  <h2 className="text-2xl font-semibold">About Glamorex</h2>
                </div>
                <p>
                  Welcome to Glamorex, the premier platform for all your fashion
                  needs. Since our launch in 2023, we have established ourselves
                  as the go-to destination for fashion enthusiasts worldwide.
                  With a vast customer base and an extensive network of
                  suppliers, we are dedicated to providing an unparalleled
                  shopping experience.
                </p>
                <p>
                  At Glamorex, we understand that fashion is more than just
                  clothing; it's a form of self-expression. That's why we curate
                  a wide range of products to cater to diverse styles and
                  preferences. Whether you're looking for trendy apparel,
                  accessories, footwear, or beauty products, we have it all in
                  one convenient place.
                </p>
                <p>
                  We take pride in our commitment to quality and authenticity.
                  Our team meticulously selects each item to ensure that it
                  meets our high standards. We collaborate with renowned brands
                  and trusted suppliers to bring you the latest fashion trends
                  and timeless classics.
                </p>
                <p>
                  With our user-friendly interface and advanced search options,
                  finding your perfect fashion piece is effortless. Our website
                  offers detailed product descriptions, size guides, and
                  customer reviews, empowering you to make informed choices.
                  Additionally, our secure payment system and reliable worldwide
                  shipping ensure a seamless shopping experience.
                </p>
                <p>
                  Glamorex is not just a fashion store; it's a community of
                  fashion enthusiasts. Connect with like-minded individuals
                  through our blog, social media platforms, and interactive
                  features. Stay updated on the latest fashion news, style tips,
                  and exclusive promotions.
                </p>
                <p>
                  Join millions of satisfied buyers and suppliers who rely on
                  Glamorex for their fashion needs. Step into the world of
                  Glamorex and elevate your fashion game today.
                </p>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="section-title mb-8">
                <h2 className="text-2xl font-semibold">About Glamorex</h2>
              </div>
              <p>
                Welcome to Glamorex, your premier fashion destination since
                2023. With a global customer base and an extensive network of
                suppliers, we are dedicated to providing an unparalleled
                shopping experience. Our curated collection caters to diverse
                styles and preferences, offering trendy apparel, accessories,
                footwear, and beauty products all in one place. We prioritize
                quality and authenticity, ensuring each item meets our high
                standards through collaborations with renowned brands and
                trusted suppliers. Our user-friendly website, detailed product
                descriptions, size guides, and customer reviews make finding the
                perfect fashion piece effortless. Join our vibrant community of
                fashion enthusiasts, stay updated on the latest trends, and
                trust Glamorex to fulfill your fashion needs with utmost
                satisfaction.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutImg.src} className="rounded-3xl" alt="About Image" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutGlamorex;

// className="grid gap-5 grid-cols-2"
