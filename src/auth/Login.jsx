import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { postApi } from '../apis/api'
import { setToken } from '../helpers/localStorage'

export default function Login () {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [formErrors, setFormErrors] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (name === 'email') {
      const emailVal = value
      const isValidEmail = emailRegex.test(emailVal)
      setFormErrors({
        ...formErrors,
        email: isValidEmail ? '' : 'invalid email'
      })
    } else if (name === 'password') {
      let passwordVal = value
      if (passwordVal.includes(' ')) {
        setFormData({ ...formData, password: '' })
        setFormErrors({
          ...formErrors,
          password: 'password cannot contain spaces'
        })
      } else if (!(passwordVal.length >= 8)) {
        setFormErrors({
          ...formErrors,
          password: 'password must be at least 8 characters long or above'
        })
      } else if (!passRegex.test(passwordVal)) {
        setFormErrors({
          ...formErrors,
          password:
            'at least one lowercase,uppercase letter,and one digit is required'
        })
      } else {
        setFormErrors({ ...formErrors, password: '' })
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let newFormErrors = {}

    for (let key in formData) {
      if (formData[key].trim() === '') {
        newFormErrors[key] = `${key} is required`
      }
    }
    setFormErrors(newFormErrors)

    if (Object.keys(newFormErrors).length === 0) {
      try {
        const loginResponse = await postApi('auth/signin/', formData)
        if (loginResponse) {
          console.log('loginResponse', loginResponse)
          navigate('/')
          setToken('token', loginResponse.data.token)
        }
      } catch (error) {
        console.log('Login Error:', error)
      }
    }
  }

  return (
    <>
      <div className="bg-[url('/img/register.jpeg')] flex items-center bg-no-repeat h-[825px] w-full bg-center bg-cover">
        <div className='flex items-center justify-center pl-8 pr-8 mt-5 sm:mx-auto sm:w-1/3 h-2/3 bg-white sm:max-w-1/2 rounded-[10px] border border-zinc-400'>
          <form className='space-y-6 text-start w-full' onSubmit={handleSubmit}>
            <h1 className='text-center text-4xl bg-purple-100 rounded-lg'>
              Login Form
            </h1>
            <div>
              <label
                htmlFor='email_address'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email Address
              </label>
              <div className='relative w-full min-w-[200px] h-10 mt-3'>
                <input
                  type='email'
                  name='email'
                  className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-1 border-stone-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor='email_address'
                  className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                >
                  Email Address<span className='text-red-500'>*</span>
                </label>
                {formErrors.email && (
                  <span className='text-red-500 text-sm'>
                    {formErrors.email}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <div className='relative w-full min-w-[200px] h-10 mt-3'>
                <input
                  type='password'
                  name='password'
                  className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-1 border-stone-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  value={formData.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor='password'
                  className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
                >
                  Password<span className='text-red-500'>*</span>
                </label>
                {formErrors.password && (
                  <span className='text-red-500 text-sm'>
                    {formErrors.password}
                  </span>
                )}
              </div>
            </div>
            <div className='mt-10'>
              <span>Do'nt have an account? </span>
              <NavLink to='/register' className='text-red-600'>
                Register
              </NavLink>
            </div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-teal-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
