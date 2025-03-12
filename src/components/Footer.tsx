import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">At First Educational Network</h3>
            <p className="mb-4 text-gray-300">
              Professional educational consultancy helping Nepalese students pursue higher education abroad.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AtFirstNewBaneshwor" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-gray-300 hover:text-white transition-colors">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/countries/uk" className="text-gray-300 hover:text-white transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/countries/germany" className="text-gray-300 hover:text-white transition-colors">
                  Germany
                </Link>
              </li>
              <li>
                <Link href="/countries/france" className="text-gray-300 hover:text-white transition-colors">
                  France
                </Link>
              </li>
              <li>
                <Link href="/countries/australia" className="text-gray-300 hover:text-white transition-colors">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/countries/canada" className="text-gray-300 hover:text-white transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/countries/usa" className="text-gray-300 hover:text-white transition-colors">
                  USA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <span className="text-gray-300">Santinagar, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <span className="text-gray-300">+977 9803975717</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:info@atfirstedu.com" className="text-gray-300 hover:text-white transition-colors">
                atfirstktm@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} At First Educational Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 