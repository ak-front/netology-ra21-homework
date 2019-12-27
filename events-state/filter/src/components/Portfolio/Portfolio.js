import React, { useState } from 'react';

import Toolbar from './../Toolbar';
import ProjectList from './../ProjectList';

import productsJson from './../../data/projects';

const FILTER_ALL = 'All';
const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
const projects = productsJson;

function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_ALL);
  const handleSelectFilter = filter => {
    setSelectedFilter(filter);
  };
  const filteredProjects = selectedFilter === FILTER_ALL
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default Portfolio;
