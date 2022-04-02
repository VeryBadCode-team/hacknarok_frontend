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
  