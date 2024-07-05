import React from 'react';
import { FaGithub , FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/re.svg'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-slate-200 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
            <span className="text-2xl font-bold text-pink-600">Urban Nest</span>
          </div>
          <p className="text-slate-700 mb-4">
          Urban Nest is your trusted partner in finding the perfect home. We offer<br/> a wide range of properties,from cozy apartments to luxurious villas, catering<br/> to all your real estate needs.Our team of experienced agents is dedicated to<br/> providing personalized service and expert advice to help you make informed decisions.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-slate-700 hover:text-pink-600">
              <FaGithub  size={20} />
            </a>
            <a href="https://twitter.com" className="text-slate-700 hover:text-pink-600">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-slate-700 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-slate-700 hover:text-pink-600">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-pink-600 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
          <li><Link to='/about' className="text-slate-700 hover:text-pink-600">About us</Link></li>
          <li><Link to='/sign-up' className="text-slate-700 hover:text-pink-600">Register</Link></li>
          <li><Link to='/sign-in' className="text-slate-700 hover:text-pink-600">Login</Link></li>
          <li><Link to='/search' className="text-slate-700 hover:text-pink-600">Find a Property</Link></li>
    
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-pink-600 font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="text-slate-700"><i className="fas fa-phone-alt"></i>+91 4908506840</li>
            <li className="text-slate-700"><i className="fas fa-envelope"></i>mernestate@gmail.com</li>
            <li className="text-slate-700"><i className="fas fa-map-marker-alt"></i>Indore,Madhya Pradesh, India</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
