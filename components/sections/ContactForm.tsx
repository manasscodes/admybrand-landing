"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Card from "../ui/Card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual Supabase integration
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send data to Supabase
      console.log("Form submitted:", formData)

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gradient-to-b from-black to-gray-900/50 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center glass-card-dark">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">Thank You!</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900/50 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Get in <span className="gradient-text-glow">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to transform your marketing? Let's talk about how ADmyBRAND can help your business grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass-card-dark">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Enter your email address"
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-900/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 transition-all duration-200 backdrop-blur-sm resize-none ${
                    errors.message ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  placeholder="Tell us about your project and how we can help..."
                  required
                />
                {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
