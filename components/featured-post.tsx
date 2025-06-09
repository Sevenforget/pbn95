import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={post.coverImage || "/placeholder.svg?height=600&width=1200&query=abstract digital technology"}
          alt={post.title}
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-purple-100 mb-6 line-clamp-3 md:line-clamp-4">{post.excerpt}</p>
        <div className="mt-auto flex justify-between items-center">
          <div className="text-sm text-purple-200">
            {post.date} · {post.author}
          </div>
          <Link
            href={`/posts/${post.id}`}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            자세히 보기 →
          </Link>
        </div>
      </div>
    </div>
  )
}
