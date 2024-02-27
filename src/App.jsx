import React, { useState } from 'react'
import Navbar from './parts/navbar/Navbar'
import { createContext } from 'react';
export const Context = createContext()
import { Route, Routes } from 'react-router'
import Layout from './parts/Layout'
import Detail from './parts/detail/Detail'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <Context.Provider value={{ isScrolled, setIsScrolled }}>
      <Routes>
        <Route element={<Layout />} path='/' />
        <Route element={<Detail />} path='detail/:id' />
      </Routes>
    </Context.Provider>
  )
}

export default App