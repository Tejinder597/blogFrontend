import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="bg-[url('/img/bg6.jpg')] h-full bg-no-repeat w-full bg-center bg-cover border border-black">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl text-white">
          Our <span className="text-red-400">Address</span>
        </h2>
        <div className="mx-auto max-w-7xl h-96 px-6 lg:px-8 flex flex-row justify-evenly items-center backdrop-sepia-0 bg-black/40 rounded-md my-10">
          <div className="max-w-sm h-80 flex justify-center items-center bg-green-50 rounded-lg pl-5 pr-5">
            <iframe
              className="max-w-xl h-60 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109743.01958078133!2d76.7794179!3d30.733314800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683805027645!5m2!1sen!2sin"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="max-w-sm h-80 flex justify-center items-center bg-green-50 rounded-lg pl-5 pr-5">
            <p>
              A- 45 The Atrium at Quark city Lower ground floor, Zone-B,
              Sahibzada Ajit Singh Nagar, Punjab 160059
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
