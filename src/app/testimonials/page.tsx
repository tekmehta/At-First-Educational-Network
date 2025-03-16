import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    university: "University of Manchester, UK",
    image: "/testimonials/student1.jpg",
    program: "MSc Computer Science",
    year: "2022",
    quote:
      "At First Educational Network made my dream of studying in the UK a reality. Their guidance throughout the application and visa process was invaluable. I'm now pursuing my Master's degree at the University of Manchester!",
    longQuote:
      "I had always dreamed of studying abroad, but the process seemed overwhelming. At First Educational Network guided me through every step, from selecting the right university to preparing for my visa interview. Their counselors were knowledgeable, patient, and genuinely cared about my success. Thanks to their support, I secured admission to the University of Manchester with a partial scholarship. I'm now thriving in my MSc Computer Science program and have made friends from around the world. I would highly recommend At First to any Nepalese student looking to study abroad.",
  },
  {
    id: 2,
    name: "Priya Patel",
    university: "Technical University of Munich, Germany",
    image: "/testimonials/student2.jpg",
    program: "BSc Mechanical Engineering",
    year: "2021",
    quote:
      "I was confused about which country to choose for my engineering degree. The team at At First helped me understand that Germany was perfect for my goals. They assisted with everything from university selection to visa application.",
    longQuote:
      "When I first visited At First Educational Network, I was unsure about which country would be best for my engineering studies. Their counselors took the time to understand my academic background, career goals, and budget constraints. They explained the benefits of studying in Germany, particularly the tuition-free education and strong focus on engineering. The language preparation courses they provided were excellent, helping me achieve the required German proficiency level. Throughout the application process, they were always available to answer my questions and address my concerns. Now, I'm studying Mechanical Engineering at TU Munich and couldn't be happier with my decision. Thank you, At First, for your guidance and support!",
  },
  {
    id: 3,
    name: "Rohan Thapa",
    university: "University of Toronto, Canada",
    image: "/testimonials/student3.jpg",
    program: "MBA",
    year: "2023",
    quote:
      "The counselors at At First Educational Network are true professionals. They guided me through every step of my application to Canadian universities and helped me secure a scholarship. I'm forever grateful!",
    longQuote:
      "After completing my undergraduate degree in Nepal, I wanted to pursue an MBA from a reputable university abroad. At First Educational Network was recommended to me by a friend, and I'm so glad I chose them. Their counselors helped me identify universities that matched my profile and offered good scholarship opportunities. They reviewed my statement of purpose multiple times and conducted mock interviews to prepare me for university and visa interviews. Thanks to their guidance, I not only got admitted to the University of Toronto but also received a substantial scholarship. The pre-departure orientation they provided was also very helpful in preparing me for life in Canada. I highly recommend At First to anyone looking to study abroad.",
  },
  {
    id: 4,
    name: "Sita Gurung",
    university: "Sorbonne University, France",
    image: "/testimonials/student4.jpg",
    program: "MA International Relations",
    year: "2022",
    quote:
      "Studying in France seemed like an impossible dream until I met the team at At First. They helped me with language preparation, application process, and cultural orientation. Now I'm thriving at Sorbonne University!",
    longQuote:
      "I had always been fascinated by French culture and wanted to study International Relations in France, but I was concerned about the language barrier and the complex application process. At First Educational Network made this journey possible for me. They enrolled me in their French language course and connected me with alumni who had studied in France. Their counselors guided me through the Campus France procedure and helped me prepare all the necessary documents. They even assisted me in finding affordable accommodation in Paris. Now, I'm studying at the prestigious Sorbonne University and experiencing the rich cultural life of France. I'm grateful to At First for their comprehensive support and for helping me turn my dream into reality.",
  },
  {
    id: 5,
    name: "Anish Rai",
    university: "University of Melbourne, Australia",
    image: "/testimonials/student5.jpg",
    program: "MSc Environmental Science",
    year: "2023",
    quote:
      "At First Educational Network provided exceptional guidance for my Australian study journey. Their expertise in the visa process and scholarship applications was crucial to my success.",
    longQuote:
      "When I decided to pursue Environmental Science in Australia, I had limited knowledge about the application process and visa requirements. At First Educational Network's counselors were incredibly knowledgeable and supportive throughout my journey. They helped me shortlist universities based on my research interests and guided me through the complex scholarship application process. Their IELTS preparation course was excellent, helping me achieve a band score of 7.5. The visa application support they provided was detailed and thorough, resulting in a smooth approval process. Now at the University of Melbourne, I'm enjoying world-class education and research opportunities. I'm thankful to At First for their professional guidance and continuous support even after I arrived in Australia.",
  },
  {
    id: 6,
    name: "Maya Tamang",
    university: "Ludwig Maximilian University of Munich, Germany",
    image: "/testimonials/student6.jpg",
    program: "PhD Physics",
    year: "2021",
    quote:
      "As a PhD aspirant, I needed specialized guidance. At First Educational Network connected me with the right professors and helped me secure funding for my research in Germany.",
    longQuote:
      "Pursuing a PhD abroad requires specialized guidance, and At First Educational Network exceeded my expectations in this regard. Their counselors helped me identify potential supervisors whose research aligned with my interests and guided me in crafting compelling research proposals. They also assisted me in applying for various research grants and scholarships. The German language courses they offered were tailored to academic needs, which proved very helpful. Their support with the blocked account process and visa application was meticulous and efficient. Now, I'm conducting research in Theoretical Physics at LMU Munich with full funding. I highly recommend At First to anyone looking to pursue higher education abroad, especially research degrees.",
  },
  {
    id: 7,
    name: "Rajesh Shrestha",
    university: "HEC Paris, France",
    image: "/testimonials/student7.jpg",
    program: "MSc Finance",
    year: "2022",
    quote:
      "The team at At First helped me get into one of the top business schools in Europe. Their insights into the application process and interview preparation were invaluable.",
    longQuote:
      "Getting into a top business school like HEC Paris seemed like a distant dream until I consulted with At First Educational Network. Their counselors had in-depth knowledge about business school applications and requirements. They helped me highlight my strengths in my application and prepare for the rigorous interview process. The personalized statement of purpose they helped me craft truly reflected my aspirations and stood out from other applications. Their guidance on securing recommendation letters and preparing for standardized tests was also extremely helpful. Thanks to At First, I'm now studying Finance at one of the most prestigious business schools in Europe. Their professional approach and commitment to student success make them the best educational consultancy in Nepal.",
  },
  {
    id: 8,
    name: "Nisha Adhikari",
    university: "University of British Columbia, Canada",
    image: "/testimonials/student8.jpg",
    program: "BSc Computer Science",
    year: "2023",
    quote:
      "As a female student pursuing Computer Science, At First Educational Network provided me with tailored guidance and connected me with alumni who shared similar experiences.",
    longQuote:
      "When I decided to pursue Computer Science abroad, I was looking for guidance that understood the unique challenges faced by female students in this field. At First Educational Network not only provided excellent academic and visa counseling but also connected me with female alumni who had successfully completed similar programs. Their counselors helped me identify universities with strong support systems for women in STEM and guided me through the application process. The scholarship application support they provided was instrumental in securing financial aid. Their pre-departure orientation covered important aspects of student life in Canada, including safety and cultural adjustment. Now at UBC, I'm thriving in my program and actively participating in women in tech initiatives. I'm grateful to At First for their holistic approach to student counseling.",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-700">Stories</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Hear from our students who successfully achieved their dreams of studying abroad with our guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-blue-50 p-8 flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                    <p className="text-blue-700 font-medium text-sm mb-1">{testimonial.program}</p>
                    <p className="text-gray-600 text-sm mb-4">{testimonial.university}</p>
                    <p className="text-gray-500 text-sm">Class of {testimonial.year}</p>
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <div className="relative">
                      <FaQuoteLeft className="text-blue-100 text-6xl absolute top-0 left-0" />
                      <div className="relative z-10 pl-8 pt-6">
                        <p className="text-gray-700 text-lg mb-6 italic">
                        {testimonial.longQuote}
                        </p>
                        
                        <div className="flex items-center">
                          <div className="h-1 w-16 bg-blue-700 mr-4"></div>
                          <p className="text-gray-500">Student Testimonial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Join hundreds of successful students who achieved their dreams of studying abroad with At First Educational Network.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 