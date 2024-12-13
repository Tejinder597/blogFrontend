import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Login from './auth/Login'
import Register from './auth/Register'
import MyBlog from './components/MyBlog'
import CreateBlog from './components/CreateBlog'
import MyProfile from './auth/MyProfile'
import PrivateRoutes from './helpers/PrivateRoutes'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path='/createblog' element={<CreateBlog />}></Route>
              <Route path='/myblogs' element={<MyBlog />}></Route>
              <Route path='/profile' element={<MyProfile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
