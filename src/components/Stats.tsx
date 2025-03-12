"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaUniversity, FaGlobe, FaAward } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Students Placed",
    value: "1000+",
    icon: <FaUserGraduate className="text-4xl text-blue-600" />,
    description: "Successfully placed students in top universities worldwide",
  },
  {
    id: 2,
    title: "University Partners",
    value: "150+",
    icon: <FaUniversity className="text-4xl text-blue-600" />,
    description: "Partnerships with prestigious universities across the globe",
  },
  {
    id: 3,
    title: "Countries Covered",
    value: "15+",
    icon: <FaGlobe className="text-4xl text-blue-600" />,
    description: "Helping students study in countries across Europe, North America, and beyond",
  },
  {
    id: 4,
    title: "Success Rate",
    value: "95%",
    icon: <FaAward className="text-4xl text-blue-600" />,
    description: "High success rate in visa approvals and university admissions",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-200">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            At First Educational Network has been helping Nepalese students achieve their study abroad dreams for years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-white/10 p-4 rounded-full">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl font-semibold mb-3 text-blue-200">{stat.title}</p>
                <p className="text-blue-100">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 