import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
  pages: {
    signIn: '/login',
  },
  secret: useRuntimeConfig().public.API_SECRET,
  callbacks: {},
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID || 'enter-your-client-id-here',
      clientSecret:
        process.env.GITHUB_CLIENT_SECRET || 'enter-your-client-secret-here',
    }),
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      authorize: async (credentials: any) => {
        console.log({ credentials });
        const url =
          (useRuntimeConfig().public.BASE_URL || 'no url') +
          'auth/recruiter/login';
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Device-Type': useRuntimeConfig().public.API_SECRET,
          Cookie: 'name=value; expires=Sat, 03 Apr 2024 23:59:59 GMT',
        };
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { ...headers },
          });

          const user = await response.json();

          const userData = user.data.user;
          const accessToken = user.data.access_token.token;

          return {
            id: accessToken,
            name: userData.first_name + ' ' + userData.last_name,
            email: userData.email,
          };
        } catch (e) {
          console.error(e);
          return false;
        }
      },
    }),
  ],
});
