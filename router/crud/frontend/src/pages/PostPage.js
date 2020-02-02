import React, { useContext } from 'react';

import PostsContext from './../contexts/PostsContext';
import Post from './../components/Post';

function PostPage({ match }) {
  const { posts } = useContext(PostsContext);
  const { id } = match.params;
  const post = posts.find(item => item.id === parseInt(id, 10));

  return (
    <div className="container">
      {post ? (
        <Post
          created={post.created}
          content={post.content}
          id={post.id}
        />
      ) : (
        <p>Пост не найден</p>
      )}
    </div>
  );
}

export default PostPage;
