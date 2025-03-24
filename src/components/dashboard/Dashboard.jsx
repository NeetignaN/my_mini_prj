import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Dashboard.module.css';
import ProjectStatusCard from './ProjectStatusCard';
import ProjectCard from './ProjectCard';
import { projects, projectStatus, projectStatusCounts } from '../../data/data';

const Dashboard = () => {
  const currentDate = format(new Date(), 'EEEE, MMMM dd, yyyy');

  return (
    <div className={styles.dashboard}>
      <div className={styles.welcome}>
        <h1 className={styles.welcomeTitle}>Welcome back</h1>
        <p className={styles.welcomeSubtitle}>Here's an overview of your interior design projects and clients.</p>
      </div>

      <div className={styles.date}>
        <p className={styles.dateText}>Current Date</p>
        <h2 className={styles.dateText}>{currentDate}</h2>
      </div>

      <div className={styles.statsGrid}>
        <ProjectStatusCard status={projectStatus.PLANNING} count={projectStatusCounts[projectStatus.PLANNING]} />
        <ProjectStatusCard status={projectStatus.IN_PROGRESS} count={projectStatusCounts[projectStatus.IN_PROGRESS]} />
        <ProjectStatusCard status={projectStatus.REVIEW} count={projectStatusCounts[projectStatus.REVIEW]} />
        <ProjectStatusCard status={projectStatus.COMPLETED} count={projectStatusCounts[projectStatus.COMPLETED]} />
        <ProjectStatusCard status={projectStatus.ON_HOLD} count={projectStatusCounts[projectStatus.ON_HOLD]} />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Projects</h2>
          <Link to="/projects" className={styles.viewAllLink}>
            View All <FiArrowRight />
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
