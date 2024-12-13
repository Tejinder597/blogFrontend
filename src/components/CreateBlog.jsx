import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { postApi } from '../apis/api'

export default function CreateBlog () {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    imagePreview: null
  })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setFormData({
        ...formData,
        image: files[0],
        imagePreview: files[0]?.name
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('title', formData.title)
    if (formData.image) {
      fd.append('file', formData.image)
    }

    try {
      const postUploadResponse = await postApi('public/postblog/', fd)
      if (postUploadResponse) {
        console.log('postUploadResponse', postUploadResponse)
        navigate('/')
      }
    } catch (error) {
      console.error('Error uploading post:', error)
    }
  }

  return (
    <>
      <Header />
      <div className="bg-[url('/img/crudbackground.jpg')] bg-no-repeat bg-center bg-cover flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <h1 className='text-center text-4xl md:min-w-[480px] bg-transparent text-white rounded-lg'>
          Create Blog
        </h1>
        <div className='flex items-center justify-center mt-5 sm:mx-auto sm:w-1/3 h-2/3 bg-transparent sm:max-w-1/2 rounded-[10px] border border-zinc-400 backdrop-blur-xl form-box'>
          <form className='space-y-6 text-start w-full' onSubmit={handleSubmit}>
            <div className='col-span-12 p-8'>
              <label
                htmlFor='title'
                className='block text-sm font-medium leading-6 text-white'
              >
                Title
              </label>
              <input
                type='text'
                name='title'
                className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={formData?.title}
                onChange={handleChange}
                required
              />
              <label
                htmlFor='image'
                className='block text-sm font-medium leading-6 text-white mt-4'
              >
                Photo
              </label>
              <div className='mt-2 flex justify-center rounded-lg border border-dashed border-white px-2 py-2'>
                <div className='text-center'>
                  <svg
                    className='mx-auto h-5 w-12 text-gray-300'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                    <label
                      htmlFor='file'
                      className='relative cursor-pointer rounded-md bg-transparent font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                    >
                      <span className='text-red-600'>Upload a file</span>
                      <input
                        id='file'
                        name='file'
                        type='file'
                        className='sr-only'
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <p className='pl-1 text-white'>or drag and drop</p>
                  </div>
                  <p className='text-xs leading-5 text-white'>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className='h-24 flex items-center'>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
