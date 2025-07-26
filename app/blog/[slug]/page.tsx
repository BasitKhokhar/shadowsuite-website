import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"
import BlogDetailHero from "@/components/blog-detail-hero"
import BlogDetailContent from "@/components/blog-detail-content"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogDetailHero title={post.title} date={post.date} author={post.author} />
      <BlogDetailContent content={post.content} />
    </>
  )
}
