import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Col,
  Row,
  Spinner
} from 'react-bootstrap';

import AuthContext from './../../contexts/AuthContext';

const { REACT_APP_NEWS_URL } = process.env;

function News() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const {
    isLoggedIn,
    token,
    logout
  } = useContext(AuthContext);

  useEffect(() => {
    let isSubscribed = true;
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchNews = async () => {
      if (!isLoggedIn) {
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(REACT_APP_NEWS_URL, {
          method: 'get',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          signal
        });

        setIsLoading(false);

        if (!response.ok && response.status === 401) {
          logout();
          return;
        }

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setNews(data);
      } catch (error) {
        if (isSubscribed) {
          setIsLoading(false);
        }

        alert(error.message);
      }
    };

    fetchNews();

    return () => {
      abortController.abort();
      isSubscribed = false;
    };
  }, [isLoggedIn]);

  return (
    <>
      {isLoading && (
        <div className="pt-5 pb-5 d-flex justify-content-center">
          <Spinner
            animation="grow"
            role="status"
          >
            <span className="sr-only">Загрузка...</span>
          </Spinner>
        </div>
      )}
      {!isLoading && news.length > 0 && (
        <Row>
          {news.map(item => (
            <Col
              key={item.id}
              className="mb-4"
              sm="6"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default News;
