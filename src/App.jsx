import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import ThemeToggle from "./components/ThemeToggle";
import posts from "./data/posts.json";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [postsData, setPostsData] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        date: new Date().toISOString().split("T")[0],
        isFavorite: false,
        id: Math.random(),
      },
    ]);

    // Clear form and close modal
    setTitle("");
    setContent("");
    setAuthor("");
    setShowModal(false);
  };

  // Filter posts based on search term and favorites
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFavorites = !filterFavorites || post.isFavorite;

    return matchesSearch && matchesFavorites;
  });

  // Get statistics
  const totalPosts = postsData.length;
  const favoritePosts = postsData.filter((post) => post.isFavorite).length;

  return (
    <div className="container">
      <ThemeToggle />
      <h1 className="text-center mb-8">📝 Blog Posts</h1>

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">{totalPosts}</span>
          <span className="stat-label">Total Posts</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{favoritePosts}</span>
          <span className="stat-label">Favorites</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{filteredPosts.length}</span>
          <span className="stat-label">Showing</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button
          className={`filter-btn ${filterFavorites ? "active" : ""}`}
          onClick={() => setFilterFavorites(!filterFavorites)}
        >
          ⭐ {filterFavorites ? "Show All" : "Favorites Only"}
        </button>
      </div>

      {/* Add New Post Button */}
      <div className="add-post-container">
        <button className="add-post-btn" onClick={() => setShowModal(true)}>
          ✨ Add New Post
        </button>
      </div>

      {filteredPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          setPostsData={setPostsData}
          postsData={postsData}
        />
      ))}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Post</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
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
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
