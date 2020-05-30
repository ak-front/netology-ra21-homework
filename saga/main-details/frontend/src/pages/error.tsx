import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { INDEX_PAGE } from '../constants/routes';

interface Props {}

function ErrorPage({}: Props): ReactElement {
  return (
    <div className="text-center py-5">
      <h1 className="mb-3">Страница не найдена</h1>
      <p><Link to={INDEX_PAGE}>&larr; Вернуться на главную</Link></p>
    </div>
  );
}

export default ErrorPage;
