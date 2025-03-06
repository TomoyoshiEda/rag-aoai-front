import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAG TEST",
  description: "RAGのテスト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
