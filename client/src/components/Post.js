import React from 'react'

export default ({ children, ...rest }) => {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  )
}
