import {getToken} from "#auth";

export default defineEventHandler(async event => {
  return await getToken({event})
})