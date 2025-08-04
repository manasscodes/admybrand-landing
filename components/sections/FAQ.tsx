"use client"

import { motion } from "framer-motion"
import FAQAccordion from "../ui/FAQAccordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "How does the AI content generation work?",
      answer:
        "Our AI uses advanced natural language processing and machine learning algorithms trained on millions of high-quality marketing materials. Simply provide a brief description or keywords, and our AI will generate compelling, brand-consistent content tailored to your needs.",
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer:
        "Yes! ADmyBRAND offers seamless integrations with over 50 popular marketing platforms including HubSpot, Salesforce, Google Analytics, Facebook Ads, and many more. Our API also allows for custom integrations.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership of all content created.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide comprehensive support including 24/7 chat support, email support, extensive documentation, video tutorials, and webinar training sessions. Enterprise customers also get dedicated account managers and priority support.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.",
    },
  ]

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-gray-900/50 to-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Frequently Asked <span className="gradient-text-glow">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FAQAccordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
