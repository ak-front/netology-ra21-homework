import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Collapse({
  children,
  collapsedLabel,
  expandedLabel,
  isExpanded,
  onExpandedChange
}) {
  const contentRef = useRef();
  const contentInnerRef = useRef();
  const handleClick = event => {
    onExpandedChange(!isExpanded);
    event.preventDefault();
  };

  useEffect(() => {
    contentRef.current.style.height = isExpanded
      ? `${contentInnerRef.current.offsetHeight}px`
      : 0;
  });

  return (
    <div className={cn('collapse', isExpanded && 'collapse_expanded')}>
      <div
        ref={contentRef}
        className="collapse__content"
      >
        <div ref={contentInnerRef}>{children}</div>
      </div>
      <a
        className="collapse__trigger"
        href="#"
        onClick={handleClick}
      >
        {isExpanded ? expandedLabel : collapsedLabel}
      </a>
    </div>
  );
}

Collapse.propTypes = {
  children: PropTypes.node,
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool,
  onExpandedChange: PropTypes.func
};

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
  onExpandedChange: () => null
};

export default Collapse;
