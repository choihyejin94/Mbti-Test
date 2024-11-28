import React from 'react'
import Router from './shared/Router'
import { MbtiProvider } from "./context/MbtiContext"

const App = () => {
  return (
    <>
      <MbtiProvider>
        <Router />
      </MbtiProvider>
    </>
  )
}

export default App