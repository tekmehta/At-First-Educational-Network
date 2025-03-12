import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-700">Us</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about studying abroad? Get in touch with our team of experts for personalized guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />
      
      <Footer />
    </main>
  );
} 