"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
  twinkleSpeed: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 6000)

      const colors = ["rgba(255, 255, 255, ", "rgba(59, 130, 246, ", "rgba(139, 92, 246, ", "rgba(236, 72, 153, "]

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        })
      }

      particlesRef.current = particles
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y += particle.speed
        if (particle.y > canvas.height + particle.size) {
          particle.y = -particle.size
          particle.x = Math.random() * canvas.width
        }

        // Twinkle effect
        particle.opacity += Math.sin(Date.now() * particle.twinkleSpeed) * 0.01
        particle.opacity = Math.max(0.1, Math.min(1, particle.opacity))

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${particle.opacity})`
        ctx.fill()

        // Add glow for larger particles
        if (particle.size > 1.5) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `${particle.color}${particle.opacity * 0.2})`
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" />
}
