import React from 'react'

type Props = {
  children: React.ReactNode
  title: string
  onClick?: () => void
}

function IconButton({ children, title, onClick }: Props) {
  return (
    <button
      className="flex space-x-2 items-center hover:text-white"
      type="button"
      onClick={onClick}
    >
      {children}
      <p>{title}</p>
    </button>
  )
}

export default IconButton
