import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import { connectDB } from '../../../db/utils/connectDB'
import { UserModel } from '../../../db/utils/shemaModels'
const bcrypt = require("bcrypt");

const login = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    if (typeof process.env.NEXT_PUBLIC_SECRET_KEY === 'undefined') return

    await connectDB()
    const { email, password } = req.body

    // Checking users if they're existing
    const savedUser = await UserModel.findOne({ email: email })

    if (!savedUser) return res.status(400).json({ message: "The user doesn't exist" })

    const isUserPswMatch: boolean = await bcrypt.compare(
      password,
      savedUser.password
    );
    if (isUserPswMatch === true) {
      // Create JWT
      const token = jwt.sign({
        username: savedUser.username,
        email: email,
      }, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: "30m" })

      return res.status(200).json({ message: "Successed to login", token: token })
    } else {
      return res.status(400).json({ message: "Password is wrong" })
    }


  } catch (error) {
    return res.status(400).json({ message: "Failes to login" })
  }
}

export default login