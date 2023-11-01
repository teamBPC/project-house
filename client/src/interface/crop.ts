export interface ICrop {
  area: ICroppedArea;
  areaPixels: ICroppedAreaPixels;
}

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
