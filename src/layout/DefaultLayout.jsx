import Sidebar from '../components/Sidebar'
import React from 'react'
// import Header from '../Header'

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex  fixed w-[100%] ">
        <Sidebar/>
        <div className="w-full body-content">
            <div className="body-wrapper bg-tertiary">
                {children}
            </div>
        </div>
    </div>
  )
}
export default DefaultLayout;
