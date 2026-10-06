import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </StrictMode>,
)
