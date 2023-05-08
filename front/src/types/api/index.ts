export interface IHouse {
  id: number;
  attributes: IHouseAttribute;
}

export interface ISSRHouseProps {
  houses: IHouse[];
}

export interface IHouseProps {
  housesData: IHouse[];
}

export interface IHouseCardProps {
  house: IHouse;
}

export interface IHouseImages {
  data: {
    id: number;
    attributes: IHouseImagesAttribute;
  }[];
}

export interface IHouseAttribute {
  name: string;
  description: string;
  price: number;
  images: IHouseImages;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export type IHouseImagesAttribute = {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  formats: {
    large: TImagesFormats;
    medium: TImagesFormats;
    small: TImagesFormats;
    thumbnail: TImagesFormats;
  };
  hash?: { data: [] } | undefined;
  height: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
};

export type TImagesFormats = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
};

export type TcreateUser = {
  username: string;
  email: string;
  password: string;
};

export type TgetUser = {
  email: string;
  password: string;
};
