"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, PenTool, Target, Zap, Shield, Globe, Smartphone } from "lucide-react"
import Card from "../ui/Card"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generator",
      description:
        "Create compelling marketing copy, blog posts, and social media content with advanced AI algorithms.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Get deep insights into your marketing performance with real-time analytics and predictive modeling.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: PenTool,
      title: "Design Studio",
      description: "Generate stunning visuals, logos, and marketing materials with AI-powered design tools.",
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Identify and reach your ideal customers with precision targeting and behavioral analysis.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "Automate your marketing workflows and optimize campaigns for maximum ROI.",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Monitor and protect your brand reputation across all digital channels with AI monitoring.",
      gradient: "from-indigo-500 to-purple-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand internationally with multi-language support and cultural adaptation tools.",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure perfect mobile experiences with responsive design and mobile-first strategies.",
      gradient: "from-pink-500 to-rose-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-black text-white mb-8 leading-tight">
            Powerful AI Tools for <span className="gradient-text-primary">Modern Marketing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-medium">
            Our comprehensive suite of AI-powered tools helps you create, analyze, and optimize your marketing campaigns
            like never before.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card variant="glass" className="h-full text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg font-medium">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
