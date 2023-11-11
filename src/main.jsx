import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import { createMemoryRouter, MemoryRouter, Route, RouterProvider } from 'react-router-dom'
import Routes from './pages/routes'
import { ChakraProvider } from '@chakra-ui/react'

const router = Routes()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
