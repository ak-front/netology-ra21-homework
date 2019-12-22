import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

function ProjectList({ projects }) {
  return (
    <Masonry className="project-list">
      {projects.map(project => (
        <div
          key={project.id}
          className="project-list__item"
        >
          <img
            src={project.img}
            alt={project.alt || ''}
          />
        </div>
      ))}
    </Masonry>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    category: PropTypes.string
  }))
};

ProjectList.defaultProps = {
  projects: []
};

export default ProjectList;
