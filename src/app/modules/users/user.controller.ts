import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const Result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created',
      data: Result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'user not created',
    })
  }
}

export default { createUser }
