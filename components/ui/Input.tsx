"use client"

import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-white/90 mb-2">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-700/50 text-white placeholder-zinc-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 hover:border-zinc-600/50",
          error && "border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
