import React, { FC } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes, Outlet, Router } from 'react-router-dom'

const App: FC = () => {
    return (
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    )
}

export default App
