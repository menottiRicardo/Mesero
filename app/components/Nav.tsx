import React from 'react'
import NavPills from './NavPills'

const Nav = () => {
  return (
    <nav className='flex bg-gray-100 py-4 shadow-md items-center px-2'>
        {/* image */}
        <div className='w-1/12'>
        <h1 className='text-2xl font-bold'>LOGO</h1>
        </div>

        {/* navpills */}
        <div className='flex w-11/12 justify-around items-center rounded-b-lg'>
        <NavPills title='Mesas' route='Tables'/>
        <NavPills title="Promos" route="promos"/>
        <NavPills title='Configuracion' route="settings"/>
        </div>
    </nav>
  )
}

export default Nav