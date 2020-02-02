import React, { createContext, useState } from 'react';

const PostsContext = createContext([]);

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{
      posts,
      setPosts
    }}>
      {children}
    </PostsContext.Provider>
  );
}

export {
  PostsProvider
};

export default PostsContext;