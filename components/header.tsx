import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('/placeholder.svg?height=600&width=1200&query=abstract digital tag technology pattern')",
          opacity: 0.4,
        }}
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white tracking-tight">
                <span className="text-purple-300">#</span>태그블로그
              </span>
            </Link>
            <p className="text-purple-200 mt-1">태그 관련 상품 및 정보 공유 플랫폼</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="검색..."
                className="bg-white/10 text-white placeholder-purple-200 border border-purple-400/30 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-200" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors">
                홈
              </Link>
              <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                카테고리
              </Link>
              <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                태그
              </Link>
              <Link href="#" className="text-white hover:text-purple-300 transition-colors">
                소개
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
