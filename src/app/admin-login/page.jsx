import React from 'react'
import AdminLogin from '../../components/AdminLogin'
import { usePathname } from 'next/navigation'
const page = () => {
  return (
    <div className='w-[100%]'>

      <AdminLogin />
    </div>
  )
}

export default page