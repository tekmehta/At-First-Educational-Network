import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Best Study Abroad Consultancy in Nepal | At First Educational Network",
  description: "Leading educational consultancy in Nepal helping students study in UK, Germany, France, Australia & more. Expert visa assistance, university selection & scholarship guidance. 95% visa success rate.",
  keywords: "study abroad, education consultancy nepal, study in UK, study in Germany, study in Australia, overseas education, student visa, IELTS preparation, university admission, scholarship guidance, best education consultancy kathmandu",
  authors: [{ name: "At First Educational Network" }],
  creator: "At First Educational Network",
  publisher: "At First Educational Network",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.atfirstedu.com",
  },
  openGraph: {
    title: "Best Study Abroad Consultancy in Nepal | At First Educational Network",
    description: "Leading educational consultancy in Nepal helping students study in UK, Germany, France, Australia & more. Expert visa assistance, university selection & scholarship guidance. 95% visa success rate.",
    url: "https://www.atfirstedu.com",
    siteName: "At First Educational Network",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "At First Educational Network - Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Study Abroad Consultancy in Nepal | At First Educational Network",
    description: "Leading educational consultancy in Nepal helping students study in UK, Germany, France, Australia & more. Expert visa assistance, university selection & scholarship guidance.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "At First Educational Network",
              "description": "Leading educational consultancy in Nepal helping students study abroad",
              "url": "https://www.atfirstedu.com",
              "logo": "https://www.atfirstedu.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Santinagar",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "postalCode": "44600",
                "addressCountry": "Nepal"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+977-9803975717",
                "contactType": "customer service",
                "email": "atfirstktm@gmail.com",
                "availableLanguage": ["English", "Nepali"]
              },
              "sameAs": [
                "https://www.facebook.com/atfirstedu",
                "https://www.instagram.com/atfirstedu",
                "https://www.linkedin.com/company/atfirstedu"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        <Chatbot />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script>
      </body>
    </html>
  );
}
