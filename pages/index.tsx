import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div className="">
    <Head>
      <title>Spotify application avec next.js</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      {/* sidebar */}
      <Sidebar />

      {/* center */}

      {/* player */}
    </main>
  </div>
)

export default Home
