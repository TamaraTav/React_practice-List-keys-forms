import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

//list and keys

const posts = [
  {
    id: 1,
    author: "John Doe",
    title: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile language used for both front-end and back-end development.",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Understanding Asynchronous Programming",
    content:
      "Asynchronous programming allows for non-blocking operations in JavaScript.",
  },
  {
    id: 3,
    author: "Alex Johnson",
    title: "Mastering ES6 Features",
    content:
      "ES6 introduced many new features like arrow functions, classes, and template literals.",
  },
  {
    id: 4,
    author: "Emily Davis",
    title: "A Guide to Modern Web Development",
    content:
      "Modern web development involves frameworks like React, Angular, and Vue.js.",
  },
];

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [postsData, setPostsData] = useState(posts);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim() || !author.trim()) {
      return;
    }

    setPostsData((prevPosts) => [
      ...prevPosts,
      {
        title: title.trim(),
        content: content.trim(),
        author: author.trim(),
        id: Math.random(),
      },
    ]);

    // Clear form
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="container">
      <h1 className="text-center mb-8">📝 Blog Posts</h1>

      {postsData.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          setPostsData={setPostsData}
          postsData={postsData}
        />
      ))}

      <div className="form-container">
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="Enter post title..."
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              id="content"
              type="text"
              value={content}
              placeholder="Enter post content..."
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              placeholder="Enter author name..."
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
