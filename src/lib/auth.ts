import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { env } from "./env";
import { AuthOptions, DefaultSession, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import createDefaultGroupe from "./defaultgroupe";
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
}
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile){
        return {
        id:profile.id.toString(),
        name:profile.name,
        email : profile.email,
        username:profile.login,
        }
      }
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, user }) {
      if (!session?.user) {
        return session
      }
    session.user.id = user.id;
      return session;
    },async signIn({user, account, profile}) {
      const userId = user.id
     createDefaultGroupe({userId})



      return true
    },
  },
  secret:process.env.NEXTAUTH_SECRET
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
