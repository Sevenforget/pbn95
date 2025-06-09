import Link from "next/link"
import { posts } from "@/lib/data"

export default function TagCloud() {
  // 모든 포스트에서 태그를 추출하고 중복 제거
  const allTags = posts.flatMap((post) => post.tags || [])
  const uniqueTags = [...new Set(allTags)]

  // 태그별 포스트 수 계산
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // 태그 크기 계산 (포스트 수에 따라)
  const getTagSize = (count: number) => {
    if (count >= 4) return "text-lg font-bold"
    if (count >= 3) return "text-base font-semibold"
    if (count >= 2) return "text-sm"
    return "text-xs"
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">인기 태그</h3>
      <div className="flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <Link
            href={`#${tag}`}
            key={tag}
            className={`${getTagSize(tagCounts[tag])} px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors`}
          >
            #{tag} <span className="text-xs text-purple-600 dark:text-purple-400">({tagCounts[tag]})</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
