"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaPassport, FaPlane, FaHome, FaFileAlt, FaLanguage } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "University Selection",
    description: "We help you choose the right university and program based on your academic background, career goals, and budget.",
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Visa Assistance",
    description: "Our experts guide you through the entire visa application process, ensuring all documentation is correct and complete.",
    icon: <FaPassport className="text-4xl text-blue-600" />,
  },
  {
    id: 3,
    title: "Travel Arrangements",
    description: "We assist with flight bookings, airport pickups, and all travel-related arrangements for a smooth journey.",
    icon: <FaPlane className="text-4xl text-blue-600" />,
  },
  {
    id: 4,
    title: "Accommodation",
    description: "Find the perfect place to stay with our accommodation services, from university dorms to private apartments.",
    icon: <FaHome className="text-4xl text-blue-600" />,
  },
  {
    id: 5,
    title: "Application Processing",
    description: "We handle the entire application process, from form filling to submission, ensuring everything is done correctly.",
    icon: <FaFileAlt className="text-4xl text-blue-600" />,
  },
  {
    id: 6,
    title: "Language Preparation",
    description: "Get ready for language proficiency tests like IELTS, TOEFL, and other language requirements with our preparation courses.",
    icon: <FaLanguage className="text-4xl text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to help Nepalese students achieve their dreams of studying abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 