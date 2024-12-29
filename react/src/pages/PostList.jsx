import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "../components/PostItem";
// import { useStateContext } from "../ContextProvider";

export default function PostList() {
  // const { posts } = useStateContext()
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts => {
        setPostList(posts);
    });
  }, []);
  function onDelete(post) {
    setPostList(postList.filter(p => p.id !== post.id));
  };
  return (
    <>
      <div>
        <Link to="/new" className="btn btn-success">
          Add new
        </Link>
        { postList.map(post => <PostItem key={post.id} post={post} onDelete={onDelete} />) }
      </div>

      {/*<div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        </div>*/}
    </>
  );
}
