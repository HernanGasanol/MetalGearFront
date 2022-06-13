import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Context, ContextProvider } from './context/context'


const App = () => {
  return (
    <ContextProvider > 
      <Layout>
        <Home/>
      </Layout>
    </ContextProvider>
  )
}

export default App