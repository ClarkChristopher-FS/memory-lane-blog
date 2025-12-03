// Root layout that wraps all pages
// Sets up the basic HTML structure

export const metadata = {
  title: "Memory Lane Blog",
  description: "A blog about web development and learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
