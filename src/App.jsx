import React from 'react'
import Navbar from './parts/navbar/Navbar'
import { Route, Routes } from 'react-router'
import Layout from './parts/Layout'
import Detail from './parts/detail/Detail'

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path='/' />
      <Route element={<Detail />} path='detail/:id' />
    </Routes>
  )
}

export default App