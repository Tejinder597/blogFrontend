import React, { useState, useEffect } from 'react'

export default function CardModal ({
  data,
  onEditClick,
  onUpdateClick,
  onDeleteClick,
  onCancelClick
}) {
  const [updatedData, setUpdatedData] = useState({
    id: '',
    title: '',
    post_image: null,
    post_image_preview: ''
  })

  useEffect(() => {
    if (data && data.length > 0) {
      const post = data[0]
      setUpdatedData({
        id: post.id,
        title: post.title,
        post_image: null,
        post_image_preview: `http://localhost:8000/${post?.files}`
      })
    }
  }, [data])

  const handleTitleChange = e => {
    setUpdatedData(prev => ({
      ...prev,
      title: e.target.value
    }))
    onEditClick(e.target.value)
  }

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      setUpdatedData(prev => ({
        ...prev,
        post_image: file,
        post_image_preview: URL.createObjectURL(file)
      }))
    }
  }

  const handleUpdateClick = () => {
    const formData = new FormData()
    formData.append('title', updatedData.title)
    if (updatedData.post_image) {
      formData.append('file', updatedData.post_image)
    }
    onUpdateClick(updatedData, formData)
  }

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-[20px] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
      <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity'>
        <div className='post-main flex flex-wrap justify-evenly items-center h-full'>
          <div className='post-box mt-4 flex justify-evenly items-center min-h-96 w-full rounded-xl'>
            {data &&
              data.map(post => (
                <div
                  key={post.id}
                  className='user-detail-box flex flex-col rounded-md h-[430px] w-[400px] border border-white'
                >
                  <div className='h-[13%] w-full items-center flex flex-col'>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <img
                        className='h-8 w-8 rounded-full mx-2 my-2 cursor-pointer'
                        src={
                          post?.user?.userimage
                            ? `http://localhost:8000/${post?.user?.userimage}`
                            : '/img/user2.png'
                        }
                        alt='user'
                      />
                      <p className='text-white w-[80%]'>
                        {post?.user?.username}
                      </p>
                      <i className='fa-thin fa-solid fa-ellipsis-vertical mr-4 cursor-pointer text-white'></i>
                    </div>
                    <input
                      name='title'
                      type='text'
                      className='text-white bg-transparent min-w-[320px] relative left-2 bottom-2 outline-none'
                      value={updatedData.title}
                      onChange={handleTitleChange}
                    />
                  </div>
                  <div className='h-[58%] mt-4 w-full flex justify-center border border-white'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer'
                    >
                      <img
                        className='h-full w-full rounded transition duration-300 ease-in-out hover:opacity-75'
                        src={
                          updatedData.post_image_preview ||
                          `http://localhost:8000/${post?.files}`
                        }
                        alt='post'
                      />
                      <input
                        id='file-upload'
                        name='post_image'
                        type='file'
                        accept='image/*'
                        className='sr-only'
                        onChange={handleImageChange}
                      />
                      <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out' />
                    </label>
                  </div>
                  <div className='h-[26%] flex flex-col justify-evenly'>
                    <button
                      type='button'
                      className='text-white pt-1 pb-1 rounded-md bg-green-600 hover:bg-green-700'
                      onClick={handleUpdateClick}
                    >
                      Update
                    </button>
                    <button
                      type='button'
                      className='text-white pt-1 pb-1 bg-red-600 hover:bg-red-800'
                      onClick={() => onDeleteClick(post)}
                    >
                      Delete
                    </button>
                    <button
                      type='button'
                      className='text-white pt-1 pb-1 bg-orange-600 hover:bg-orange-800'
                      onClick={onCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
