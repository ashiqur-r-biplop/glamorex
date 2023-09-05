import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white py-40 px-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-5">
            <h1 className="text-3xl"> Glamorex</h1>
            <div className="space-y-2">
              <p className="w-4/5">
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday
              </p>
              <Link href={"/"}>Our Team</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Contact</h1>
            <div className="space-y-2">
              <p>Via Rossini 10, 10136 Turin Italy</p>
              <p>Phone: (0039) 333 12 68 347</p>
              <p>Email: glamorex.help@gmail.com</p>
              <p>Skype: You_online</p>
              <p>Linkedin: www.linkedin.com/in/Glamorex</p>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Links</h1>
            <div className="flex flex-col gap-2">
              <Link href={"/"}>Home</Link>
              <Link href={"/shop"}>Shop</Link>
              <Link href={"/blog"}>Blogs</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Plans & Pricing</h1>
            <div className="flex flex-col gap-2">
              <p>E-commerce</p>
              <Link href={"/developers"}>Developer Team</Link>
              <Link
                href={"/terms"}
              >
                Terms and Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
