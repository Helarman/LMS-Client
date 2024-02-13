import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    session: async ({ session, token }: { token: any, session: any }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      return Promise.resolve(session);
    },
    jwt: async ({ token, user, account }: { token: any, user: any, account: any }) => {
      const isSignIn = user ? true : false;
      if (isSignIn && account) {
        try {
          const public_url = process.env.NEXT_PUBLIC_API_URL;
          const response = await fetch(
            `${public_url}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
          );
          const data = await response.json();
          token.jwt = data.jwt;
          token.id = data.user.id;
        } catch (error) {
          console.error('Fetch failed:', error);
        }
      }
      return Promise.resolve(token);
    },
  },
});