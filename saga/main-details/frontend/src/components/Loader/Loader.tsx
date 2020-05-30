import React, { ReactElement } from 'react';

function Loader(): ReactElement {
  return (
    <div className="d-flex justify-content-center py-5">
      <div
        className="spinner-border text-danger"
        role="status"
      >
        <span className="sr-only">Загружаем...</span>
      </div>
    </div>
  );
}

export default Loader;
