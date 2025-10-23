export default function Post({ post, setPostsData, postsData }) {
  const handleDelete = () => {
    setPostsData((prevPostsData) =>
      prevPostsData.filter((item) => item.id !== post.id)
    );
  };

  const handleToggleFavorite = () => {
    setPostsData((prevPostsData) =>
      prevPostsData.map((item) =>
        item.id === post.id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="post">
      <div className="post-header">
        <h1>{post.title}</h1>
        <button
          className={`favorite-btn ${post.isFavorite ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
          title={post.isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {post.isFavorite ? "⭐" : "☆"}
        </button>
      </div>
      <p>{post.content}</p>
      <div className="post-meta">
        <span className="author">{post.author}</span>
        <span className="date">📅 {formatDate(post.date)}</span>
      </div>
      <div className="post-actions">
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
