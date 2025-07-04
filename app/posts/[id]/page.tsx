import Header from "@/components/header";
import { fetchPostFromApi } from "@/lib/api-service";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://tncantho.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              모든 글 보기
            </Link>

            <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src={
                    post.coverImage ||
                    "/placeholder.svg?height=600&width=1200&query=abstract digital technology"
                  }
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {post.title}
                </h1>

                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author || "관리자"}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {new Date(post.date || new Date()).toLocaleDateString(
                        "ko-KR"
                      )}
                    </span>
                  </div>
                </div>

                <div className="prose prose-purple max-w-none dark:prose-invert">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
              </div>
            </article>

            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                댓글
              </h3>
              <div className="mb-6">
                <textarea
                  placeholder="댓글을 작성해주세요..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                  rows={4}
                />
                <div className="mt-2 flex justify-end">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    댓글 작성
                  </button>
                </div>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-900 text-white py-12 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">
                  <span className="text-purple-400">#</span>태그블로그
                </h2>
                <p className="text-gray-400 mt-2">
                  태그 관련 상품 및 정보 공유 플랫폼
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  소개
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  개인정보처리방침
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  이용약관
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
