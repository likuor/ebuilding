export interface IHouse {
  id: number;
  attributes: IHouseAttribute;
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
  images?: IHouseImages;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface IHouseImagesAttribute {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  formats: any;
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
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagenation: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export type TcreateUser = {
  username: string;
  email: string;
  password: string;
};

export type TgetUser = {
  email: string;
  password: string;
};
