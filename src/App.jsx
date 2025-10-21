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
    title:
      "Understanding Asynchronous Programming",
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
  const [postsData, setPostsData] =
    useState(posts);

  const handleSubmit = (event) => {
    event.preventDefault();

    // setPostsData([
    //   ...postsData,
    //   {
    //     title,
    //     content,
    //     author,
    //     id: Math.random(),
    //   },
    // ]);

    setPostsData((prevPosts) => [
      ...prevPosts,
      {
        title,
        content,
        author,
        id: Math.random(),
      },
    ]);
  };

  return (
    <>
      {postsData.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          setPostsData={setPostsData}
          postsData={postsData}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="">Content</label>
          <input
            type="text"
            onChange={(event) =>
              setContent(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="">Author</label>
          <input
            type="text"
            onChange={(event) =>
              setAuthor(event.target.value)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
