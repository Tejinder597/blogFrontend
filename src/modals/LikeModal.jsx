import React from 'react'

export default function LikeModal ({ data, onCloseClick }) {
  return (
    <div>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
        <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity'></div>
        <div className='relative w-full max-w-3xl mx-auto my-6'>
          <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
            <div className='flex flex-row space-x-[480px] w-full items-start p-3 px-6 border-b border-solid rounded-t'>
              <h2 className='text-2xl mt-1 font-semibold'>Likes</h2>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-28 mt-2 text-xs outline-none focus:outline-none mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={onCloseClick}
              >
                Close
              </button>
            </div>
            <div className='flex pr-6 pl-6 pt-8 pb-0 flex-col flex-auto max-h-96 overflow-y-auto'>
              {data &&
                data.map((like, index) => (
                  <div className='flex items-center mb-4' key={index}>
                    <img
                      src={
                        like?.user?.userimage
                          ? `http://localhost:8000/${like?.user?.userimage}`
                          : '/img/user2.png'
                      }
                      alt='user-avatar'
                      className='w-10 h-10 rounded-full cursor-pointer mr-4'
                    />
                    <div>
                      <p className='text-gray-800 cursor-pointer font-semibold'>
                        {like.user?.username}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className='flex items-center justify-end p-6 mt-4 border-t border-solid rounded-b'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
