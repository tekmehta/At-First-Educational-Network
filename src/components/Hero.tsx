"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-[600px] w-full">
      {/* Background image with fallback */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <Image
            src="/images/stthomas-oiss-international-students-walk-in-front-of-arches.jpg"
            alt="Students studying abroad"
            fill
            priority
            style={{ objectFit: 'cover' }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-blue-300" />
        )}
        {/* Updated overlay with gradient and reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-blue-800/70" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 h-full flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Gateway to Global Education
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nepal's leading educational consultancy with a 95% visa success rate. Expert guidance for studying in UK, Germany, France, Australia, and beyond.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="#services"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 