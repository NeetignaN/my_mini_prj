// Base URL for API calls
const API_BASE_URL = "http://localhost:5000/api";

// ========== CLIENTS API ==========

/**
 * Get all clients
 * @returns {Promise<Array>} List of clients
 */
export const getClients = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/clients`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

/**
 * Get client by ID
 * @param {number} id - Client ID
 * @returns {Promise<Object>} Client data
 */
export const getClientById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/clients/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching client with id ${id}:`, error);
    throw error;
  }
};

/**
 * Get all projects for a specific client
 * @param {number} clientId - Client ID
 * @returns {Promise<Array>} List of projects for the client
 */
export const getClientProjects = async (clientId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/clients/${clientId}/projects`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching projects for client ${clientId}:`, error);
    throw error;
  }
};

// ========== PROJECTS API ==========

/**
 * Get all projects
 * @returns {Promise<Array>} List of projects
 */
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Promise<Object>} Project data
 */
export const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    throw error;
  }
};

// ========== DESIGNERS API ==========

/**
 * Get all designers
 * @returns {Promise<Array>} List of designers
 */
export const getDesigners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/designers`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching designers:", error);
    throw error;
  }
};

/**
 * Get designer by ID
 * @param {number} id - Designer ID
 * @returns {Promise<Object>} Designer data
 */
export const getDesignerById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/designers/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching designer with id ${id}:`, error);
    throw error;
  }
};

/**
 * Get all projects for a specific designer
 * @param {number} designerId - Designer ID
 * @returns {Promise<Array>} List of projects for the designer
 */
export const getDesignerProjects = async (designerId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/designers/${designerId}/projects`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching projects for designer ${designerId}:`, error);
    throw error;
  }
};

// ========== PRODUCTS API ==========

/**
 * Get all products
 * @returns {Promise<Array>} List of products
 */
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// ========== VENDORS API ==========

/**
 * Get all vendors
 * @returns {Promise<Array>} List of vendors
 */
export const getVendors = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/vendors`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching vendors:", error);
    throw error;
  }
};

// ========== MESSAGES API ==========

/**
 * Get all messages
 * @returns {Promise<Array>} List of messages
 */
export const getMessages = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/messages`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

// Helper function to get project status counts
export const getProjectStatusCounts = async () => {
  try {
    const projects = await getProjects();
    const counts = {
      planning: 0,
      "in-progress": 0,
      review: 0,
      completed: 0,
      "on-hold": 0,
    };

    projects.forEach((project) => {
      const status = project.status
        ? project.status.toLowerCase().replace(" ", "-")
        : "";
      if (counts[status] !== undefined) {
        counts[status]++;
      }
    });

    return counts;
  } catch (error) {
    console.error("Error getting project status counts:", error);
    throw error;
  }
};
