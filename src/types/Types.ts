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

export interface Meeting {
  id: string;
  authorId: string;
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
