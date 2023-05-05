import axios, { AxiosResponse } from 'axios';
// import { ICollectionResponse, IHouse } from '@/types';

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   // headers: { Authorization: `Bearer ${process.env.BACKEND_API_KEY}` }
// })


export const fetchHouses = async () => await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/houses`)
  .then((res) => {
    console.log("res", res.data.data);
    return res.data.data
  })
  .catch(err => {
    console.log("err:", err);
  });
