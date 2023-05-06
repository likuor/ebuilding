export interface IHouse {
  id: number;
  attributes: IHouseAttribute;
}

export interface IHouseAttribute {
  name: string;
  description: string;
  price: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
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
