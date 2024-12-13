import { useSelector } from "react-redux";

export default function Card({
  data,
  onOpenClick,
  onViewLikeClick,
  onLikeClick,
  onDislikeClick,
  onCommentClick,
}) {
  const userData = useSelector(state => state.user.users);
  return (
    <>
      {data &&
        data.map(post => {
          const likedUserIds = post?.Likes.map(likeData => likeData.user.id);
          return (
            <div
              key={post.id}
              className='user-detail-box flex flex-col rounded-md mt-8 h-[350px] w-[360px] border border-white'
            >
              <div className='h-[13%] w-full items-center flex flex-row'>
                <img
                  className='h-8 w-8 rounded-full ml-2 cursor-pointer'
                  src={
                    post?.user?.userimage
                      ? `http://localhost:8000/${post?.user?.userimage}`
                      : '/img/user2.png'
                  }
                  alt='user'
                />
                <div className='flex flex-row justify-between items-center w-full'>
                  <p className='ml-2 text-white cursor-pointer'>
                    {post?.user?.username}
                  </p>
                  <i
                    className='fa-thin fa-solid fa-ellipsis-vertical mr-4 cursor-pointer text-white'
                    onClick={() => onOpenClick(post)}
                  ></i>
                </div>
              </div>
              <p className='text-white max-w-[270px] text-start relative left-12 bottom-2'>
                {post?.title}
              </p>
              <div className='h-[65%] w-full'>
                <img
                  className='h-full w-full border'
                  src={`http://localhost:8000/${post?.files}`}
                  alt='post'
                />
              </div>
              <div className='h-[22%]'>
                <div className='h-[50%] flex flex-row items-center'>
                  {post?.likescount > 0 && (
                    <img
                      className='h-6 w-6 rounded-full ml-2 cursor-pointer'
                      src={
                        post?.first_liker?.userimage
                          ? `http://localhost:8000/${post?.first_liker?.userimage}`
                          : '/img/user2.png'
                      }
                      alt='user'
                    />
                  )}
                  <div
                    className='text-white ml-2 cursor-pointer'
                    onClick={() => onViewLikeClick(post)}
                  >
                    {(() => {
                      if (post?.likescount > 0) {
                        return (
                          <>
                            {post?.first_liker?.username} and{' '}
                            <span>{post?.likescount} other liked this</span>
                          </>
                        )
                      } else if (post?.likescount === 0 && post?.first_liker) {
                        return (
                          <div className='flex flex-row mt-1'>
                            <img
                              className='h-6 w-6 rounded-full cursor-pointer'
                              src={
                                post?.first_liker?.userimage
                                  ? `http://localhost:8000/${post?.first_liker?.userimage}`
                                  : '/img/user2.png'
                              }
                              alt='user'
                            />
                            <p className='ml-2'>
                              {post?.first_liker?.username} liked this
                            </p>
                          </div>
                        )
                      } else {
                        return ''
                      }
                    })()}
                  </div>
                </div>
                <div className='w-full h-[50%] flex flex-row items-center'>
                  {/* {likedUserIds.includes(userData?.id) ( */}
                  {post?.isLiked ? (
                    <i
                      className='fa-solid fa-heart ml-4 mr-4 cursor-pointer text-xl text-red-600'
                      onClick={() => onDislikeClick(post)}
                    ></i>
                  ) : (
                    <i
                      className='fa-regular fa-heart ml-4 mr-4 cursor-pointer text-xl text-white'
                      onClick={() => onLikeClick(post)}
                    ></i>
                  )
                  }
                  <i
                    className='fa-regular fa-comment ml-4 cursor-pointer text-xl text-white'
                    onClick={() => onCommentClick(post)}
                  ></i>
                  <i className='fa-sharp fa-regular ml-8 cursor-pointer fa-paper-plane text-white'></i>
                </div>
              </div>
            </div>
          );
        })}
    </>
  )
}
