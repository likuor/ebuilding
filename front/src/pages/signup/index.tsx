import { useState } from "react";
import { useRouter } from "next/router";
import { createUser } from '../api/api';

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await createUser({ username, email, password });

    const resUserInfo = res.data;
    if (resUserInfo.created) {
      router.push("/login");
    } else {
      setError(resUserInfo.message);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
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
      <form onSubmit={submitHandler} >
        <label htmlFor="username">User name</label>
        <input onChange={changeHandler} value={username} type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input onChange={changeHandler} value={email} type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input onChange={changeHandler} value={password} type="password" name="password" id="password" />
        {error && <div>{error}</div>}
        <button type="submit">
          Sign uo
        </button>
      </form>
    </>
  )
}

export default Signin
