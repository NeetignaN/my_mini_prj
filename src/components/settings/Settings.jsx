import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    companyName: 'Interiora Design Studio',
    companyAddress: '123 Design Avenue, New York, NY 10001',
    companyEmail: 'info@interiora.com',
    companyPhone: '(555) 987-6543'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would save the data here
    alert('Settings saved successfully!');
  };

  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Manage your account and company settings</p>
      </div>

      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Information</h2>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>First Name</label>
              <input
                type="text"
                name="firstName"
                className={styles.formInput}
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Last Name</label>
              <input
                type="text"
                name="lastName"
                className={styles.formInput}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Phone</label>
              <input
                type="tel"
                name="phone"
                className={styles.formInput}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Company Information</h2>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company Name</label>
              <input
                type="text"
                name="companyName"
                className={styles.formInput}
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company Address</label>
              <input
                type="text"
                name="companyAddress"
                className={styles.formInput}
                value={formData.companyAddress}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company Email</label>
              <input
                type="email"
                name="companyEmail"
                className={styles.formInput}
                value={formData.companyEmail}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Company Phone</label>
              <input
                type="tel"
                name="companyPhone"
                className={styles.formInput}
                value={formData.companyPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="button" className={`${styles.button} ${styles.buttonSecondary}`}>
              Cancel
            </button>
            <button type="submit" className={styles.button}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
