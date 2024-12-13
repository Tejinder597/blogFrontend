import { useState, useEffect } from 'react'
import { getToken, removeToken } from '../helpers/localStorage'
import { getApi } from '../apis/api'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, deleteUser } from '../redux/slices/userSlice'

export function useAuth () {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

  const reduxData = useSelector(state => state.user.users)

  useEffect(() => {
    const storedToken = getToken('token')
    if (storedToken) {
      setToken(storedToken)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

    const loadUserData = async () => {
      try {
        if (!reduxData) {
          const profileResponse = await getApi('auth/profile/')
          if (profileResponse && profileResponse.data) {
            dispatch(createUser(profileResponse.data.data))
          }
        }
      } catch (error) {
        console.log('Error getting profile', error)
      } finally {
        setLoading(false)
      }
    }

    if (storedToken) {
      loadUserData()
    } else {
      setLoading(false)
    }
  }, [reduxData, dispatch])

  const logout = () => {
    setToken(null)
    removeToken('token')
    removeToken('user_data')
    dispatch(deleteUser())
  }

  return {
    token,
    isLoggedIn,
    loading,
    logout
  }
}
