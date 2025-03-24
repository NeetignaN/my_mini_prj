import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Clients.module.css';
import ClientCard from './ClientCard';
import { clients } from '../../data/data';

const Clients = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.clients}>
      <div className={styles.header}>
        <h1 className={styles.title}>Clients</h1>
        <p className={styles.subtitle}>Manage your interior design clients</p>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search clients by name, email or phone..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.gridContainer}>
        {filteredClients.map(client => (
          <ClientCard key={client.id} client={client} />
        ))}

        {filteredClients.length === 0 && (
          <p>No clients found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Clients;
