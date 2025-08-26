import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a full-stack healthcare platform that simplifies doctor appointments. Users can search for doctors by specialty, book appointments online, and manage their profiles. The admin panel allows management of doctors, patients, and appointments efficiently. Built with modern technologies like React, Node.js, and MongoDB, Prescripto ensures a seamless and user-friendly healthcare experience</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8077022944</li>
            <li>sagarsh046@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
      
      </div>

    </div>
  )
}

export default Footer
