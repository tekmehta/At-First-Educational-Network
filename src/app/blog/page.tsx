import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right University for Your Study Abroad Journey",
    slug: "how-to-choose-right-university",
    excerpt:
      "Selecting the right university is one of the most crucial decisions in your study abroad journey. This guide will help you navigate the process and make an informed choice.",
    image: "/blog/university-selection.jpg",
    date: "March 10, 2023",
    author: "Rajesh Sharma",
    category: "Study Tips",
    tags: ["University Selection", "Study Abroad", "Decision Making"],
  },
  {
    id: 2,
    title: "Complete Guide to Student Visa Application Process for European Countries",
    slug: "student-visa-application-guide-europe",
    excerpt:
      "Navigating the visa application process can be complex. This comprehensive guide covers everything you need to know about applying for student visas in European countries.",
    image: "/blog/visa-application.jpg",
    date: "February 15, 2023",
    author: "Anita Gurung",
    category: "Visa Guide",
    tags: ["Visa Application", "Europe", "Student Visa"],
  },
  {
    id: 3,
    title: "Scholarship Opportunities for Nepalese Students in 2023",
    slug: "scholarship-opportunities-nepalese-students",
    excerpt:
      "Discover the top scholarship opportunities available for Nepalese students planning to study abroad in 2023, including application tips and deadlines.",
    image: "/blog/scholarships.jpg",
    date: "January 25, 2023",
    author: "Sunil Thapa",
    category: "Scholarships",
    tags: ["Scholarships", "Financial Aid", "Study Abroad"],
  },
  {
    id: 4,
    title: "Life as a Nepalese Student in Germany: What to Expect",
    slug: "life-nepalese-student-germany",
    excerpt:
      "From cultural adjustments to academic expectations, this post shares insights into what Nepalese students can expect when studying in Germany.",
    image: "/blog/germany-student-life.jpg",
    date: "December 12, 2022",
    author: "Priya Patel",
    category: "Student Life",
    tags: ["Germany", "Student Life", "Cultural Adjustment"],
  },
  {
    id: 5,
    title: "Top 10 In-Demand Courses for International Students in 2023",
    slug: "top-in-demand-courses-2023",
    excerpt:
      "Explore the most sought-after academic programs that offer excellent career prospects for international students in the current global job market.",
    image: "/blog/in-demand-courses.jpg",
    date: "November 30, 2022",
    author: "Rajesh Sharma",
    category: "Career Guidance",
    tags: ["Courses", "Career Prospects", "Job Market"],
  },
  {
    id: 6,
    title: "How to Prepare for IELTS: Tips from Top Scorers",
    slug: "ielts-preparation-tips",
    excerpt:
      "Get valuable insights and practical tips from students who achieved high scores in IELTS, an essential English proficiency test for studying abroad.",
    image: "/blog/ielts-preparation.jpg",
    date: "October 18, 2022",
    author: "Anita Gurung",
    category: "Test Preparation",
    tags: ["IELTS", "English Proficiency", "Test Preparation"],
  },
  {
    id: 7,
    title: "Budgeting for Your Study Abroad Experience: A Comprehensive Guide",
    slug: "budgeting-study-abroad",
    excerpt:
      "Learn how to manage your finances effectively while studying abroad, from tuition fees and accommodation to daily expenses and emergency funds.",
    image: "/blog/budgeting.jpg",
    date: "September 5, 2022",
    author: "Sunil Thapa",
    category: "Financial Planning",
    tags: ["Budgeting", "Financial Planning", "Study Abroad"],
  },
  {
    id: 8,
    title: "Post-Study Work Opportunities in Different Countries: A Comparison",
    slug: "post-study-work-opportunities",
    excerpt:
      "Compare the post-graduation work permit options and career opportunities for international students in popular study destinations like the UK, Canada, Australia, and more.",
    image: "/blog/post-study-work.jpg",
    date: "August 22, 2022",
    author: "Rajesh Sharma",
    category: "Career Guidance",
    tags: ["Post-Study Work", "Career Opportunities", "Immigration"],
  },
];

const categories = [
  "Study Tips",
  "Visa Guide",
  "Scholarships",
  "Student Life",
  "Career Guidance",
  "Test Preparation",
  "Financial Planning",
  "Immigration",
];

const popularTags = [
  "Study Abroad",
  "Scholarships",
  "Visa Application",
  "University Selection",
  "IELTS",
  "Career Opportunities",
  "Student Life",
  "Financial Planning",
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-700">Blog</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with the latest insights, tips, and guides on studying abroad, visa processes, and student life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FaCalendarAlt className="mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <FaUser className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FaTag className="mr-2" />
                        <span>{post.category}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                      >
                        Read More
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
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-blue-700 bg-blue-700 rounded-md text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-blue-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.id} className="flex items-start">
                      <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest study abroad opportunities, visa updates, and educational insights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 