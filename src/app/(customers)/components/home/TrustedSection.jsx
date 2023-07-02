import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedSection = () => {
  return (
    <Marquee
      className="font-bold py-6 rounded-2xl shadow-2xl bg-red-200 my-24"
      pauseOnHover={true}
      speed={160}
    >
      <div>
        <Image
          src="/company images/Armani.jpg"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Boss.jpg"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
    </Marquee>
  );
};

export default TrustedSection;
