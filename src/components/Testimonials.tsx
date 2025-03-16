"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    university: "University of Manchester, UK",
    image: "/testimonials/student1.jpg",
    quote:
      "At First Educational Network made my dream of studying in the UK a reality. Their guidance throughout the application and visa process was invaluable. I'm now pursuing my Master's degree at the University of Manchester!",
  },
  {
    id: 2,
    name: "Priya Patel",
    university: "Technical University of Munich, Germany",
    image: "/testimonials/student2.jpg",
    quote:
      "I was confused about which country to choose for my engineering degree. The team at At First helped me understand that Germany was perfect for my goals. They assisted with everything from university selection to visa application.",
  },
  {
    id: 3,
    name: "Rohan Thapa",
    university: "University of Toronto, Canada",
    image: "/testimonials/student3.jpg",
    quote:
      "The counselors at At First Educational Network are true professionals. They guided me through every step of my application to Canadian universities and helped me secure a scholarship. I'm forever grateful!",
  },
  {
    id: 4,
    name: "Sita Gurung",
    university: "Sorbonne University, France",
    image: "/testimonials/student4.jpg",
    quote:
      "Studying in France seemed like an impossible dream until I met the team at At First. They helped me with language preparation, application process, and cultural orientation. Now I'm thriving at Sorbonne University!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-blue-700">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who successfully achieved their dreams of studying abroad.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <FaQuoteLeft className="text-blue-100 text-6xl absolute top-8 left-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-blue-700 text-sm">
                  {testimonials[activeIndex].university}
                </p>
              </div>
              
              <div className="md:col-span-2">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-lg italic mb-6"
                >
                  {testimonials[activeIndex].quote}
                </motion.p>
                
                <div className="flex justify-center md:justify-start space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    index === activeIndex ? "bg-blue-700" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 