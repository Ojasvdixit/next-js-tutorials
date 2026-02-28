import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Navbar</h1>
        {children}
        <h1>Footer</h1>

    </div>
  )
}

export default layout