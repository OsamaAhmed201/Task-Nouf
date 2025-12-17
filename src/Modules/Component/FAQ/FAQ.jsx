import { useState } from 'react';
import './FAQ.css'
import { HiPlus, HiMinus } from "react-icons/hi";
const faqs = [
  {
    question: "Does the solution support multiple languages and dialects...?",
    answer:"Yes. Our system provides a lightweight API and SDKs that can be integrated into websites, mobile apps, and e-commerce platforms with minimal development effort.",
  },
  {
    question: "Is the voice assistant easy to integrate into our existing platform ?",
    answer:
      "Yes. Our system provides a lightweight API and SDKs that can be integrated into websites, mobile apps, and e-commerce platforms with minimal development effort.",
  },
  {
    question: "Is voice data stored or processed securely...?",
    answer: "Yes. Our system provides a lightweight API and SDKs that can be integrated into websites, mobile apps, and e-commerce platforms with minimal development effort.",
  },
];
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
return (
    <section className="min-h-screen bg-black px-6 py-20">
      <div className="max-w-4xl mx-auto">

  
        <p className="text-cyan-500 mb-6">FAQ’s</p>

    
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-6 transition`}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className={`text-sm md:text-base font-medium ${
                      isOpen ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span className="text-cyan-400 text-xl">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && item.answer && (
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
