import { Box } from '@chakra-ui/react'
import Navbar from '../navbar/Navbar'
import { Navigate, Outlet, useLocation, } from 'react-router'
import { useAppSelector } from '../../reduxStore/hook'

const PrivateRoute = () => {
    const location = useLocation();
    const user = useAppSelector((state) => state?.auth)

    console.log('user', user)

    if (!user?.accessToken) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }


    return (
        <>
            <Box
                w={"100vw"}
                h={"100vh"}
                bgGradient="linear(to-r,#10263b,#0a111b)"
                color={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {/* NAvbar */}
                <Box pos={"fixed"} top={0} left={0} w={"100vw"}>
                    <Navbar />
                </Box>

                <Outlet />
            </Box>
        </>
    )
}

export default PrivateRoute