import SpotifyWebApi from 'spotify-web-api-node'

const scope = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-library-read',
  'user-top-read',
  'user-read-recently-played',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-follow-read',
  //   'user-library-modify',
].join(',')

const params = {
  scope,
}

const queryParamsString = new URLSearchParams(params).toString()

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString}`

const spotyfyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotyfyApi
export { LOGIN_URL }
