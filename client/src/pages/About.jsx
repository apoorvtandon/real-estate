import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/about-banner-1.png';
import img2 from '../assets/about-banner-2.jpg';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-28 max-w-6xl mx-auto">
      <img src={img1} alt="Hero" className="h-[600px] w-[600px] object-cover" />
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <div className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm w-max mx-auto lg:mx-0">
          About Us
        </div>
        <h1 className="text-gray-900 font-bold text-3xl lg:text-5xl">
          Welcome to Urban Nest
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Urban Nest is your ultimate destination for finding the perfect urban living space. Our mission is to connect you with beautiful, modern homes in the heart of the city. Whether you're looking to buy, rent, or invest, we offer a wide range of properties to suit your needs.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          With over a decade of experience in the real estate industry, Urban Nest has helped thousands of individuals and families find their dream homes. Our dedicated team of professionals is committed to providing you with personalized service and expert advice.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="bg-red-200 p-2 rounded-full">
              <span className="text-red-500">🏡</span>
            </div>
            <span>Modern Home Designs</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="bg-red-200 p-2 rounded-full">
              <span className="text-red-500">🌳</span>
            </div>
            <span>Urban Green Spaces</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="bg-red-200 p-2 rounded-full">
              <span className="text-red-500">🍷</span>
            </div>
            <span>Vibrant Community</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <div className="bg-red-200 p-2 rounded-full">
              <span className="text-red-500">🛡️</span>
            </div>
            <span>24/7 Security</span>
          </div>
        </div>
        <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
          <q>"Urban Nest provided exceptional service and found us the perfect apartment in no time. Highly recommended!"</q>
        </div>
      </div>
    </div>
  );
};

export default About;
