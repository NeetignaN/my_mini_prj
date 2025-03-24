import livingRoomImage from '../assets/images/projects/living-room.jpg';
import urbanLoftImage from '../assets/images/projects/urban-loft.jpg';
import coastalBedroomImage from '../assets/images/projects/coastal-bedroom.jpg';

import sarahJohnsonImage from '../assets/images/avatars/sarah-johnson.jpg';
import davidChenImage from '../assets/images/avatars/david-chen.jpg';
import emilyTaylorImage from '../assets/images/avatars/emily-taylor.jpg';

// Project statuses
export const projectStatus = {
  PLANNING: 'planning',
  IN_PROGRESS: 'in-progress',
  REVIEW: 'review',
  COMPLETED: 'completed',
  ON_HOLD: 'on-hold'
};

// Project status counts
export const projectStatusCounts = {
  [projectStatus.PLANNING]: 4,
  [projectStatus.IN_PROGRESS]: 7,
  [projectStatus.REVIEW]: 2,
  [projectStatus.COMPLETED]: 15,
  [projectStatus.ON_HOLD]: 1
};

// Projects data
export const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    client: 'Sarah Johnson',
    clientId: 1,
    status: projectStatus.IN_PROGRESS,
    date: 'Aug 15, 2023',
    image: livingRoomImage,
    description: 'A clean, minimalist living room design with neutral colors and natural materials.'
  },
  {
    id: 2,
    title: 'Urban Loft Renovation',
    client: 'David Chen',
    clientId: 2,
    status: projectStatus.PLANNING,
    date: 'Sep 20, 2023',
    image: urbanLoftImage,
    description: 'Converting an industrial loft space into a modern urban dwelling with exposed brick and high ceilings.'
  },
  {
    id: 3,
    title: 'Coastal-Inspired Bedroom',
    client: 'Emily Taylor',
    clientId: 3,
    status: projectStatus.REVIEW,
    date: 'Jul 30, 2023',
    image: coastalBedroomImage,
    description: 'A serene bedroom design inspired by coastal elements with a calming blue and white color palette.'
  }
];

// Clients data
export const clients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '(555) 123-4567',
    avatar: sarahJohnsonImage,
    projectCount: 2
  },
  {
    id: 2,
    name: 'David Chen',
    email: 'david.chen@example.com',
    phone: '(555) 987-6543',
    avatar: davidChenImage,
    projectCount: 1
  },
  {
    id: 3,
    name: 'Emily Taylor',
    email: 'emily.taylor@example.com',
    phone: '(555) 456-7890',
    avatar: emilyTaylorImage,
    projectCount: 3
  }
];
