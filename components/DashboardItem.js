import React from 'react'
import { Flex, Link, Stack, Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useAuth } from "@lib/auth";


const DashboardItem = ({ children }) => {


    const auth = useAuth();

    return <Flex flexDirection="column">
        <Flex
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="white"
            p={4}
            py={4}
            px={8}
        >
            <Stack isInline spacing={4} align="center">

                <ChatIcon w={6} h={6} />
                <Link>Feedback</Link>
                <Link>Websites</Link>
            </Stack>
            <Flex alignItems="center">
                <Link mr={4}>Account</Link>
                <Avatar size="sm" src={auth.user.photoUrl} />
            </Flex>
        </Flex>
        <Flex
            backgroundColor="gray.100"
            color="gray.60"
            p={8}
            height="100vh"
        >
            <Flex
                width="100%"
                maxWidth="800px"
                ml="auto"
                mr="auto"
                direction="column"
            >
                <Breadcrumb>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink color="black" fontFamily="">Websites</BreadcrumbLink>
                    </BreadcrumbItem>
                    <Heading color="black" fontFamily="">Websites</Heading>
                    {children}
                </Breadcrumb>
            </Flex>
        </Flex>
    </Flex>

}

export default DashboardItem