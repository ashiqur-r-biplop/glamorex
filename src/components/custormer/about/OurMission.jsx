import ourMission from "../../../../public/assets/img/our-mission.png";

const OurMission = () => {
  return (
    <div className="pt-[100px]">
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="section-title mb-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p>
            As part of the Fashion Group, our mission is to simplify global
            commerce. We achieve this by equipping suppliers with powerful tools
            to reach a vast global audience for their products. Simultaneously,
            we aid buyers in efficiently discovering desired products and
            connecting with suppliers. Our platform facilitates seamless
            transactions, enabling suppliers to expand their reach and buyers to
            access a diverse range of products effortlessly. With our commitment
            to streamlining international business in the fashion industry, we
            strive to provide a user-friendly and efficient experience for both
            suppliers and buyers. Join us in our mission to make global fashion
            business accessible and hassle-free.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img className="mx-auto" src={ourMission.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
