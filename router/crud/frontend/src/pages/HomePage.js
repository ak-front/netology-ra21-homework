import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import { Link } from 'react-router-dom';

import PostsContext from './../contexts/PostsContext';
import Posts from './../components/Posts';

const { REACT_APP_POSTS_URL } = process.env;

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setIsLoading(true);

    const fetchPosts = async () => {
      try {
        const response = await fetch(REACT_APP_POSTS_URL, {signal});

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchPosts();

    return () => {
      setIsLoading(false);
      abortController.abort();
    };
  }, []);

  return (
    <div className="container">
      <div className="panel">
        <Link
          className="button button--blue"
          to="posts/new"
        >
          Создать пост
        </Link>
      </div>
      {isLoading ? (
        <p>Загружаем...</p>
      ) : (
        <Posts list={posts} />
      )}
    </div>
  );
}

export default HomePage;

