import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import { deleteApi, getApi, postApi, putApi } from '../apis/api'
import CardModal from '../modals/CardModal'
import { useAuth } from '../hooks/useAuth'
import ReplyModal from '../modals/ReplyModal'
import LikeModal from '../modals/LikeModal'
import CommentModal from './CommentModal'
import { useSelector } from 'react-redux'

export default function MyBlog() {
  const [postData, setPostData] = useState([])
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [showCardModal, setShowCardModal] = useState(false)
  const [cardModalData, setCardModalData] = useState('')
  const [commentData, setCommentData] = useState([])
  const [LikeData, setLikeData] = useState([])
  const [showLikeModal, setShowLikeModal] = useState(false)
  const [replyData, setReplyData] = useState([])
  const [comment, setComment] = useState('')
  const [reply, setReply] = useState('')
  const [postId, setpostId] = useState('')
  const [commentId, setCommentId] = useState('')
  const { isLoggedIn } = useAuth()
  const userData = useSelector(state => state.user.users)

  const handleBlogOpen = data => {
    const isPostOwner = data?.userId === userData?.id
    if (isPostOwner) {
      setShowCardModal(true)
      const matchedData = postData.find(post => post?.id === data?.user?.id)
      if (matchedData) {
        setCardModalData([matchedData])
      }
    }
  }

  const handleLike = async data => {
    try {
      const postId = data.id
      const likeResponse = await postApi(`public/postlike`, { postId })
      if (likeResponse) {
        console.log('likeResponse', likeResponse)
      }
    } catch (error) {
      console.log('Like Error :', error)
    }
  }

  const handleLikesOpen = data => {
    const matchedData = postData.find(post => post.id === data.id)
    if (matchedData) {
      setShowLikeModal(true)
      setLikeData(matchedData?.Likes)
    }
  }

  const handleDislike = async data => {
    try {
      const postId = data.id
      const disLikeResponse = await deleteApi(`public/deletelike`, { postId })
      if (disLikeResponse) {
        console.log('disLikeResponse', disLikeResponse)
      }
    } catch (error) {
      console.log('disLike Error :', error)
    }
  }

  useEffect(() => {
    const getBlogData = async () => {
      try {
        if (isLoggedIn) {
          const getOwnBlogsResponse = await getApi('public/getownblogs')
          if (getOwnBlogsResponse) {
            console.log('getOwnBlogsResponse', getOwnBlogsResponse)
            setPostData(getOwnBlogsResponse.data.data)
            const likedata = getOwnBlogsResponse.data.data.map(
              dt => dt.Likes || []
            )
            const commentdata = getOwnBlogsResponse.data.data.map(
              dt => dt.comments || []
            )
            const replydata = getOwnBlogsResponse.data.data.map(dt =>
              dt.comments.map(cmt => cmt.replies || [])
            )
            setLikeData(likedata)
            setCommentData(commentdata)
            setReplyData(replydata)
          }
        } else {
          setPostData([])
        }
      } catch (error) {
        console.log('getOwnBlogs Error: ', error)
      }
    }
    getBlogData()
  }, [isLoggedIn])

  const handleCommentClick = data => {
    const matchedPost = postData.find(post => post.id === data.id)
    if (matchedPost) {
      setCommentData(matchedPost.comments)
      setpostId(data.id)
    }
    setShowCommentModal(true)
  }

  const handleReplyClick = data => {
    const matchedComment = commentData.find(comment => comment.id === data.id)
    if (matchedComment) {
      setReplyData(matchedComment.replies)
      setCommentId(data.id)
    }
    setShowReplyModal(true)
  }

  const handleBlogChange = data => { }

  const handleUpdateBlog = async updatedData => {
    const { id, title, post_image } = updatedData
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('postId', id)
      if (post_image) {
        formData.append('file', post_image)
      }
      const postUpdateResponse = await putApi(`public/updateblog`, formData, {})
      if (postUpdateResponse) {
        setShowCardModal(false)
        console.log('postUpdateResponse', postUpdateResponse)
        setPostData(prevData =>
          prevData.map(post =>
            post.id === updatedData.id
              ? { ...post, title, files: postUpdateResponse?.data?.data?.files }
              : post
          )
        )
      }
    } catch (error) {
      console.log('postUpdate Error: ', error)
    }
  }

  const handleDeleteBlog = async data => {
    try {
      const postId = data?.id
      const deleteResponse = await deleteApi(`public/deleteblog`, {
        postId
      })
      if (deleteResponse && deleteResponse?.data) {
        console.log('PostDeleteResponse', deleteResponse)
        setPostData(prevData => prevData.filter(post => post.id !== postId))
        setShowCardModal(false)
      }
    } catch (error) {
      console.log('postDelete Error')
    }
  }

  const handleCommentSubmit = async () => {
    try {
      if (comment.trim() === '') return
      const postCommentResponse = await postApi(`public/postcomment`, {
        postId,
        comment
      })
      if (postCommentResponse) {
        console.log('postCommentResponse', postCommentResponse)
        const newComment = postCommentResponse?.data?.data
        if (newComment) {
          setComment('')
          setCommentData(prevData => [...prevData, newComment])
        }
      }
    } catch (error) {
      console.log('postComment Error: ', error)
    }
  }

  const handleReplySubmit = async () => {
    try {
      if (reply.trim() === '') return
      const postReplyResponse = await postApi(`public/postreply`, {
        postId,
        commentId,
        reply
      })
      if (postReplyResponse) {
        console.log('postReplyResponse', postReplyResponse)
        const newReply = postReplyResponse?.data?.data
        if (newReply) {
          setReply('')
          setReplyData(prevData => [...prevData, newReply])
        }
      }
    } catch (error) {
      console.log('postReply Error: ', error)
    }
  }

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <div>
        <Header />
        <div className="bg-[url('/img/bg3.jpg')] bg-no-repeat w-full h-auto bg-center bg-cover border border-black">
          <h1 className='text-center text-3xl text-white'>My Blogs</h1>
          <div className='mx-auto max-w-7xl min-h-[280px] px-6 lg:px-8 backdrop-sepia-0 bg-black/40 rounded-md my-10'>
            <div className='flex flex-col justify-evenly max-w-full text-center'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-white'>
                From the blog
              </h2>
              <p className='mt-2 text-lg leading-8 text-white'>
                Learn how to grow your business with our expert advice.
              </p>
              <div className='flex flex-row flex-wrap justify-evenly items-center mb-8 pb-8'>
                {isLoggedIn && postData.length > 0 && (
                  <Card
                    data={postData}
                    onOpenClick={handleBlogOpen}
                    onLikeClick={handleLike}
                    onViewLikeClick={handleLikesOpen}
                    onDislikeClick={handleDislike}
                    onCommentClick={handleCommentClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {showCardModal && (
          <CardModal
            data={cardModalData}
            onEditClick={handleBlogChange}
            onUpdateClick={handleUpdateBlog}
            onDeleteClick={handleDeleteBlog}
            onCancelClick={() => setShowCardModal(!showCardModal)}
          />
        )}
        {showCommentModal && (
          <CommentModal
            userData={userData}
            data={commentData}
            commentValue={comment}
            onCloseClick={() => setShowCommentModal(false)}
            onCommentChange={e => setComment(e.target.value)}
            onReplyClick={handleReplyClick}
            onCommentSubmit={handleCommentSubmit}
          />
        )}
        {showReplyModal && (
          <ReplyModal
            userData={userData}
            data={replyData}
            replyValue={reply}
            onCloseClick={() => setShowReplyModal(false)}
            onReplyChange={e => setReply(e.target.value)}
            onReplySubmit={handleReplySubmit}
          />
        )}
        {showLikeModal && (
          <LikeModal
            data={LikeData}
            onCloseClick={() => setShowLikeModal(false)}
          />
        )}
        <Footer />
      </div>
    </>
  )
}
