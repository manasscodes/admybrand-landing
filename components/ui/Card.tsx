"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "glass" | "subtle"
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = "default", hover = true, ...props }, ref) => {
    const baseClasses = "rounded-2xl p-6 transition-all duration-300"

    const variants = {
      default: "bg-zinc-900/50 border border-zinc-800/50 shadow-2xl",
      glass: "glass-card",
      subtle: "glass-card-subtle shadow-xl",
    }

    const hoverClasses = hover ? "hover:shadow-2xl hover:-translate-y-1 hover:glow-border" : ""

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, variants[variant], hoverClasses, className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

Card.displayName = "Card"

export default Card
