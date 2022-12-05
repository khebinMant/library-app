import React from 'react'
import { Footer } from '../components/libraryLayout/Footer'
import { NavBar } from '../components/libraryLayout/NavBar'

const containerStyle = {
  width: "90%",
  paddingBottom: '180px',
  margin: "100px auto",
};

export const LibraryLayout = ({children}) => {
  return (
    <div className='wrap'>
      <NavBar/>
      <div  style={containerStyle}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
