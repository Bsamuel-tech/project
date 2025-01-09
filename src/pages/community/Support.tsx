// import React from 'react';

const Support = () => {
  const faqs = [
    {
      question: "How can I access the courses?",
      answer: "You can access the courses by signing in and navigating to the Courses section on our homepage.",
    },
    {
      question: "Who can I contact for technical support?",
      answer: "For technical issues, please email us at support@geneticedu.com.",
    },
    {
      question: "Can I contribute to the Genetic Community?",
      answer: "Yes, we welcome contributions! Reach out to us via the Community section for more details.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <p className="text-lg text-gray-700 mb-6">
        Need help? Explore our FAQs or contact us for support.
      </p>
      <ul className="space-y-6">
        {faqs.map((faq, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="font-semibold text-indigo-600">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
        <p className="text-lg text-gray-700">
          Email us at{" "}
          <a
            href="mailto:support@geneticedu.com"
            className="text-indigo-500 hover:underline"
          >
            support@geneticedu.com
          </a>{" "}
          for further assistance.
        </p>
      </div>
    </div>
  );
};

export default Support;
