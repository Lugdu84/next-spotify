import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotyfyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

const useSpotify = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      // If refresh token attempts fails, direct user to login page
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }
      spotyfyApi.setAccessToken(session?.user?.accessToken)
    }
  }, [session])
  return spotyfyApi
}

export default useSpotify
