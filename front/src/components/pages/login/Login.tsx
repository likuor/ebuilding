import { useState } from "react";
import { useRouter } from "next/router";
import { getUser } from '../../../helper/api';
import { FormLayout } from '../../../components/ui/Form/Layout/FormLayout';
import { FormButton } from '../../../components/ui/Form/FormButton';
import { InputLabel } from '../../../components/ui/Form/InputLabel';
import { validEmail } from "../../../helper/validation/validation";
import { commonText } from "../../../common/commonText.json";
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkEmail = validEmail(email);
    if (checkEmail.status === false) return setError('Your email is not allowed');

    const res = await getUser({ email, password });
    const resUserInfo = res.data;

    if (!resUserInfo.token) return setError(resUserInfo.message);

    localStorage.setItem('token', resUserInfo.token);
    router.push('/');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value)
        break;
      case "password":
        setPassword(value);
        break;
    }
  }
  return (
    <>
      <FormLayout title={commonText.login.title} desc={commonText.login.desc} onSubmit={submitHandler} error={error}>
        <InputLabel label="Email" type="email" onChange={changeHandler} value={email} htmlfor='email' id='email' name="email" />
        <InputLabel label="Password" type="password" onChange={changeHandler} value={password} htmlfor='password' id='password' name="password" />
        <div className="flex justify-end">
          <Link href="/signup" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">{commonText.login.link}</Link>
        </div>
        <FormButton text={'Login'} bgColor={'bg-purple-600'} />
      </FormLayout >
    </>
  );
};

export default Login