import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaGraduationCap, FaPassport, FaPlane, FaHome, FaFileAlt, FaLanguage, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "University Selection",
    description: "We help you choose the right university and program based on your academic background, career goals, and budget.",
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    details: [
      "Personalized university recommendations based on your profile",
      "Detailed information about programs and specializations",
      "Insights into university rankings and reputation",
      "Guidance on admission requirements and eligibility",
      "Information about tuition fees and living costs",
    ],
  },
  {
    id: 2,
    title: "Visa Assistance",
    description: "Our experts guide you through the entire visa application process, ensuring all documentation is correct and complete.",
    icon: <FaPassport className="text-4xl text-blue-600" />,
    details: [
      "Comprehensive guidance on visa requirements",
      "Document verification and preparation",
      "Assistance with visa application forms",
      "Mock visa interview preparation",
      "Regular updates on visa application status",
    ],
  },
  {
    id: 3,
    title: "Travel Arrangements",
    description: "We assist with flight bookings, airport pickups, and all travel-related arrangements for a smooth journey.",
    icon: <FaPlane className="text-4xl text-blue-600" />,
    details: [
      "Assistance with flight bookings at competitive rates",
      "Arrangement for airport pickup services",
      "Pre-departure orientation sessions",
      "Travel insurance guidance",
      "Information about baggage allowances and restrictions",
    ],
  },
  {
    id: 4,
    title: "Accommodation",
    description: "Find the perfect place to stay with our accommodation services, from university dorms to private apartments.",
    icon: <FaHome className="text-4xl text-blue-600" />,
    details: [
      "Information about on-campus housing options",
      "Assistance with off-campus accommodation search",
      "Guidance on rental agreements and deposits",
      "Advice on cost-effective housing solutions",
      "Support with temporary accommodation upon arrival",
    ],
  },
  {
    id: 5,
    title: "Application Processing",
    description: "We handle the entire application process, from form filling to submission, ensuring everything is done correctly.",
    icon: <FaFileAlt className="text-4xl text-blue-600" />,
    details: [
      "Assistance with application forms for multiple universities",
      "Document preparation and verification",
      "Personal statement and essay guidance",
      "Application fee payment assistance",
      "Regular follow-ups with universities",
    ],
  },
  {
    id: 6,
    title: "Language Preparation",
    description: "Get ready for language proficiency tests like IELTS, TOEFL, and other language requirements with our preparation courses.",
    icon: <FaLanguage className="text-4xl text-blue-600" />,
    details: [
      "IELTS preparation courses with experienced trainers",
      "TOEFL coaching and practice tests",
      "Language proficiency assessment",
      "Study materials and resources",
      "Mock tests and performance evaluation",
    ],
  },
  {
    id: 7,
    title: "Scholarship Guidance",
    description: "We help you identify and apply for scholarships, grants, and financial aid opportunities to support your education.",
    icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
    details: [
      "Information about available scholarships and eligibility criteria",
      "Assistance with scholarship application process",
      "Guidance on writing compelling scholarship essays",
      "Information about university-specific financial aid",
      "Advice on part-time work opportunities while studying",
    ],
  },
  {
    id: 8,
    title: "Career Counseling",
    description: "Our career counselors help you align your study choices with your long-term career goals and job market trends.",
    icon: <FaBriefcase className="text-4xl text-blue-600" />,
    details: [
      "Assessment of career interests and aptitudes",
      "Information about job prospects in different fields",
      "Guidance on choosing the right course for your career goals",
      "Advice on internship and work placement opportunities",
      "Information about post-study work options in different countries",
    ],
  },
];

export const metadata: Metadata = {
  title: "Our Services | Study Abroad Consultancy - At First Educational Network",
  description: "Comprehensive study abroad services including visa assistance, university admissions, test preparation, and scholarship guidance. Expert counseling for UK, Germany, France & Australia education.",
  keywords: "study abroad services nepal, visa assistance, university admission help, IELTS preparation, scholarship guidance, education counseling, student visa processing, study in UK, study in Germany",
  alternates: {
    canonical: "https://www.atfirstedu.com/services"
  },
  openGraph: {
    title: "Complete Study Abroad Services | At First Educational Network",
    description: "Expert guidance for international education with comprehensive support services and proven success rate.",
    url: "https://www.atfirstedu.com/services",
    type: "website",
    images: [
      {
        url: "/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Study Abroad Services"
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <article className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Study Abroad Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            From test preparation to visa approval, we provide end-to-end support for your international education journey.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-4 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, index) => (
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
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
                    >
                      Inquire About This Service
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our {service.title} Service?</h3>
                    <p className="text-gray-700 mb-6">
                      Our team of experienced counselors provides personalized guidance to ensure you make the right choices for your academic journey.
                    </p>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Service Highlights</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Personalized approach for each student</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Expert guidance from experienced counselors</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Regular updates and communication</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Comprehensive support throughout the process</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <Link
                        href="/contact"
                        className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                      >
                        Contact us to learn more
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
                  </div>
                </div>
                
                {service.id < services.length && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Career Counseling",
                "description": "Expert guidance for course and university selection aligned with career goals",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "University Admissions",
                "description": "Complete support for university applications and admissions worldwide",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Visa Assistance",
                "description": "Expert visa guidance with 95% success rate",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Test Preparation",
                "description": "Comprehensive coaching for IELTS, TOEFL, and other exams",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Scholarship Guidance",
                "description": "Support for identifying and applying to scholarships",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Pre-Departure Support",
                "description": "Comprehensive guidance for transition abroad",
                "provider": {
                  "@type": "Organization",
                  "name": "At First Educational Network"
                }
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services do you provide for study abroad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive services including career counseling, university admissions, visa assistance, test preparation, scholarship guidance, and pre-departure support."
                }
              },
              {
                "@type": "Question",
                "name": "What is your visa success rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain a 95% visa success rate across all study destinations through our expert guidance and thorough preparation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide scholarship assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we help students identify and apply for suitable scholarships and financial aid opportunities at universities worldwide."
                }
              }
            ]
          })
        }}
      />
      
      <Footer />
    </article>
  );
} 