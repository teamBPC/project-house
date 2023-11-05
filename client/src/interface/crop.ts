export interface ICroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ICroppedAreaPixels {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface ICropData {
  imageSrc: string;
  pixelCrop: any;
  rotation?: number;
  flip?: { horizontal: boolean; vertical: boolean };
}

