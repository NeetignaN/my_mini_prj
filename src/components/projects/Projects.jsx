import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import styles from './Projects.module.css';
import ProjectCard from '../dashboard/ProjectCard';
import { projects, projectStatus } from '../../data/data';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    // Search filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusLabels = {
    'all': 'All Projects',
    [projectStatus.PLANNING]: 'Planning',
    [projectStatus.IN_PROGRESS]: 'In Progress',
    [projectStatus.REVIEW]: 'Under Review',
    [projectStatus.COMPLETED]: 'Completed',
    [projectStatus.ON_HOLD]: 'On Hold'
  };

  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>Manage your interior design projects</p>
      </div>

      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search projects by title, client or description..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className={styles.filterButton}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {filteredProjects.length > 0 ? (
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          No projects found matching your search criteria.
        </div>
      )}
    </div>
  );
};

export default Projects;
