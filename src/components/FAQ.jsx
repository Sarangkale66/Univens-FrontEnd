
const FAQHeader = () => (
  <div className="text-center px-4 mb-10">
    <p className="text-gray-400 text-sm  font-semibold  uppercase">FAQ's</p>
    <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Got Questions? We’ve Got Answers.</h1>
    <p className="text-gray-400 text-sm sm:text-base">Answers to common questions about our services, processes, and what sets us apart.</p>
  </div>
);

const FAQItem = ({ question }) => (
  <div className="bg-gray-800 rounded-lg p-4 mb-4 flex justify-between items-center">
    <p className="text-gray-300 text-sm sm:text-base">{question}</p>
    <button className="text-blue-400 font-bold text-lg">+</button>
  </div>
);

const FAQSection = () => (
  <div className="px-4 mb-10">
    <FAQItem question="How quickly can I be matched with an expert?" />
    <FAQItem question="What industries do you support?" />
    <FAQItem question="Is there a long-term commitment?" />
  </div>
);

const FAQFooter = () => (
  <div className="text-center px-4">
    <p className="text-gray-400 text-sm sm:text-base mb-4">Still Have a Question</p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600">Ask Question</button>
  </div>
);

const FAQ = () => (
  <div id="faq" className=" text-white min-h-screen py-8">
    <div className="container mx-auto">
      <FAQHeader />
      <FAQSection />
      <FAQFooter />
    </div>
  </div>
);

export default FAQ;
