export interface File {
  name: string;
  lastModified: number;
  webkitRelativePath: string;
  size: number;
  type: string;
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}

interface Author {
  avatarId: string;
  firstName: string;
  lastName: string;
  id: string;
  rate: number;
}

export interface Meeting {
  id: string;
  author: Author;
  authorType: string;
  description: string;
  isHighlighted: boolean;
  lat: number;
  lng: number;
  maxUsers: number;
  userLeft: number;
  createdAt: number;
  updatedAt: number;
  eventName: string;
  imageId: string;
  category: MeetingCategory;
}

export interface MeetingDetails {
  id: string;
  author: Author;
  users: Author[];
  authorType: string;
  description: string;
  isHighlighted: boolean;
  lat: number;
  lng: number;
  maxUsers: number;
  userLeft: number;
  createdAt: number;
  updatedAt: number;
  eventName: string;
  imageId: string;
  category: MeetingCategory;
}


export interface MeetingCategory {
  id: string;
  name: string;
  imageId: string;
}

export interface Coords {
  lng: number;
  lat: number;
}
