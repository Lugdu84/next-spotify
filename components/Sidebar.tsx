import React from 'react'
import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline'
import IconButton from './IconButton'

function Sidebar() {
  return (
    <div>
      <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <IconButton title="Home">
          <HomeIcon className="h-5" />
        </IconButton>
        <IconButton title="Search">
          <MagnifyingGlassIcon className="h-5" />
        </IconButton>
        <IconButton title="Your Library">
          <BuildingLibraryIcon className="h-5" />
        </IconButton>
        <hr className="border-t-[0.1px] border-gray-900" />
        <IconButton title="Create Playlist">
          <PlusCircleIcon className="h-5" />
        </IconButton>
        <IconButton title="Liked Songs">
          <HeartIcon className="h-5" />
        </IconButton>
        <IconButton title="Your episodes">
          <RssIcon className="h-5" />
        </IconButton>
      </div>
    </div>
  )
}

export default Sidebar
