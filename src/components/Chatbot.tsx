"use client";

import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Knowledge base for common questions and answers
const knowledgeBase = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to At First Educational Network. How can I assist you with your study abroad plans today?"
  },
  {
    keywords: ["services", "offer", "provide", "help with"],
    response: "We offer a comprehensive range of services including university selection, visa assistance, application processing, language preparation, accommodation arrangements, travel support, scholarship guidance, and career counseling."
  },
  {
    keywords: ["countries", "study destinations", "where", "locations"],
    response: "We help students study in various countries including the UK, Germany, France, Australia, Canada, and the USA. Each country has unique advantages in terms of education quality, cost, and post-study opportunities."
  },
  {
    keywords: ["cost", "fee", "expense", "budget", "tuition"],
    response: "The cost of studying abroad varies by country and program. For example, Germany offers tuition-free education at public universities, while the UK may cost between £10,000-£20,000 per year. We can provide detailed cost breakdowns during a consultation."
  },
  {
    keywords: ["scholarship", "financial aid", "funding", "grants"],
    response: "Many universities offer scholarships for international students based on academic merit, financial need, or specific talents. We help identify and apply for scholarships that match your profile to reduce your financial burden."
  },
  {
    keywords: ["visa", "student visa", "visa process", "visa application"],
    response: "The visa process varies by country. We provide comprehensive visa assistance including document preparation, application review, and interview preparation. Our visa success rate is over 95% for our students."
  },
  {
    keywords: ["ielts", "toefl", "language test", "english requirement", "language requirement"],
    response: "Most universities require English proficiency tests like IELTS or TOEFL. We offer preparation courses for these exams with experienced trainers. The typical requirement is an IELTS score of 6.0-6.5 for undergraduate and 6.5-7.0 for postgraduate programs."
  },
  {
    keywords: ["application", "apply", "admission", "process", "how to apply"],
    response: "The application process typically involves selecting universities, preparing documents (transcripts, recommendation letters, statement of purpose), submitting applications, and attending interviews. We guide you through each step to maximize your chances of admission."
  },
  {
    keywords: ["work", "job", "part-time", "employment", "working while studying"],
    response: "Most countries allow international students to work part-time during their studies. For example, the UK allows up to 20 hours per week during term time, while Germany allows 120 full days or 240 half days per year."
  },
  {
    keywords: ["accommodation", "housing", "where to stay", "dormitory", "apartment"],
    response: "We help you find suitable accommodation options including university dormitories, private apartments, or homestays. We consider factors like budget, location, and personal preferences to find the best option for you."
  },
  {
    keywords: ["contact", "office", "location", "address", "phone", "email"],
    response: "You can visit our office at Santinagar, Kathmandu, Nepal. Contact us at +977 9803975717 or email us at atfirstktm@gmail.com. Our office hours are Sunday to Friday, 9:00 AM to 5:00 PM."
  },
  {
    keywords: ["consultation", "appointment", "meeting", "counseling", "advisor"],
    response: "We offer free initial consultations to discuss your study abroad plans. You can book an appointment by calling us, emailing us, or using the contact form on our website."
  },
  {
    keywords: ["about", "company", "at first", "educational network", "who are you"],
    response: "At First Educational Network is a leading educational consultancy established in 2015. We specialize in helping Nepalese students pursue higher education in Europe and other countries worldwide. With over 1000+ successful placements, we pride ourselves on our personalized approach and high visa success rate."
  },
  {
    keywords: ["success rate", "success", "placement", "track record"],
    response: "We have a 95% visa success rate and have helped over 1000 students successfully study abroad. Our students have been placed in prestigious universities across the UK, Germany, France, Australia, Canada, and the USA."
  },
  {
    keywords: ["test prep", "test preparation", "ielts preparation", "toefl preparation", "language courses"],
    response: "We offer comprehensive test preparation courses for IELTS, TOEFL, GRE, GMAT, and other language proficiency exams. Our experienced trainers provide personalized coaching, practice materials, and mock tests to help you achieve your target scores."
  },
  {
    keywords: ["documents", "required documents", "what do i need", "paperwork"],
    response: "For most study abroad applications, you'll need academic transcripts, language proficiency test scores, passport, financial statements, statement of purpose, recommendation letters, and CV. The specific requirements vary by country and university, and we'll guide you through the exact documents needed for your application."
  },
  {
    keywords: ["timeline", "how long", "process time", "duration", "when should i start"],
    response: "The study abroad process typically takes 3-6 months from application to visa approval. We recommend starting at least 6-8 months before your intended start date. For fall (September) intake, you should ideally begin the process by January-February of the same year."
  },
  {
    keywords: ["germany", "study in germany", "german universities"],
    response: "Germany offers tuition-free education at public universities for all international students. The country is known for its excellence in engineering, science, and business programs. You'll need to prove financial resources of approximately €10,332 per year for living expenses and may need to learn basic German depending on your program."
  },
  {
    keywords: ["uk", "united kingdom", "study in uk", "british universities"],
    response: "The UK is home to some of the world's most prestigious universities. Undergraduate programs typically last 3 years, while Master's programs are 1 year. The UK also offers a Graduate Route visa allowing students to stay and work for 2 years after graduation. Tuition fees range from £10,000-£20,000 per year depending on the program."
  },
  {
    keywords: ["france", "study in france", "french universities"],
    response: "France offers high-quality education at affordable tuition fees (€2,770-€3,770 per year at public universities). Paris is home to several world-class institutions. While many programs are taught in French, there's a growing number of English-taught programs, especially at the Master's level."
  },
  {
    keywords: ["australia", "study in australia", "australian universities"],
    response: "Australia offers a high standard of living and education with strong research opportunities. International students can work up to 20 hours per week during term time. After graduation, you can apply for a post-study work visa for 2-4 years depending on your qualification level."
  },
  {
    keywords: ["canada", "study in canada", "canadian universities"],
    response: "Canada is known for its welcoming immigration policies and high-quality education. After completing your studies, you can apply for a Post-Graduation Work Permit for up to 3 years. This can be a pathway to permanent residency through the Express Entry system."
  },
  {
    keywords: ["usa", "united states", "study in usa", "american universities"],
    response: "The USA hosts the largest number of international students worldwide. It offers diverse program options across thousands of institutions. While tuition can be higher than other countries, there are numerous scholarship opportunities. The Optional Practical Training (OPT) allows students to work for 1-3 years after graduation."
  }
];

