import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '../../../db/utils/connectDB'
import { UserModel } from '../../../db/utils/shemaModels'
const bcrypt = require('bcrypt');

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Checking users if they're existing
    await connectDB()
    const { username, email, password } = req.body
    const checkUser = await UserModel.findOne({ email: email })

    if (typeof checkUser === null) return res.status(400).json({ message: "Already existed" })

    const hashPsw = await bcrypt
      .hash(password, 12)
      .then((hashedPassword: string) => {
        return hashedPassword;
      });
    const newUser = {
      username: username,
      email: email,
      password: hashPsw,
    };

    await UserModel.create(newUser)
    return res.status(200).json({ message: "Successed to signup", created: true })

  } catch (error) {
    return res.status(400).json({ message: " Failed to signup" })
  }
}

export default signup