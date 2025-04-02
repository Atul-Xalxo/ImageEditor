import { useState } from 'react'

import './App.css'
import LeftBar from './components/leftBar/LeftBar'
import TopBar from './components/topBar/TopBar'
import Gallery from './components/gallery/Gallery'
import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/homePage/HomePage'
import CreatePage from './routes/createPage/CreatePage'
import PostPage from './routes/postPage/PostPage'
import AuthPage from './routes/authPage/AuthPage'
import ProfilePage from './routes/profilePage/ProfilePage'
import SearchPage from './routes/searchPage/SearchPage'
import MainLayout from './routes/layout/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return  (
    <div className="app">
     

      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/pin/:id' element={<PostPage/>} />
       
        <Route path='/:username' element={<ProfilePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        </Route>
         <Route path ='/auth' element={<AuthPage/>} />
      </Routes>

    </div>
  )
}

export default App
