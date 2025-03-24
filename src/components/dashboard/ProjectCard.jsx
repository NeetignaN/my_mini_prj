import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiCalendar, FiArrowRight } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const statusMap = {
    'planning': {
      label: 'Planning',
      className: styles.planning
    },
    'in-progress': {
      label: 'In progress',
      className: styles.inProgress
    },
    'review': {
      label: 'Review',
      className: styles.review
    },
    'completed': {
      label: 'Completed',
      className: styles.completed
    },
    'on-hold': {
      label: 'On hold',
      className: styles.onHold
    }
  };

  const { label, className } = statusMap[project.status] || { label: project.status, className: '' };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <span className={`${styles.statusBadge} ${className}`}>{label}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.meta}>
          <span className={styles.client}>
            <FiUser /> Client: {project.client}
          </span>
          <span className={styles.date}>
            <FiCalendar /> {project.date}
          </span>
        </div>
        <Link to={`/projects/${project.id}`} className={styles.viewLink}>
          View Project <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
