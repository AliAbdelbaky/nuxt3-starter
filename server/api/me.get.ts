import {getServerSession} from "#auth";

export default defineEventHandler(async event => {
  const session = await getServerSession(event)
  console.log({session})
  return session
})