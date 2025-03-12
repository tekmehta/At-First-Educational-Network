"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    id: 1,
    name: "United Kingdom",
    image: "/countries/uk.jpg",
    slug: "uk",
    universities: "100+ Universities",
    description: "Study in the UK's prestigious universities with a rich academic tradition and world-class education.",
  },
  {
    id: 2,
    name: "Germany",
    image: "/countries/germany.jpg",
    slug: "germany",
    universities: "80+ Universities",
    description: "Benefit from Germany's tuition-free public universities and strong focus on engineering and technology.",
  },
  {
    id: 3,
    name: "France",
    image: "/countries/france.jpg",
    slug: "france",
    universities: "70+ Universities",
    description: "Experience France's excellent higher education system with affordable tuition fees and rich cultural heritage.",
  },
  {
    id: 4,
    name: "Australia",
    image: "/countries/australia.jpg",
    slug: "australia",
    universities: "40+ Universities",
    description: "Study in Australia's innovative universities with a focus on research and practical learning.",
  },
  {
    id: 5,
    name: "Canada",
    image: "/countries/canada.jpg",
    slug: "canada",
    universities: "60+ Universities",
    description: "Enjoy Canada's high-quality education with post-study work opportunities and pathway to immigration.",
  },
  {
    id: 6,
    name: "USA",
    image: "/countries/usa.jpg",
    slug: "usa",
    universities: "200+ Universities",
    description: "Access world-leading universities and colleges with diverse program options across all fields.",
  },
];

const Countries = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-700">Study Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore top countries where we help Nepalese students pursue their higher education dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-blue-900/20 z-10"></div>
                <Image
                  src={country.image}
                  alt={`${country.name} universities`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                <p className="text-blue-700 font-medium text-sm mb-3">{country.universities}</p>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <Link
                  href={`/countries/${country.slug}`}
                  className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Explore Universities
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
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/countries"
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Countries; 