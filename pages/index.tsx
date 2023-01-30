import type { NextPage } from 'next'
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div className="bg-black h-screen overflow-hidden">
    <Head>
      <title>Spotify application avec next.js</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex">
      <Sidebar />
      <Center />

      {/* player */}
    </main>
  </div>
)

export default Home
