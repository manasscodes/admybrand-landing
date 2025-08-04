"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Users, FileText, BarChart } from "lucide-react"
import Card from "../ui/Card"

export default function PricingCalculator() {
  const [users, setUsers] = useState(5)
  const [content, setContent] = useState(1000)
  const [analytics, setAnalytics] = useState(true)
  const [support, setSupport] = useState("standard")

  const calculatePrice = () => {
    let basePrice = 29

    // User pricing
    if (users > 3) {
      basePrice += (users - 3) * 10
    }

    // Content pricing
    if (content > 5000) {
      basePrice += Math.ceil((content - 5000) / 1000) * 5
    } else if (content > 1000) {
      basePrice += Math.ceil((content - 1000) / 1000) * 3
    }

    // Analytics addon
    if (analytics) {
      basePrice += 20
    }

    // Support addon
    if (support === "priority") {
      basePrice += 30
    } else if (support === "dedicated") {
      basePrice += 100
    }

    return basePrice
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <Calculator className="w-12 h-12 inline-block mr-4 text-blue-600" />
            Pricing <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customize your plan based on your specific needs and see real-time pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Configure Your Plan</h3>

              <div className="space-y-8">
                {/* Users Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <label className="font-medium text-gray-900">Team Members</label>
                    </div>
                    <span className="text-lg font-semibold text-blue-600">{users}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={users}
                    onChange={(e) => setUsers(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>50+</span>
                  </div>
                </div>

                {/* Content Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <label className="font-medium text-gray-900">Monthly Content Pieces</label>
                    </div>
                    <span className="text-lg font-semibold text-blue-600">{content.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={content}
                    onChange={(e) => setContent(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>100</span>
                    <span>50,000+</span>
                  </div>
                </div>

                {/* Analytics Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart className="w-5 h-5 text-blue-600" />
                    <label className="font-medium text-gray-900">Advanced Analytics</label>
                  </div>
                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      analytics ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        analytics ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Support Level */}
                <div>
                  <label className="block font-medium text-gray-900 mb-4">Support Level</label>
                  <div className="space-y-3">
                    {[
                      { value: "standard", label: "Standard Support", description: "Email support within 24 hours" },
                      {
                        value: "priority",
                        label: "Priority Support",
                        description: "Email & chat support within 4 hours",
                      },
                      {
                        value: "dedicated",
                        label: "Dedicated Support",
                        description: "24/7 phone support with dedicated manager",
                      },
                    ].map((option) => (
                      <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="support"
                          value={option.value}
                          checked={support === option.value}
                          onChange={(e) => setSupport(e.target.value)}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Pricing Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Custom Plan</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">${calculatePrice()}</div>
                  <div className="text-gray-600">per month</div>
                </div>

                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Plan</span>
                    <span className="font-medium">$29</span>
                  </div>

                  {users > 3 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Additional Users ({users - 3})</span>
                      <span className="font-medium">${(users - 3) * 10}</span>
                    </div>
                  )}

                  {content > 5000 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Extra Content</span>
                      <span className="font-medium">${Math.ceil((content - 5000) / 1000) * 5}</span>
                    </div>
                  )}

                  {analytics && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Advanced Analytics</span>
                      <span className="font-medium">$20</span>
                    </div>
                  )}

                  {support !== "standard" && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{support === "priority" ? "Priority" : "Dedicated"} Support</span>
                      <span className="font-medium">${support === "priority" ? 30 : 100}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">What's Included:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• {content.toLocaleString()} AI-generated content pieces</li>
                      <li>
                        • {users} team member{users > 1 ? "s" : ""}
                      </li>
                      <li>• {analytics ? "Advanced" : "Basic"} analytics dashboard</li>
                      <li>• {support.charAt(0).toUpperCase() + support.slice(1)} support</li>
                      <li>• API access & integrations</li>
                      <li>• 99.9% uptime guarantee</li>
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
