import { useEffect } from 'react';
import { useAppSelector } from '../../reduxStore/hook'
import { useDisclosure } from '@chakra-ui/react';
import AccessDenied from '../RoleBaseError/AccessDenied';

const AdminBaseProtected = ({ children, allowedRole }: { children: React.ReactNode, allowedRole: string[] }) => {
    const { onOpen } = useDisclosure();
    const user = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!user?.accessToken) {
            onOpen();
        } else if (user?.accessToken && !allowedRole.includes(user?.role)) {
            onOpen();
        }
    }, [user?.accessToken, allowedRole, user?.role, onOpen]);

    // const handleClose = () => {
    //     onClose();
    //     if (!user?.accessToken) {
    //         window.location.href = "/login";
    //     } else {
    //         window.location.href = "/unauthorized";
    //     }
    // };

    if (user?.accessToken && allowedRole.includes(user?.role)) {
        return children;
    } else {
        return (
            <>
                <AccessDenied />
                {/* <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="gray.800" color="gray.300">
                        <ModalHeader>Access Denied</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {!user?.accessToken ? (
                                <Text>You must be logged in to access this page.</Text>
                            ) : (
                                <Text>You do not have permission to access this page.</Text>
                            )}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleClose}>
                                Go to Login
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal> */}
            </>
        );
    }
}

export default AdminBaseProtected