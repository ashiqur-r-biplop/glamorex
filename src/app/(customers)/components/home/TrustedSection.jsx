import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedSection = () => {
  return (
    <Marquee
      className="container mx-auto flex justify-between items-center mt-5 py-10"
      pauseOnHover={true}
      speed={150}
      gradient={true}
    >
      <div>
        <Image
          src="/company images/Armani.png"
          className="rounded-2xl m-5 px-3 bg-white"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Calvin.png"
          className="rounded-2xl m-5 "
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Boss.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Chanel.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Dolce.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Fendi.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Gucci.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>
      <div>
        <Image
          src="/company images/Hermes.png"
          className="rounded-2xl m-5"
          width={150}
          height={150}
          alt="company images"
        />
      </div>

      <div>
        <Image
          src="/company images/Prada.png"
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
