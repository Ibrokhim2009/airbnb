import React, { useState } from 'react'
import Navbar from './parts/navbar/Navbar'
import { createContext } from 'react';
export const Context = createContext()
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <Context.Provider value={{ isScrolled, setIsScrolled }}>
      <Navbar />
    <h1>lorem</h1>
    </Context.Provider>
  )
}

export default App