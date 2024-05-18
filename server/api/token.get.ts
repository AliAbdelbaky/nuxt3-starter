import {getServerSession, getToken} from "#auth";

export default defineEventHandler(async event => {
  const token = await getToken({event})

  setCookie(event, 'userToken', token?.sub)
  return token
})