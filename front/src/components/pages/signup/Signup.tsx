import { useState } from "react";
import { useRouter } from "next/router";
import { createUser } from '../../../helper/api';
import { FormLayout } from '../../../components/ui/Form/Layout/FormLayout';
import { FormButton } from '../../../components/ui/Form/FormButton';
import { InputLabel } from '../../../components/ui/Form/InputLabel';
import { validEmail } from "../../../helper/validation/validation";
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkEmail = validEmail(email);
    if (checkEmail.status === false) return setError('Your email is not allowed');

    const res = await createUser({ username, email, password });
    const resUserInfo = res.data;
    if (!resUserInfo.created) return setError(resUserInfo.message);

    router.push("/login");
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
      <FormLayout title={'Welcom to ebuilding'} desc={'Signup to your account'} onSubmit={submitHandler} error={error}>
        <InputLabel label="User name" type="text" onChange={changeHandler} value={username} htmlfor='username' id='username' name="username" />
        <InputLabel label="Email" type="email" onChange={changeHandler} value={email} htmlfor='email' id='email' name="email" />
        <InputLabel label="Password" type="password" onChange={changeHandler} value={password} htmlfor='password' id='password' name="password" />
        <div className="flex justify-end">
          <Link href="/login" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Already have an account</Link>
        </div>
        <FormButton text={"Sign up"} bgColor={'bg-purple-600'} />
      </FormLayout >
    </>
  )
}

export default Signup
