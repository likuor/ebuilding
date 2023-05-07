import { useState } from "react";
import { useRouter } from "next/router";
import { createUser } from '../api/api';
import { FormLayout } from '../../components/ui/Form/Layout/FormLayout';
import { FormButton } from '../../components/ui/Form/FormButton';
import { InputLabel } from '../../components/ui/Form/InputLabel';
import Link from 'next/link';

export default function Signup() {
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
      <FormLayout title={'Welcom to ebuilding'} desc={'Signup to your account'} onSubmit={submitHandler}>
        <InputLabel label="User name" type="text" onChange={changeHandler} value={username} htmlfor='username' id='username' name="username" />
        <InputLabel label="Email" type="email" onChange={changeHandler} value={email} htmlfor='email' id='email' name="email" />
        <InputLabel label="Password" type="password" onChange={changeHandler} value={password} htmlfor='password' id='password' name="password" />
        {/* Password forget */}
        <div className="flex justify-end">
          <Link href="/login" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Already have an account</Link>
        </div>

        {/* Error */}
        {/* {error && <div>{error}</div>} */}
        <FormButton text={"Sign up"} />
      </FormLayout >
    </>
  )
}