import axios from 'axios';
import { TcreateUser, TgetUser } from '../types/api';

export const fetchHouses = async () => await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/houses?populate=images`)
  .then((res) => {
    return res.data.data
  })
  .catch(err => {
    console.log("err:", err);
  });

// DB
export const createUser = async ({ username, email, password }: TcreateUser) =>
  await axios.post(`${process.env.NEXT_PUBLIC_API_FRONT_BASE_URL}/api/auth/signup`
    , {
      username,
      email,
      password,
    }, {
    headers: {
      "Content-Type": "application/json",
    }
  })

export const getUser = async ({ email, password }: TgetUser) => {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_FRONT_BASE_URL}/api/auth/login`
    , {
      email,
      password,
    }, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res
  })
    .catch(err => {
      return err.response
    });
  return res
}