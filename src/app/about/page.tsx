import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCheckCircle, FaGraduationCap, FaGlobe } from "react-icons/fa";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Leading Education Consultancy in Nepal - At First Educational Network",
    description: "Discover Nepal's premier education consultancy with 10+ years of experience. Our expert team has helped 1000+ students achieve their study abroad dreams with personalized guidance and support.",
    keywords: "education consultancy nepal, study abroad experts, best consultancy kathmandu, student visa experts, education counseling nepal, career guidance nepal",
    alternates: {
      canonical: "https://www.atfirstedu.com/about"
    },
    openGraph: {
      title: "About At First Educational Network - Premier Education Consultancy",
      description: "Your trusted partner in international education with proven success in helping Nepalese students study abroad.",
      url: "https://www.atfirstedu.com/about",
      type: "website",
      images: [
        {
          url: "/about-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "At First Educational Network Team"
        }
      ]
    }
  };
}

export default function About() {
  return (
    <article className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Partner in International Education
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            With over a decade of experience, we have helped thousands of students achieve their dreams of studying abroad.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                At First Educational Network was founded in 2015 with a mission to help Nepalese students access quality education abroad. What started as a small office in Kathmandu has now grown into one of Nepals most trusted educational consultancies.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, having experienced the challenges of studying abroad firsthand, established this consultancy to make the process smoother and more accessible for Nepalese students.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we have helped more than 1000 students achieve their dreams of studying in prestigious universities across Europe, North America, Australia, and beyond.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                  <p className="text-gray-700">Trusted by 1000+ students</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                  <p className="text-gray-700">95% visa success rate</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                  <p className="text-gray-700">150+ university partners</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                  <p className="text-gray-700">15+ countries covered</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/about-us.jpg"
                alt="About At First Educational Network"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to helping Nepalese students access quality education abroad and achieve their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGraduationCap className="text-blue-700 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To empower Nepalese students with quality international education opportunities through expert guidance and unwavering support.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGlobe className="text-blue-700 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-center">
                To be Nepals most trusted education consultancy, known for integrity, excellence, and student success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-700">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced counselors and advisors is dedicated to helping you achieve your educational goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/team/member${i}.jpg`}
                    alt={`Team Member ${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member {i}</h3>
                  <p className="text-blue-700 font-medium text-sm mb-4">Education Counselor</p>
                  <p className="text-gray-600">
                    Experienced in guiding students through the application and visa process for studying abroad.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose At First Educational Network?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">95% Visa Success Rate</h3>
              <p>Our proven track record speaks for itself with an exceptional visa approval rate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Counselors</h3>
              <p>Our team of certified counselors provides personalized guidance tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">End-to-End Support</h3>
              <p>From university selection to visa approval, we are with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "At First Educational Network",
              "description": "Leading education consultancy in Nepal specializing in study abroad services",
              "foundingDate": "2013",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "20+"
              },
              "award": [
                "Best Education Consultancy 2022",
                "Excellence in Student Services 2023"
              ],
              "knowsAbout": [
                "International Education",
                "Student Visa Processing",
                "University Admissions",
                "Career Counseling",
                "Test Preparation"
              ]
            }
          })
        }}
      />
    </article>
  );
} 