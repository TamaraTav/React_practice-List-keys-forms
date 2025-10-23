export default function Post({ post, setPostsData, postsData }) {
  const handleDelete = () => {
    // postsData = postsData.filter(
    //   (item) => item.id !== post.id
    // );

    // setPostsData(postsData);

    setPostsData((prevPostsData) =>
      prevPostsData.filter((item) => item.id !== post.id)
    );
  };

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <span className="author">{post.author}</span>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
