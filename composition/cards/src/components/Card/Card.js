import React from 'react';
import PropTypes from 'prop-types';

function Card({
  buttonLabel,
  buttonUrl,
  children,
  showButton,
  text,
  title
}) {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        {title && (
          <h5 className="card-title">{title}</h5>
        )}
        {text && (
          <p className="card-text">{text}</p>
        )}
        {showButton && (
          <a
            className="btn btn-primary"
            href={buttonUrl}
          >
            {buttonLabel}
          </a>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string,
  children: PropTypes.node,
  showButton: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string
};

Card.defaultProps = {
  buttonLabel: 'Go somewhere',
  buttonUrl: '#'
}

export default Card;
