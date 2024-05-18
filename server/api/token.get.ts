import {getToken} from "#auth";

export default defineEventHandler(async event => {
  // console.log('here', token)

  // setCookie(event, 'userToken', token?.sub)
  return await getToken({event})
})