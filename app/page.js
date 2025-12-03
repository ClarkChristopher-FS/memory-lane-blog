// Home page that shows all blog posts
// Gets the list of posts and displays them

import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  // Get all posts sorted by date
  const allPosts = getAllPosts();

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
            Memory Lane
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <h1
          style={{ fontSize: "36px", marginBottom: "10px", color: "#2c3e50" }}
        >
          My Blog
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
          Thoughts on web development and learning
        </p>

        {/* List of all posts */}
        <div>
          {allPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "white",
                padding: "30px",
                marginBottom: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <Link
                href={`/posts/${post.id}`}
                style={{
                  textDecoration: "none",
                  color: "#2c3e50",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                    color: "#2c3e50",
                  }}
                >
                  {post.title}
                </h2>
              </Link>
              <p style={{ color: "#888", fontSize: "14px", marginTop: "10px" }}>
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </main>

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
