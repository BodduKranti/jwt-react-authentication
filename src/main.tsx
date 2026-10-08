import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './router/index.tsx';
import QueryClientproviderapi from './provider/queryclientprovider/QueryClientprovider.tsx';
import ReduxProvider from './provider/reduxProvider/ReduxProvider.tsx';



createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <QueryClientproviderapi>
            <ChakraProvider>
                <ReduxProvider>
                    <RouterProvider router={router} />
                </ReduxProvider>
            </ChakraProvider>
        </QueryClientproviderapi>

    </StrictMode>,
)
