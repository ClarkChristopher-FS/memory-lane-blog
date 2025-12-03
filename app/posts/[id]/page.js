// Individual post page template
// Shows one blog post when you click on it

import Link from "next/link";
import { getAllPostIds, getPostData } from "../../../lib/posts";

// Get all post IDs for static generation
export function generateStaticParams() {
  const allIds = getAllPostIds();
  return allIds.map((item) => ({
    id: item.params.id,
  }));
}

export default async function Post({ params }) {
  // Wait for params to resolve
  const resolvedParams = await params;
  const postId = resolvedParams.id;

  // Get the post data
  const postData = getPostData(postId);

  // Convert line breaks to paragraphs
  const paragraphs = postData.content.split("\n\n");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Navigation header */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Post content */}
      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{ fontSize: "36px", marginBottom: "10px", color: "#2c3e50" }}
        >
          {postData.title}
        </h1>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "30px" }}>
          {postData.date}
        </p>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          {paragraphs.map((para, index) => (
            <p key={index} style={{ marginBottom: "20px" }}>
              {para}
            </p>
          ))}
        </div>
      </article>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          padding: "40px 20px",
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>Built with Next.js - Assignment 1.9</p>
      </footer>
    </div>
  );
}
