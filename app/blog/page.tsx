"use client"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Card from "@/components/ui/Card"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing: Trends to Watch in 2024",
    excerpt:
      "Discover the latest AI marketing trends that will shape the industry and how to prepare your business for the future.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Trends",
  },
  {
    id: 2,
    title: "How to Create Compelling Content with AI: A Complete Guide",
    excerpt:
      "Learn proven strategies for using AI to create engaging, high-converting content that resonates with your audience.",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Content Strategy",
  },
  {
    id: 3,
    title: "Measuring ROI from AI Marketing Tools: Key Metrics and KPIs",
    excerpt: "Understand which metrics matter most when evaluating the success of your AI marketing investments.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Analytics",
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ADmyBRAND <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI-powered marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group cursor-pointer">
                <Link href={`/blog/${post.id}`}>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
