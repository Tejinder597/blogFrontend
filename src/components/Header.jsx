import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useSelector } from 'react-redux'

export default function Header () {
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const userData = useSelector(state => state.user.users)

  const { isLoggedIn, logout } = useAuth()

  const checkUser = () => {
    setShowUserDropdown(!showUserDropdown)
  }

  const logOutHandle = () => {
    logout()
    setShowUserDropdown(false)
  }

  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-20 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                type='button'
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='absolute -inset-0.5'></span>
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img className='h-8 w-auto' src='./img/logo.gif' alt='logo' />
              </div>
              {isLoggedIn ? (
                <>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      <NavLink
                        to='/'
                        className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        aria-current='page'
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to='/about'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to='/contact'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        Contact Us
                      </NavLink>
                      <NavLink
                        to='/myblogs'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        My Blogs
                      </NavLink>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      <NavLink
                        to='/'
                        className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                        aria-current='page'
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to='/about'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to='/contact'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {isLoggedIn && (
                <div className='relative ml-3'>
                  {showUserDropdown && (
                    <div
                      className='absolute z-10 mt-5 ml-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu-button'
                      tabIndex='-1'
                    >
                      <NavLink
                        to='/profile'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-0'
                      >
                        My Profile
                      </NavLink>
                      <NavLink
                        to='/createblog'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-1'
                      >
                        Create Blog
                      </NavLink>
                      <NavLink
                        to='/login'
                        onClick={logOutHandle}
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-2'
                      >
                        Log Out
                      </NavLink>
                    </div>
                  )}
                </div>
              )}

              {!isLoggedIn ? (
                <>
                  <NavLink
                    href='#'
                    to='/login'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium'
                  >
                    Login/Register
                  </NavLink>
                </>
              ) : (
                <>
                  <div>
                    <button
                      type='button'
                      className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                      id='user-menu-button'
                      aria-expanded='false'
                      aria-haspopup='true'
                    >
                      <span className='absolute -inset-1.5'></span>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={
                          isLoggedIn && userData?.userimage
                            ? `http://localhost:8000/${userData?.userimage}`
                            : '/img/user2.png'
                        }
                        alt='user'
                      />
                    </button>
                  </div>
                  <div
                    className='text-white ml-3 mr-3 cursor-pointer username'
                    onClick={checkUser}
                  >
                    {userData?.username}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <NavLink
              to='/'
              className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
              aria-current='page'
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              About Us
            </NavLink>
            <NavLink
              to='/contact'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
