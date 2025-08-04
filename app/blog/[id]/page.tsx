import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Button from "@/components/ui/Button"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing: Trends to Watch in 2024",
    content: `
      <p>Artificial Intelligence is revolutionizing the marketing landscape at an unprecedented pace. As we move through 2024, several key trends are emerging that will shape how businesses connect with their customers.</p>
      
      <h2>1. Hyper-Personalization at Scale</h2>
      <p>AI is enabling marketers to create personalized experiences for millions of customers simultaneously. Machine learning algorithms analyze vast amounts of customer data to deliver content, products, and experiences tailored to individual preferences and behaviors.</p>
      
      <h2>2. Predictive Customer Journey Mapping</h2>
      <p>Advanced AI models can now predict customer behavior with remarkable accuracy, allowing marketers to anticipate needs and optimize touchpoints before customers even realize what they want.</p>
      
      <h2>3. Voice and Conversational AI</h2>
      <p>With the rise of voice assistants and chatbots, conversational AI is becoming a crucial component of customer engagement strategies. Brands are investing heavily in natural language processing to create more human-like interactions.</p>
      
      <h2>Preparing for the Future</h2>
      <p>To stay competitive, businesses must start integrating AI tools into their marketing stack today. The companies that embrace these technologies early will have a significant advantage in the marketplace.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "AI Trends",
  },
  {
    id: 2,
    title: "How to Create Compelling Content with AI: A Complete Guide",
    content: `
      <p>Creating compelling content consistently is one of the biggest challenges marketers face. AI-powered content generation tools are changing the game, but knowing how to use them effectively is key to success.</p>
      
      <h2>Understanding AI Content Generation</h2>
      <p>AI content tools use natural language processing and machine learning to generate human-like text based on prompts and parameters you provide. The key is learning how to craft effective prompts that yield high-quality results.</p>
      
      <h2>Best Practices for AI Content Creation</h2>
      <ul>
        <li>Start with clear, specific prompts</li>
        <li>Provide context and background information</li>
        <li>Specify tone, style, and target audience</li>
        <li>Always review and edit AI-generated content</li>
        <li>Maintain your brand voice and guidelines</li>
      </ul>
      
      <h2>Content Types That Work Well with AI</h2>
      <p>Some content types are particularly well-suited for AI generation, including blog posts, social media content, email campaigns, product descriptions, and ad copy. Each requires different approaches and considerations.</p>
      
      <h2>The Human Touch</h2>
      <p>While AI can generate impressive content, the human element remains crucial. Use AI as a starting point, then add your expertise, insights, and creativity to create truly compelling content that resonates with your audience.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Content Strategy",
  },
  {
    id: 3,
    title: "Measuring ROI from AI Marketing Tools: Key Metrics and KPIs",
    content: `
      <p>Investing in AI marketing tools requires careful measurement to ensure you're getting the return on investment you expect. Here's how to track the metrics that matter most.</p>
      
      <h2>Essential AI Marketing Metrics</h2>
      <p>When evaluating AI marketing tools, focus on metrics that directly impact your business goals. These include conversion rates, customer acquisition costs, lifetime value, and engagement metrics.</p>
      
      <h2>Time and Efficiency Gains</h2>
      <p>One of the most immediate benefits of AI tools is time savings. Track how much time your team saves on content creation, data analysis, and campaign optimization. This translates directly to cost savings and increased productivity.</p>
      
      <h2>Quality Improvements</h2>
      <p>AI tools often improve the quality of your marketing efforts. Measure improvements in content engagement, email open rates, click-through rates, and overall campaign performance compared to pre-AI benchmarks.</p>
      
      <h2>Long-term Value Creation</h2>
      <p>Consider the long-term value AI brings to your organization, including improved customer insights, better targeting capabilities, and enhanced personalization that leads to stronger customer relationships.</p>
      
      <h2>Setting Up Your Measurement Framework</h2>
      <p>Create a comprehensive measurement framework that tracks both quantitative metrics and qualitative improvements. Regular reporting and analysis will help you optimize your AI tool usage and demonstrate value to stakeholders.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Analytics",
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      <Footer />
    </main>
  )
}
