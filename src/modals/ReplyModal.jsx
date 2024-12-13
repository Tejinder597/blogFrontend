import { useEffect, useRef, useState } from "react";

export default function ReplyModal({
  onCloseClick,
  data,
  userData,
  replyValue,
  onReplyChange,
  onReplySubmit
}) {
  const replyRef = useRef();

  useEffect(() => {
    replyRef.current.focus();
  }, []);

  const handleReplyClick = (username) => {
    const newReplyValue = `@${username}` + ' ';
    onReplyChange({ target: { value: newReplyValue } });
    replyRef.current.focus();
  };

  const handleSubmit = () => {
    const cleanedReplyValue = replyValue.replace(/@\w+\s*/, '').trim();
    if (cleanedReplyValue) {
      onReplySubmit(cleanedReplyValue);
    }
  };

  return (
    <div>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
        <div className='absolute inset-0 bg-black bg-opacity-60 transition-opacity'></div>
        <div className='relative w-full max-w-3xl mx-auto my-6'>
          <div className='relative flex flex-col w-full max-h-[450px] bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
            <div className='flex flex-row space-x-[480px] w-full items-start p-5 pt-2 pb-2 px-6 border-b border-solid rounded-t'>
              <h3 className='text-3xl font-semibold'>Replies</h3>
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
                  data.map((replyData, index) => (
                    <div
                      key={replyData.id || index}
                      className='flex items-center mb-4'
                    >
                      <img
                        src={replyData?.user?.userimage ? `http://localhost:8000/${replyData?.user?.userimage}` : '/img/user2.png'}
                        alt='user-avatar'
                        className='w-10 h-10 rounded-full mr-4'
                      />
                      <div>
                        <p className='text-gray-800 font-semibold'>
                          {replyData?.user?.username}
                        </p>
                        <p className='text-gray-600'>{replyData?.reply}</p>
                        <p
                          className='text-blue-500 ml-1 text-[11px] cursor-pointer hover:underline'
                          onClick={() => handleReplyClick(replyData?.user?.username)}
                        >
                          reply
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='w-full flex flex-row justify-evenly px-6 h-[40px]'>
              <img
                src={userData?.userimage ? `http://localhost:8000/${userData?.userimage}` : '/img/user2.png'}
                alt='user'
                className='w-[10%] 2xl:w-[5%] h-[100%] mr-2 rounded-full'
              />
              <input
                ref={replyRef}
                type='string'
                name='reply'
                value={replyValue}
                onChange={onReplyChange}
                placeholder='Enter your reply...'
                className='block pl-2 w-[80%] text-sm text-gray-900 bg-transparent rounded border border-1 border-stone-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              />
              <button
                onClick={handleSubmit}
                className=' w-auto px-4 ml-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 border-gray-400 outline-none focus:outline-none focus:border-blue-600 transition-colors duration-300'
              >
                Reply
              </button>
            </div>
            <div className='flex items-center justify-end p-6 mt-4 border-t border-solid rounded-b'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
