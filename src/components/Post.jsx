export default function Post({
  post,
  setPostsData,
  postsData,
}) {
  const handleDelete = () => {
    // postsData = postsData.filter(
    //   (item) => item.id !== post.id
    // );

    // setPostsData(postsData);

    setPostsData((prevPostsData) =>
      prevPostsData.filter(
        (item) => item.id !== post.id
      )
    );
  };

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <span>{post.author}</span>
      <button
        style={{ backgroundColor: "red" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
