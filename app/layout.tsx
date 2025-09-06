import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "태그블로그 - 태그 관련 상품 및 정보 공유 플랫폼",
  description:
    "NFC, RFID 등 태그 관련 기술과 제품에 대한 정보를 공유하는 블로그입니다.",
  generator: "v0.dev",
  verification: {
    other: {
      "naver-site-verification": "45e0f9cdee52c981b73dd51847b5e5790820df34",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
