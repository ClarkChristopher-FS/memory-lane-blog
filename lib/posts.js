// Blog posts data
// Simple array of posts - no file reading needed

const posts = [
  {
    id: "learning-mongodb",
    title: "Learning MongoDB and Express",
    date: "2025-12-02",
    content: `I've been learning MongoDB and Express.js in my web development course, and it's been really interesting to see how databases work with Node.js.

One thing that clicked for me was understanding how Mongoose works as an Object Document Mapper. It helps translate between JavaScript objects and MongoDB documents, which makes it way easier to work with data.

I also learned about RESTful APIs and how to create endpoints for CRUD operations. Creating GET, POST, PATCH, and DELETE routes makes sense now, especially when you see how they connect to database operations.

The relationship between collections using populate was a bit tricky at first, but once I got it, it made sense why you'd want to reference one collection from another.`,
  },
  {
    id: "postman-resource",
    title: "Postman for API Testing",
    date: "2025-12-02",
    content: `Postman has been super helpful for testing my API endpoints during development.

Before using Postman, I was trying to test everything by writing code or using curl commands, which was slow and annoying. Postman makes it easy to send requests and see responses right away.

I really like how you can save requests in collections and use variables for things like IDs. It saves a lot of time when you're testing the same endpoints over and over.

Writing tests in Postman was also a game changer. Being able to automatically check status codes and response data makes debugging way faster.

Overall, Postman is definitely a tool I'll keep using as I build more APIs.`,
  },
  {
    id: "static-site-deployment",
    title: "Deploying Static Sites to GitHub Pages",
    date: "2025-12-02",
    content: `I just finished learning how to deploy static sites using Next.js and GitHub Pages.

The process is pretty straightforward once you understand it. You build your Next.js site with static export, which creates HTML files that can be served directly without a server.

One thing I learned is that GitHub Pages can serve files from different folders. For this project, I had to move the static files to the root directory so GitHub Pages could find them easily.

The static export feature in Next.js is really cool - it takes all your React components and turns them into plain HTML, CSS, and JavaScript that can be hosted anywhere.

I can see how this would be useful for portfolio sites or documentation pages where you don't need server-side functionality.`,
  },
];

// Get all posts sorted by date
function getAllPosts() {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get a single post by ID
function getPostData(id) {
  return posts.find((post) => post.id === id);
}

// Get all post IDs for static paths
function getAllPostIds() {
  return posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
}

module.exports = { getAllPosts, getPostData, getAllPostIds };
