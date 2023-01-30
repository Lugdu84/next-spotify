import React from 'react'
import {
  ArrowLeftOnRectangleIcon,
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline'
import { signOut, useSession } from 'next-auth/react'
import IconButton from './IconButton'

function Sidebar() {
  const { data: session, status } = useSession()
  console.log(session)
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <IconButton onClick={() => signOut()} title="Logout">
          <ArrowLeftOnRectangleIcon className="h-5" />
        </IconButton>
        <IconButton title="Home">
          <HomeIcon className="h-5" />
        </IconButton>
        <IconButton title="Search">
          <MagnifyingGlassIcon className="h-5" />
        </IconButton>
        <IconButton title="Your Library">
          <BuildingLibraryIcon className="h-5" />
        </IconButton>
        <hr className="divider" />
        <IconButton title="Create Playlist">
          <PlusCircleIcon className="h-5" />
        </IconButton>
        <IconButton title="Liked Songs">
          <HeartIcon className="h-5" />
        </IconButton>
        <IconButton title="Your episodes">
          <RssIcon className="h-5" />
        </IconButton>
        <hr className="divider" />
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
        <p className="cursor-pointer hover:text-white">PlayList name</p>
      </div>
    </div>
  )
}

export default Sidebar
