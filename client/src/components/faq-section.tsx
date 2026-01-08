import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border border-secondary rounded-lg overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-between font-semibold text-primary text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`transition-transform transform ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`px-6 py-4 bg-white border-t border-secondary transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'
        }`}
      >
        <p className="text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Find answers to common questions about our care services and how we can help your loved ones.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
