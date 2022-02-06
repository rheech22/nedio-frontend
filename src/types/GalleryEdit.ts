export interface ImagesData {
  imageId: string;
  imageTitle: string;
  imageDescription: string;
  imageUrl: string;
}

export interface Hall {
  id: string;
  hallName: string;
  imagesData: ImagesData[];
}

export interface GalleryData {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
  halls: Hall[];
}

export interface Gallery {
  data: GalleryData;
  message: string;
}
