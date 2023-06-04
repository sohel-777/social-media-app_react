import React from 'react';
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);

  if (!post) return <h1>Loading...</h1>

  return (
    <>
      <h2>Details Page For Post With ID {post.id}</h2>

      <div className="item" >
        <img id='img' src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
        <h3>User ID: {post.userId}</h3>
        <h3>Title: {post.title}</h3>
        <h3>Body: {post.body}</h3>
      </div>
    </>

  )
}

export default DetailsPage
