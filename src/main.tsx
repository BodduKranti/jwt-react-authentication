import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './router/index.tsx';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>,
)
