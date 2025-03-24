// Project statuses
export const projectStatus = {
  PLANNING: "planning",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  COMPLETED: "completed",
  ON_HOLD: "on-hold",
};

// Project status counts
export const projectStatusCounts = {
  [projectStatus.PLANNING]: 4,
  [projectStatus.IN_PROGRESS]: 7,
  [projectStatus.REVIEW]: 2,
  [projectStatus.COMPLETED]: 15,
  [projectStatus.ON_HOLD]: 1,
};

// Projects data
export const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    client: "Sarah Johnson",
    clientId: 1,
    status: projectStatus.IN_PROGRESS,
    date: "Aug 15, 2023",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description:
      "A clean, minimalist living room design with neutral colors and natural materials.",
  },
  {
    id: 2,
    title: "Urban Loft Renovation",
    client: "David Chen",
    clientId: 2,
    status: projectStatus.PLANNING,
    date: "Sep 20, 2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:
      "Converting an industrial loft space into a modern urban dwelling with exposed brick and high ceilings.",
  },
  {
    id: 3,
    title: "Coastal-Inspired Bedroom",
    client: "Emily Taylor",
    clientId: 3,
    status: projectStatus.REVIEW,
    date: "Jul 30, 2023",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c0059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description:
      "A serene bedroom design inspired by coastal elements with a calming blue and white color palette.",
  },
];

// Clients data
export const clients = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    projectCount: 2,
  },
  {
    id: 2,
    name: "David Chen",
    email: "david.chen@example.com",
    phone: "(555) 987-6543",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    projectCount: 1,
  },
  {
    id: 3,
    name: "Emily Taylor",
    email: "emily.taylor@example.com",
    phone: "(555) 456-7890",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    projectCount: 3,
  },
];
