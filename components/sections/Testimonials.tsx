"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Carousel from "../ui/Carousel"
import Card from "../ui/Card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "ADmyBRAND AI Suite has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut in half.",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "The AI-powered analytics have given us insights we never had before. Our ROI has improved by 250% since implementing ADmyBRAND tools.",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Design Studio Pro",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "As a creative professional, I was skeptical about AI tools. But ADmyBRAND has enhanced our creativity rather than replaced it. It's like having a brilliant assistant.",
    },
    {
      name: "David Thompson",
      role: "Growth Manager",
      company: "E-commerce Plus",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "The automation features have saved us countless hours while improving our campaign performance. It's the best investment we've made for our marketing team.",
    },
    {
      name: "Lisa Park",
      role: "Brand Manager",
      company: "Fashion Forward",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "ADmyBRAND helped us maintain brand consistency across all channels while scaling our content production. The results speak for themselves.",
    },
  ]

  const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
    <Card className="h-full text-center max-w-3xl mx-auto glass-card-dark">
      <div className="mb-8">
        <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6" />
        <p className="text-xl text-gray-300 leading-relaxed mb-8">"{testimonial.content}"</p>
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-700"
        />
        <div className="text-left">
          <div className="font-semibold text-white text-lg">{testimonial.name}</div>
          <div className="text-gray-400">{testimonial.role}</div>
          <div className="text-blue-400">{testimonial.company}</div>
        </div>
      </div>
    </Card>
  )

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-black to-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            What Our <span className="gradient-text-glow">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel autoPlay interval={6000}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Carousel>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "10,000+", label: "Happy Customers" },
            { number: "99.9%", label: "Customer Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-glow mb-2">{stat.number}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
