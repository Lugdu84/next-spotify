import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    error: string
    user: {
      /** The user's postal address. */
      accessToken: string
      refreshToken: string
      username: string
    } & DefaultSession['user']
  }
}
