import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "At First Educational Network  | Best Study Abroad Consultancy in Nepal",
    description: "Top-rated educational consultancy in Nepal with 95% visa success rate. Expert guidance for studying in UK, Germany, France, Australia. Free consultation, visa assistance & scholarship guidance.",
    keywords: "study abroad consultancy nepal, best education consultancy kathmandu, study in UK from Nepal, study in Germany from Nepal, visa assistance nepal, scholarship guidance, IELTS preparation, university admission nepal, overseas education consultancy",
    alternates: {
      canonical: "https://www.atfirstedu.com"
    },
    openGraph: {
      title: "Leading Study Abroad Consultancy in Nepal | At First Educational Network",
      description: "Your trusted partner for studying abroad. 95% visa success rate, expert guidance, and comprehensive support for international education.",
      type: "website",
      url: "https://www.atfirstedu.com",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "At First Educational Network - Study Abroad Consultancy"
        }
      ]
    }
  };
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Semantic header for better SEO */}
        <header>
          <Navbar />
        </header>

        {/* Main content with semantic sections */}
        <article>
          {/* Hero Section with semantic tags */}
          <section aria-label="Introduction" className="relative">
            <Hero />
          </section>

          {/* Services Section */}
          <section aria-label="Our Services" id="services">
            <Services />
          </section>

          {/* Study Destinations */}
          <section aria-label="Study Destinations" id="countries">
            <Countries />
          </section>

          {/* Statistics and Achievements */}
          <section aria-label="Our Achievements" id="stats">
            <Stats />
          </section>

          {/* Student Testimonials */}
          <section aria-label="Student Success Stories" id="testimonials">
            <Testimonials />
          </section>

          {/* Contact Information */}
          <section aria-label="Contact Us" id="contact">
            <Contact />
          </section>
        </article>

        {/* Semantic footer */}
        <footer>
          <Footer />
        </footer>
      </main>

      {/* Structured Data for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "At First Educational Network",
            "description": "Leading educational consultancy in Nepal helping students study abroad",
            "url": "https://www.atfirstedu.com",
            "logo": "https://www.atfirstedu.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/atfirstedu",
              "https://www.instagram.com/atfirstedu",
              "https://www.linkedin.com/company/atfirstedu"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Santinagar",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "Nepal"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            },
            "offers": {
              "@type": "Offer",
              "name": "Study Abroad Consultation",
              "description": "Free consultation for studying abroad",
              "price": "0",
              "priceCurrency": "NPR"
            }
          })
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does At First Educational Network provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive study abroad services including university selection, visa assistance, application processing, scholarship guidance, test preparation, and accommodation support."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries can I study in through At First Educational Network?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We help students study in the UK, Germany, France, Australia, Canada, and the USA, with a 95% visa success rate."
                }
              },
              {
                "@type": "Question",
                "name": "What is the visa success rate at At First Educational Network?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain a 95% visa success rate for our students across all destinations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide scholarship assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we help identify and apply for scholarships that match your profile at universities worldwide."
                }
              }
            ]
          })
        }}
      />

      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "At First Educational Network",
            "image": "https://www.atfirstedu.com/logo.png",
            "priceRange": "Free Consultation",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Santinagar",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "Nepal"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.7172",
              "longitude": "85.3240"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "telephone": "+977-9803975717",
            "email": "atfirstktm@gmail.com"
          })
        }}
      />
    </>
  );
}
