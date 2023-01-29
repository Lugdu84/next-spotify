import React from 'react'

type Props = {
  children: React.ReactNode
  title: string
}

function IconButton({ children, title }: Props) {
  return (
    <button
      className="flex space-x-2 items-center hover:text-white"
      type="button"
    >
      {children}
      <p>{title}</p>
    </button>
  )
}

export default IconButton
