"use client"

import type React from "react"
import { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, loading, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
      primary: "gradient-primary text-white shadow-lg hover:shadow-xl glow-blue hover:scale-[1.02] focus:ring-blue-400",
      secondary: "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:ring-white",
      outline:
        "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 glow-border hover:scale-[1.02] focus:ring-blue-400",
      ghost: "text-white/70 hover:text-white hover:bg-white/5 hover:scale-[1.02] focus:ring-white/20",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export default Button
