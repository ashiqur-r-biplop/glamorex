const Footer = () => {
  return (
    <div className="bg-black text-white py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-5">
            <h1 className="text-3xl">Glamorex</h1>
            <div className="space-y-2">
              <p className="w-4/5">
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday
              </p>
              <p>Our Team</p>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Contact</h1>
            <div className="space-y-2">
              <p>Via Rossini 10, 10136 Turin Italy</p>
              <p>Phone: (0039) 333 12 68 347</p>
              <p>Email: Hello@gmail.com</p>
              <p>Skype: You_online</p>
              <p>Linkedin: www.linkedin.com/in/Glamorex</p>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Links</h1>
            <div className="space-y-2">
              <p>Home</p>
              <p>Shop</p>
              <p>Blog</p>
              <p>Checkout</p>
              <p>Profile</p>
              <p>Login</p>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl">Plans & Pricing</h1>
            <div className="space-y-1">
              <p>E-commerce</p>
              <p>Teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
