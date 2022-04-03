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
  lat: number;
  lng: number;
  maxUsers: number;
  userLeft: number;
  createdAt: number;
  updatedAt: number;
  eventName: string;
  imageId: string;
}

export interface Cords {
  lang: number;
  lat: number;
}
