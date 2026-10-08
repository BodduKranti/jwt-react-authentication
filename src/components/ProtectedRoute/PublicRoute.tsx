import { Box } from '@chakra-ui/react'
import { useAppSelector } from '../../reduxStore/hook'
import { Navigate, Outlet } from 'react-router'
import NavbarLogin from '../navbar/NavbarLogin'

const PublicRoute = () => {
    const user = useAppSelector((state) => state?.auth)

    console.log('user', user)

    if (user?.accessToken) {
        return <Navigate to="/dashboard" replace />;
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
                    <NavbarLogin />
                </Box>

                <Outlet />
            </Box>
        </>
    )
}

export default PublicRoute