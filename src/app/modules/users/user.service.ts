import { Request, Response } from 'express'
import config from '../../../config/index'
import { User } from './user.model'
import { IUser } from './users.interface'
import { generatedUserId } from './user.utils'
const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated userid
  // deafult student passward
  const id = await generatedUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
