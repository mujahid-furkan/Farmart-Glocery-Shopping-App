import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../components/search'
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b'>
      <div className="container">
        {/* header top bar */}
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href='/'>
           <a href="/">
           <Image
           src='/logo.svg'
           width='160'
           height='55'
           objectFit='contain'
           />
           </a>
          </Link>
          {/* search */}
           <Search/> 
          {/* contact */}
          <div className="lg:flex flex-col hidden">
            <span className="text-xl font-semibold">+8801878586303</span>
            <p className="self-end text-color">Support 24/7</p>
          </div>
          {/* icon */}
          <div className="flex items-center gap-2">
          <Link href='/my-account'>
             <a href="/my-account">
                <AiOutlineUser className='text-2xl text-title'/>
              </a>
              </Link>  
              
              <Link href='/cart'>
             <a href="/cart" className='flex items-center gap-5'>
                  <div className="relative">
                <AiOutlineShoppingCart className='text-3xl text-title'/>
                    <span className="bg-primary text-sm -right-3 -top-2 font-bold rounded text-center absolute px-2">0</span>
                  </div>
                <div className='hidden lg:block'>
                  <span className='text-color text-sm'>Your Cart</span>
                  <p className='text-title font-bold text-lg'>$0.00</p>
                </div>
              </a>
              </Link>
          </div>
        </div>
      </div>
   
    </header>
  )
}

export default Header