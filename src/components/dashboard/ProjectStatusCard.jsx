import React from 'react';
import styles from './ProjectStatusCard.module.css';

const ProjectStatusCard = ({ status, count }) => {
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

  const { label, className } = statusMap[status] || { label: status, className: '' };

  return (
    <div className={styles.card}>
      <span className={`${styles.statusBadge} ${className}`}>{label}</span>
      <div className={styles.count}>{count}</div>
      <div className={styles.label}>Projects</div>
    </div>
  );
};

export default ProjectStatusCard;
