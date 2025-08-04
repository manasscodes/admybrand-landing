"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-white/20">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Powered by Advanced AI</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-black text-white text-shadow leading-none mb-8">
            Transform Your Marketing with <span className="gradient-text-primary">AI Intelligence</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Revolutionize your marketing strategy with our comprehensive AI suite. Generate compelling content, analyze
            data insights, and optimize campaigns with cutting-edge artificial intelligence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="xl" className="group shadow-2xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => setShowVideo(true)} className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10M+", label: "Content Pieces Generated" },
              { number: "500K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-black gradient-text-primary mb-2">{stat.number}</div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Demo Video Modal */}
      <Modal isOpen={showVideo} onClose={() => setShowVideo(false)} title="Product Demo">
        <div className="aspect-video bg-zinc-900 rounded-lg flex items-center justify-center">
          <video controls className="w-full h-full rounded-lg" poster="/demo-thumbnail.jpg">
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </section>
  )
}
