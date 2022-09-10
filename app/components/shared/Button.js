import React from 'react'

const Button = ({className,title}) => {
  return (
    <button className={`bg-primary font-bold px-6 rounded outline-none border-none ${className}`}>{title}</button>
  )
}

export default Button