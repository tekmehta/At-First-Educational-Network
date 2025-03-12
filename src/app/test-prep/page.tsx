import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaChalkboardTeacher, FaLaptop, FaUserFriends, FaRegFileAlt, FaRegClock } from "react-icons/fa";

const testPrep = [
  {
    id: 1,
    name: "IELTS Preparation",
    image: "/test-prep/ielts.jpg",
    description: "Comprehensive preparation for the International English Language Testing System (IELTS) exam.",
    features: [
      "Expert instructors with high band scores",
      "Complete coverage of all four modules: Reading, Writing, Listening, and Speaking",
      "Regular mock tests and performance analysis",
      "Small batch sizes for personalized attention",
      "Extensive study materials and practice resources",
      "Flexible timing options for working professionals and students",
    ],
    duration: "4-8 weeks",
    format: "Classroom and Online",
  },
  {
    id: 2,
    name: "TOEFL Preparation",
    image: "/test-prep/toefl.jpg",
    description: "Intensive training program for the Test of English as a Foreign Language (TOEFL) exam.",
    features: [
      "Specialized instructors with high TOEFL scores",
      "Comprehensive coverage of Reading, Listening, Speaking, and Writing sections",
      "Computer-based practice tests in simulated exam environment",
      "Personalized feedback and improvement strategies",
      "Proven techniques to tackle each section effectively",
      "Additional grammar and vocabulary enhancement",
    ],
    duration: "4-6 weeks",
    format: "Classroom and Online",
  },
  {
    id: 3,
    name: "PTE Academic",
    image: "/test-prep/pte.jpg",
    description: "Structured preparation course for the Pearson Test of English Academic exam.",
    features: [
      "Experienced trainers familiar with PTE format and scoring",
      "Focus on all test components: Speaking & Writing, Reading, and Listening",
      "Regular practice with computer-based testing format",
      "Personalized strategies for improving scores",
      "Tips and techniques for time management",
      "Unlimited access to practice materials and mock tests",
    ],
    duration: "4-6 weeks",
    format: "Classroom and Online",
  },
  {
    id: 4,
    name: "GRE Preparation",
    image: "/test-prep/gre.jpg",
    description: "Comprehensive preparation for the Graduate Record Examination (GRE) for graduate school admissions.",
    features: [
      "Expert instructors with high GRE scores",
      "In-depth coverage of Verbal Reasoning, Quantitative Reasoning, and Analytical Writing",
      "Extensive practice with computer-adaptive test format",
      "Personalized strategies for tackling complex problems",
      "Vocabulary building techniques and resources",
      "Regular full-length mock tests and detailed analysis",
    ],
    duration: "8-10 weeks",
    format: "Classroom and Online",
  },
  {
    id: 5,
    name: "GMAT Preparation",
    image: "/test-prep/gmat.jpg",
    description: "Intensive coaching for the Graduate Management Admission Test (GMAT) for business school applicants.",
    features: [
      "Specialized instructors with high GMAT scores and business backgrounds",
      "Comprehensive coverage of Quantitative, Verbal, Integrated Reasoning, and Analytical Writing sections",
      "Focus on data sufficiency and critical reasoning questions",
      "Personalized study plans based on diagnostic test results",
      "Regular practice with computer-adaptive testing format",
      "Business school application guidance",
    ],
    duration: "8-10 weeks",
    format: "Classroom and Online",
  },
  {
    id: 6,
    name: "SAT Preparation",
    image: "/test-prep/sat.jpg",
    description: "Structured preparation program for the Scholastic Assessment Test (SAT) for undergraduate admissions.",
    features: [
      "Experienced instructors with proven track record",
      "Comprehensive coverage of Reading, Writing & Language, and Mathematics sections",
      "Optional Essay section preparation",
      "Regular practice tests and performance analysis",
      "Personalized strategies for improving weak areas",
      "College application guidance and counseling",
    ],
    duration: "6-8 weeks",
    format: "Classroom and Online",
  },
];

export default function TestPrepPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Test <span className="text-blue-700">Preparation</span> Classes
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Comprehensive preparation courses for IELTS, TOEFL, PTE, GRE, and other standardized tests to help you achieve your target scores.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Test Prep Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-blue-700">Test Prep</span> Courses?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our test preparation programs are designed to help you achieve your target scores through personalized coaching and proven strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from instructors who have achieved high scores themselves and have years of teaching experience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaBook className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Materials</h3>
              <p className="text-gray-700">
                Access to extensive study materials, practice tests, and resources designed to cover all exam components.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUserFriends className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Batch Sizes</h3>
              <p className="text-gray-700">
                Small class sizes ensure personalized attention and allow instructors to address individual learning needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaLaptop className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online & Offline Options</h3>
              <p className="text-gray-700">
                Flexible learning options with both classroom and online courses to suit your schedule and preferences.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRegFileAlt className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Mock Tests</h3>
              <p className="text-gray-700">
                Frequent practice tests in simulated exam environments to build confidence and improve performance.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRegClock className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Schedules</h3>
              <p className="text-gray-700">
                Multiple batch timings including weekday, weekend, and evening classes to accommodate your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Test Prep Courses Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-700">Test Preparation</span> Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of test preparation courses designed to help you excel in standardized tests required for studying abroad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16">
            {testPrep.map((course) => (
              <div key={course.id} id={course.name.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-32">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-blue-900/20 z-10 lg:hidden"></div>
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="lg:rounded-l-xl"
                      />
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          Duration: {course.duration}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          Format: {course.format}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-6">
                        {course.description}
                      </p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Course Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
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
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/contact"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-block"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Your Target Score?</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Join our test preparation classes and get the guidance you need to excel in your exams and secure admission to your dream university.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 