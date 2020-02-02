import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="container">
      <h1>Страница не найдена</h1>
      <p>
        <Link
          title="Вернуться на главную"
          to="/"
        >
          Вернуться на главную
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
