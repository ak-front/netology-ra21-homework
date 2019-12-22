import React, { useCallback, useState } from 'react';

import Toolbar from './../Toolbar';
import ProjectList from './../ProjectList';

import productsJson from './../../data/projects';

const FILTER_ALL = 'All';
const INITIAL_STATE = {
  filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
  projects: productsJson,
  selectedFilter: FILTER_ALL,
};

function Portfolio() {
  const [filters] = useState(INITIAL_STATE.filters);
  const [projects] = useState(INITIAL_STATE.projects);
  const [selectedFilter, setSelectedFilter] = useState(INITIAL_STATE.selectedFilter);
  const handleSelectFilter = useCallback(filter => setSelectedFilter(filter), [setSelectedFilter]);
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
