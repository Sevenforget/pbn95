import { posts } from "@/lib/data"
import Header from "@/components/header"
import BlogCard from "@/components/blog-card"
import TagCloud from "@/components/tag-cloud"
import FeaturedPost from "@/components/featured-post"

export default function Home() {
  // 첫 번째 포스트를 피처드 포스트로 사용
  const featuredPost = posts[0]
  // 나머지 포스트들
  const otherPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* 피처드 포스트 */}
        <section className="mb-16">
          <FeaturedPost post={featuredPost} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 메인 콘텐츠 영역 */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">최신 글</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-8">
            <TagCloud />

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">소개</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                태그블로그는 NFC, RFID 등 태그 관련 기술과 제품에 대한 정보를 공유하는 블로그입니다.
              </p>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  태그 기술에 관심이 있으신가요? 최신 정보를 받아보세요!
                </p>
                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="이메일 주소"
                    className="w-full px-3 py-2 text-sm border border-purple-300 dark:border-purple-700 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                    구독하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-purple-400">#</span>태그블로그
              </h2>
              <p className="text-gray-400 mt-2">태그 관련 상품 및 정보 공유 플랫폼</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                소개
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                문의하기
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2023 태그블로그. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
