import { Route, Routes, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import './styles/global.scss'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import { AppHeader } from './components/AppHeader'
import { Login } from 'views/Login'
import { useState } from 'react'
import { User } from 'models/user.interface'
import { Lobby } from 'views/Lobby'
import { CodeblockView } from 'views/CodeblockView'

function App() {
  const [loggedinUser, setLoggedinUser] = useState<User>()

  return (
    <AppContainer>
      <ToastContainer />
      <AppHeader />
      <MainContainer>
        <Routes>
          <Route path='/user/login' element={<Login setLoggedinUser={setLoggedinUser} />} />
          <Route path='/lobby' element={<Lobby loggedinUser={loggedinUser} />} />
          <Route path='/codeblock/:codeblockId/:uuid' element={<CodeblockView loggedinUser={loggedinUser} />} />
          <Route path="*" element={<Navigate to='/user/login' replace />} />
        </Routes>
      </MainContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.main`
  flex: 1;
  background-color: ${({ theme: { blackPrimary } }) => blackPrimary};
  color: white;
`

export default App
