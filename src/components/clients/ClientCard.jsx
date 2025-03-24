import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiFolder, FiArrowRight } from 'react-icons/fi';
import styles from './ClientCard.module.css';

const ClientCard = ({ client }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        {client.avatar ? (
          <img src={client.avatar} alt={client.name} className={styles.avatarImage} />
        ) : (
          <div className={styles.initial}>{getInitials(client.name)}</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{client.name}</h3>
        <div className={styles.contact}>
          <span className={styles.contactItem}>
            <FiMail /> {client.email}
          </span>
          <span className={styles.contactItem}>
            <FiPhone /> {client.phone}
          </span>
        </div>
        <span className={styles.projectCount}>
          <FiFolder /> {client.projectCount} Projects
        </span>
      </div>

      <div className={styles.actions}>
        <Link to={`/clients/${client.id}`} className={styles.viewLink}>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ClientCard;
