import React from 'react'
import NavBarLogin from '../../components/Home/utilities/NavBarLogin'
import Slider from '../../components/Home/Slider'

const HomePage = () => {
  return (
    <div className='font' style={{minHeight:'670'}}>
      <NavBarLogin />
      <Slider />
    </div>
  )
}

export default HomePage