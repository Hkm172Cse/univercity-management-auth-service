import { User } from './user.model'
let lastUserid = 0
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}
export const generatedUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
  // lastUserid++;
  // return String(lastUserid).padStart(5,'0');
}
