import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaUniversity, FaGraduationCap, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

const countries = [
  {
    id: 1,
    name: "United Kingdom",
    image: "/countries/uk.jpg",
    slug: "uk",
    universities: "100+ Universities",
    description: "Study in the UK's prestigious universities with a rich academic tradition and world-class education.",
    details: {
      overview: "The United Kingdom is home to some of the world's oldest and most prestigious universities. With a rich academic tradition and diverse cultural experience, the UK offers high-quality education recognized globally.",
      benefits: [
        "World-renowned universities with global recognition",
        "Shorter duration of courses (3 years for Bachelor's, 1 year for Master's)",
        "Post-study work visa opportunities",
        "Multicultural environment with students from around the world",
        "Strong research facilities and industry connections",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "IELTS score of 6.0-7.0 depending on the university and program",
        financial: "Proof of funds to cover tuition fees and living expenses",
      },
      topUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
        "University College London (UCL)",
        "University of Edinburgh",
      ],
    },
  },
  {
    id: 2,
    name: "Germany",
    image: "/countries/Germany.avif",
    slug: "germany",
    universities: "80+ Universities",
    description: "Benefit from Germany's tuition-free public universities and strong focus on engineering and technology.",
    details: {
      overview: "Germany is known for its high-quality education, particularly in engineering and technology fields. Many public universities offer tuition-free education, making it an affordable option for international students.",
      benefits: [
        "Tuition-free education at public universities",
        "Strong focus on research and practical training",
        "18-month post-study work permit",
        "Strong economy with job opportunities",
        "High quality of life and safety",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "German language proficiency (B1/B2 level) for German-taught programs; IELTS 6.0+ for English-taught programs",
        financial: "Proof of funds (approximately €10,332 per year) in a blocked account",
      },
      topUniversities: [
        "Technical University of Munich",
        "Ludwig Maximilian University of Munich",
        "Heidelberg University",
        "Humboldt University of Berlin",
        "RWTH Aachen University",
      ],
    },
  },
  {
    id: 3,
    name: "France",
    image: "/countries/uk.jpg",
    slug: "france",
    universities: "70+ Universities",
    description: "Experience France's excellent higher education system with affordable tuition fees and rich cultural heritage.",
    details: {
      overview: "France offers a high-quality education system with relatively low tuition fees. Known for its excellence in fields like mathematics, engineering, and business, France provides a unique cultural experience for international students.",
      benefits: [
        "Low tuition fees at public universities",
        "High-quality education system",
        "Rich cultural experience",
        "Post-study work permit options",
        "Central location in Europe for travel",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "French language proficiency (B1/B2 level) for French-taught programs; IELTS 6.0+ for English-taught programs",
        financial: "Proof of funds (approximately €615 per month)",
      },
      topUniversities: [
        "Sorbonne University",
        "École Normale Supérieure",
        "École Polytechnique",
        "HEC Paris",
        "Sciences Po",
      ],
    },
  },
  {
    id: 4,
    name: "Australia",
    image: "/countries/Germany.avif",
    slug: "australia",
    universities: "40+ Universities",
    description: "Study in Australia's innovative universities with a focus on research and practical learning.",
    details: {
      overview: "Australia is known for its high-quality education, innovative research, and excellent quality of life. With a strong focus on practical learning and research, Australian universities offer a wide range of programs for international students.",
      benefits: [
        "High-quality education with practical approach",
        "Post-study work visa options (2-4 years)",
        "Safe and welcoming environment",
        "Multicultural society",
        "Strong economy with part-time work opportunities",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "IELTS score of 6.0-7.0 depending on the university and program",
        financial: "Proof of funds to cover tuition fees and living expenses",
      },
      topUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
        "University of Queensland",
        "Monash University",
      ],
    },
  },
  {
    id: 5,
    name: "Canada",
    image: "/countries/uk.jpg",
    slug: "canada",
    universities: "60+ Universities",
    description: "Enjoy Canada's high-quality education with post-study work opportunities and pathway to immigration.",
    details: {
      overview: "Canada is a popular destination for international students due to its high-quality education, post-study work opportunities, and pathway to permanent residency. With a safe environment and multicultural society, Canada offers an excellent study experience.",
      benefits: [
        "High-quality education at affordable costs",
        "Post-graduation work permit (up to 3 years)",
        "Pathway to permanent residency",
        "Safe and welcoming environment",
        "Part-time work opportunities during studies",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "IELTS score of 6.0-6.5 depending on the university and program",
        financial: "Proof of funds (approximately CAD $10,000 per year plus tuition fees)",
      },
      topUniversities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
        "University of Alberta",
        "University of Waterloo",
      ],
    },
  },
  {
    id: 6,
    name: "USA",
    image: "/countries/Germany.avif",
    slug: "usa",
    universities: "200+ Universities",
    description: "Access world-leading universities and colleges with diverse program options across all fields.",
    details: {
      overview: "The United States is home to many of the world's top-ranked universities and offers a wide range of programs across all fields. With a flexible education system and cutting-edge research facilities, the USA provides excellent opportunities for international students.",
      benefits: [
        "World-class universities and research facilities",
        "Flexible education system with diverse program options",
        "Optional Practical Training (OPT) for up to 3 years for STEM fields",
        "Networking and career opportunities",
        "Vibrant campus life and cultural experience",
      ],
      requirements: {
        academic: "Completed higher secondary education (10+2) with good grades",
        language: "TOEFL score of 80-100 or IELTS score of 6.5-7.0 depending on the university and program",
        financial: "Proof of funds to cover tuition fees and living expenses",
      },
      topUniversities: [
        "Harvard University",
        "Massachusetts Institute of Technology (MIT)",
        "Stanford University",
        "California Institute of Technology (Caltech)",
        "University of Chicago",
      ],
    },
  },
];

export default function CountriesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Study <span className="text-blue-700">Destinations</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore top countries where we help Nepalese students pursue their higher education dreams.
            </p>
          </div>
        </div>
      </section>
      
      {/* Countries Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {countries.map((country) => (
              <div key={country.id} id={country.slug} className="scroll-mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg mb-6">
                      <Image
                        src={country.image}
                        alt={`${country.name} universities`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                      />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{country.name}</h2>
                    <p className="text-blue-700 font-medium mb-4">{country.universities}</p>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      {country.details.overview}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Why Study in {country.name}?</h3>
                      <ul className="space-y-3">
                        {country.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-6 w-6 text-blue-600 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
                    >
                      Inquire About Studying in {country.name}
                    </Link>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <FaUniversity className="text-blue-600 mr-2" />
                        Top Universities in {country.name}
                      </h3>
                      
                      <ul className="space-y-3">
                        {country.details.topUniversities.map((university, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-2"></div>
                            <span className="text-gray-700">{university}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Requirements</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaGraduationCap className="text-blue-700" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Academic Requirements</h4>
                            <p className="text-gray-700">{country.details.requirements.academic}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaCalendarAlt className="text-blue-700" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Language Requirements</h4>
                            <p className="text-gray-700">{country.details.requirements.language}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaMoneyBillWave className="text-blue-700" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Financial Requirements</h4>
                            <p className="text-gray-700">{country.details.requirements.financial}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {country.id < countries.length && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 