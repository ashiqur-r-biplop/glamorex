import React from "react";

const NewsletterCard = () => {
  return (
    <div className="p-8 lg:p-16 bg-gray-50 rounded-md">
      <p className="text-2xl font-semibold text-center">
        Subscribe to our newsletter
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-5">
        <input
          type="email"
          className="h-12 w-full border border-gray-700 lg:w-1/3 rounded-full px-5 lg:mr-2"
          placeholder="Email"
        />
        <div>
          <button className="border border-gray-700 h-12 px-5 rounded-full mt-3 lg:mt-0 hover:bg-gray-700 hover:text-white transition-all">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center text-lg mt-5">
        <span className="font-bold">+21k </span>customers have already
        subscribed!
      </p>
    </div>
  );
};

export default NewsletterCard;
