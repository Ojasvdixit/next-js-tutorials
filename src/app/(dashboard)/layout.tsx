import React from 'react'

const DashLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Dashboard Navbar</h1>
        {children}
        <h1>Dashboard Footer</h1>

    </div>
  )
}

export default DashLayout