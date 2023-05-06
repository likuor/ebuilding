import { useState } from "react";
import { useRouter } from "next/router";
import { getUser } from '../api/api';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await getUser({ email, password });

    const resUserInfo = res.data;
    if (resUserInfo.token) {
      alert('Login Success');
      localStorage.setItem('token', resUserInfo.token);
      router.push('/');
    } else {
      setError(resUserInfo.message);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input onChange={changeHandler} value={email} type="email" name="email" id="email" />
        <label htmlFor="password">パスワード</label>
        <input onChange={changeHandler} value={password} type="password" name="password" id="password" />
        {error && <div>{error}</div>}
        <button type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login