import React, { ReactElement } from 'react'

interface Props {
  onRepeatRequest: Function;
}

function AlertRepeatRequest({ onRepeatRequest }: Props): ReactElement {
  const handleClick = () => {
    onRepeatRequest();
  };

  return (
    <div className="alert alert-danger text-center">
      <span className="mr-2">Произошла ошибка</span>
      {' '}
      <button
        className="btn btn-dark"
        onClick={handleClick}
      >
        Повторить запрос
      </button>
    </div>
  )
}

export default AlertRepeatRequest;
