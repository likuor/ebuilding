import { useState } from "react";
import { useRouter } from "next/router";
import { getUser } from '../api/api';
import { FormLayout } from '../../components/ui/Form/Layout/FormLayout';
import { FormButton } from '../../components/ui/Form/FormButton';
import { InputLabel } from '../../components/ui/Form/InputLabel';


export default function Login() {
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
      <FormLayout title={'Hello again'} desc={'Login to your account'} onSubmit={submitHandler}>
        <InputLabel label="Email" type="email" onChange={changeHandler} value={email} htmlfor='email' id='email' name="email" />
        <InputLabel label="Password" type="password" onChange={changeHandler} value={password} htmlfor='password' id='password' name="password" />
        {/* Password forget */}
        {/* <div className="flex justify-end">
            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
          </div> */}

        {/* Error */}
        {/* {error && <div>{error}</div>} */}
        <FormButton text={"Login"} />
      </FormLayout >
    </>
  );
};