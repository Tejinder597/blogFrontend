import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi, putApi } from '../apis/api'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/slices/userSlice'

export default function MyProfile () {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    userimage: null,
    userimage_file: null
  })
  const navigate = useNavigate()
  const dummyImage = 'user2.png'
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserData = async () => {
      const userProfileResponse = await getApi('auth/profile/')
      if (userProfileResponse) {
        const data = userProfileResponse.data.data
        setUserData({
          ...data,
          userimage: data.userimage
            ? `http://localhost:8000/${data.userimage}`
            : null
        })
      }
    }
    getUserData()
  }, [])

  const handleChange = e => {
    const { name, value, files } = e.target
    if (name === 'userimage' && files.length > 0) {
      const file = files[0]
      const imageUrl = URL.createObjectURL(file)
      setUserData(prevData => ({
        ...prevData,
        userimage: imageUrl,
        userimage_file: file
      }))
    } else {
      setUserData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const formData = new FormData()
      Object.entries(userData).forEach(([key, value]) => {
        if (key === 'userimage_file' && value) {
          formData.append('userimage', value)
        } else if (key !== 'userimage' && key !== 'userimage_file') {
          formData.append(key, value)
        }
      })
      const profileUpdateResponse = await putApi(
        'auth/profile/update/',
        formData
      )
      if (profileUpdateResponse) {
        const updatedUser = profileUpdateResponse.data.data
        console.log('profileUpdateResponse', profileUpdateResponse)
        dispatch(updateUser({ updatedData: updatedUser }))
        navigate('/')
      }
    } catch (error) {
      console.log('profileUpdateError: ', error)
    }
  }

  return (
    <>
      <div className="bg-[url('/img/crudbackground.jpg')] bg-no-repeat bg-center bg-cover flex min-h-full flex-1 flex-col items-center justify-center h-[825px] px-6 py-12 lg:px-8">
        <h1 className='text-center text-4xl md:min-w-[480px] bg-transparent text-white rounded-lg'>
          Update Profile
        </h1>
        <div className='flex items-center justify-center mt-5 sm:mx-auto sm:w-1/3 h-2/3 bg-transparent sm:max-w-1/2 rounded-[10px] border border-zinc-400 backdrop-blur-xl p-8 form-box'>
          <form className='space-y-6 text-start w-full' onSubmit={handleSubmit}>
            <label
              htmlFor='cover-photo'
              className='block text-sm font-medium leading-6 text-white'
            >
              Profile Picture
            </label>
            <div className='mt-2 flex justify-center rounded-lg border border-dashed border-white px-2 py-2'>
              <label htmlFor='file-upload' className='relative cursor-pointer'>
                <img
                  className='h-20 w-20 rounded-full transition duration-300 ease-in-out hover:opacity-75'
                  src={userData?.userimage || dummyImage}
                  alt='profile_img'
                />

                <input
                  id='file-upload'
                  name='userimage'
                  type='file'
                  accept='image/*'
                  className='sr-only'
                  onChange={handleChange}
                />
                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out rounded-full' />
              </label>
            </div>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-white'
              >
                UserName
              </label>
              <div className='relative w-full min-w-[200px] h-10 mt-3'>
                <input
                  type='text'
                  name='username'
                  className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-1 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  value={userData?.username || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-white'
              >
                Email
              </label>
              <div className='relative w-full min-w-[200px] h-10 mt-3'>
                <input
                  type='email'
                  name='email'
                  className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-1 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=''
                  value={userData?.email || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-span-12'></div>
            <div className='h-24 flex flex-col justify-evenly items-center'>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Update
              </button>
              <button
                type='button'
                className='flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