// Suggested questions organized by topic
const suggestedQuestionsByTopic: Record<string, string[]> = {
  initial: [
    "What services do you offer?",
    "Which countries can I study in?",
    "How much does it cost to study abroad?",
    "What is the application process?",
    "Do you offer scholarship guidance?"
  ],
  services: [
    "Tell me about visa assistance",
    "What is your application process?",
    "Do you help with accommodation?",
    "What language preparation do you offer?",
    "How do you help with university selection?"
  ],
  countries: [
    "Tell me about studying in Germany",
    "What are the benefits of studying in the UK?",
    "How is studying in Canada?",
    "What about Australia for students?",
    "Tell me about France education system"
  ],
  costs: [
    "Are there any scholarships available?",
    "What are the living expenses?",
    "How can I finance my studies?",
    "Are there part-time work opportunities?",
    "What's the application fee?"
  ],
  application: [
    "What documents do I need?",
    "How long does the process take?",
    "What are the language requirements?",
    "Do you help with SOP writing?",
    "When should I start my application?"
  ],
  scholarship: [
    "What types of scholarships are available?",
    "How do I qualify for scholarships?",
    "Do universities offer financial aid?",
    "Are there country-specific scholarships?",
    "What's the success rate for scholarship applications?"
  ],
  default: [
    "Tell me about your success stories",
    "How can I contact your office?",
    "Do you offer test preparation?",
    "What makes At First different?",
    "Can I book a consultation?"
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with your study abroad plans today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>(suggestedQuestionsByTopic.initial);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Function to find the best matching response from the knowledge base
  const findResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for matches in the knowledge base
    for (const item of knowledgeBase) {
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return item.response;
      }
    }
    
    // Default responses if no match is found
    const defaultResponses = [
      "Thank you for your question. Would you like to schedule a free consultation to discuss this in detail?",
      "That's an interesting question. Our education consultants would be happy to provide more information during a personalized consultation.",
      "I'd recommend speaking with one of our expert counselors about this. Would you like us to arrange a call?",
      "For more detailed information on this topic, please consider visiting our office or scheduling a call with our consultants.",
      "We have extensive resources on this topic. Would you like to provide your email so we can send you more information?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Function to determine which suggested questions to show next based on the user's query
  const getNextSuggestions = (userInput: string): string[] => {
    const input = userInput.toLowerCase();
    
    if (input.includes("service") || input.includes("offer") || input.includes("provide") || input.includes("help with")) {
      return suggestedQuestionsByTopic.services;
    } else if (input.includes("countr") || input.includes("where") || input.includes("destination") || input.includes("place")) {
      return suggestedQuestionsByTopic.countries;
    } else if (input.includes("cost") || input.includes("fee") || input.includes("expense") || input.includes("budget") || input.includes("tuition")) {
      return suggestedQuestionsByTopic.costs;
    } else if (input.includes("application") || input.includes("apply") || input.includes("process") || input.includes("how to")) {
      return suggestedQuestionsByTopic.application;
    } else if (input.includes("scholarship") || input.includes("financial aid") || input.includes("funding") || input.includes("grant")) {
      return suggestedQuestionsByTopic.scholarship;
    } else {
      return suggestedQuestionsByTopic.default;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = inputValue;
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInputValue("");

    // Find appropriate response
    const botResponse = findResponse(userMessage);
    
    // Update suggested questions based on user query
    const nextSuggestions = getNextSuggestions(userMessage);
    setCurrentSuggestions(nextSuggestions);

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, isUser: false }]);
    }, 1000);
  };
  
  // Handle suggested question click
  const handleSuggestedQuestion = (question: string) => {
    // Add user message
    setMessages([...messages, { text: question, isUser: true }]);
    
    // Find appropriate response
    const botResponse = findResponse(question);
    
    // Update suggested questions based on user query
    const nextSuggestions = getNextSuggestions(question);
    setCurrentSuggestions(nextSuggestions);

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  // Auto-scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-700 hover:bg-blue-800"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaComments className="text-white text-xl" />
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-blue-700 text-white p-4">
              <h3 className="font-bold">At First Educational Network</h3>
              <p className="text-sm text-blue-100">We're here to help with your queries</p>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? "bg-blue-700 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Show suggested questions */}
              {messages.length > 0 && messages[messages.length - 1].isUser === false && (
                <div className="mt-4 mb-2">
                  <p className="text-xs text-gray-500 mb-2">You might want to ask:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentSuggestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 rounded-r-md hover:bg-blue-800 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot; 