"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import Button from "../ui/Button"
import Card from "../ui/Card"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "5,000 AI-generated content pieces",
        "Basic analytics dashboard",
        "Email support",
        "3 team members",
        "Standard templates",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing marketing teams",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "25,000 AI-generated content pieces",
        "Advanced analytics & insights",
        "Priority support",
        "10 team members",
        "Custom templates",
        "A/B testing tools",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited AI-generated content",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Unlimited team members",
        "White-label solutions",
        "Advanced integrations",
        "Custom AI training",
        "SLA guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-gray-900/50 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Choose Your <span className="gradient-text-glow">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features with varying limits and advanced
            capabilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? "text-white font-medium" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                isAnnual ? "gradient-glow" : "bg-gray-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-white font-medium" : "text-gray-400"}`}>Annual</span>
            {isAnnual && <span className="text-sm text-green-400 font-medium">Save 17%</span>}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card className={`h-full glass-card-dark ${plan.popular ? "glow-border scale-105" : ""}`}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-400 mb-8 text-lg">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold gradient-text-glow">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 text-lg">/{isAnnual ? "year" : "month"}</span>
                  </div>
                  <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-6 h-6 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-4">
            Need a custom solution? We offer enterprise packages tailored to your needs.
          </p>
          <Button variant="ghost">Contact Sales</Button>
        </motion.div>
      </div>
    </section>
  )
}
