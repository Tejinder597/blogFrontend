import { useEffect, useRef } from "react";

export default function CommentModal({
  userData,
  onCloseClick,
  data,
  commentValue,
  onCommentChange,
  onReplyClick,
  onCommentSubmit
}) {
  const commentRef = useRef();

  useEffect(() => {
    commentRef.current.focus();
  }, [])
  return (
    <div>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
        <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity'></div>
        <div className='relative w-full max-w-3xl mx-auto my-6'>
          <div className='relative flex flex-col w-full max-h-[450px] bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
            <div className='flex flex-row space-x-[480px] w-full items-start p-5 pt-2 pb-2 px-6 border-b border-solid rounded-t'>
              <h3 className='text-3xl font-semibold'>Comments</h3>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={onCloseClick}
              >
                Close
              </button>
            </div>
            <div className='relative p-6 flex-auto max-h-96 overflow-y-auto'>
              <div>
                {data &&
                  data.map((commentdata, index) => (
                    <div
                      key={commentdata.id || index}
                      className='flex items-center mb-4'
                    >
                      <img
                        src={
                          commentdata?.user?.userimage
                            ? `http://localhost:8000/${commentdata?.user?.userimage}`
                            : '/img/user2.png'
                        }
                        alt='user-avatar'
                        className='w-10 h-10 rounded-full mr-4'
                      />
                      <div>
                        <p className='text-gray-800 font-semibold'>
                          {commentdata?.user?.username}
                        </p>
                        <p className='text-gray-600'>{commentdata?.comment}</p>
                        <p
                          className='text-blue-500 ml-1 text-[11px] cursor-pointer hover:underline'
                          onClick={() => onReplyClick(commentdata)}
                        >
                          reply
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='w-full flex flex-row justify-evenly px-6 h-[38px]'>
              <img
                src={
                  userData?.userimage
                    ? `http://localhost:8000/${userData?.userimage}`
                    : '/img/user2.png'
                }
                alt='user-avatar'
                className='w-[10%] 2xl:w-[5%] h-[100%] mr-2 rounded-full'
              />
              <input
                type='string'
                name='comment'
                ref={commentRef}
                value={commentValue}
                onChange={onCommentChange}
                placeholder='Enter your comment...'
                className='block pl-2 w-[80%] text-sm text-gray-900 bg-transparent rounded border border-1 border-stone-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              />
              <button
                onClick={onCommentSubmit}
                className=' w-auto px-4 py-2 ml-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 border-gray-400 outline-none focus:outline-none focus:border-blue-600 transition-colors duration-300'
              >
                Comment
              </button>
            </div>
            <div className='flex items-center justify-end p-6 mt-4 border-t border-solid rounded-b'></div>
          </div>
        </div>
      </div>
    </div>
  )
}