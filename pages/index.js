import Head from 'next/head';
import { useAuth } from "@lib/auth";
import { Box, Button, Code, Flex, Heading, Text } from "@chakra-ui/react"
import { ChatIcon } from '@chakra-ui/icons'


const Home = () => {

  const auth = useAuth();
  return <Flex as="main" direction="column" align="center" justify="center" maxW="100%" h="100vh">
    <Head>
      <title>RapidBack</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>



    <ChatIcon w={40} h={40} color="blue.500" />

    <Heading  fontFamily="" fontSize="40px" mt={4}>RapidBack</Heading>

    <Text>

      <Code mt={4}>Fest and sample feedback for you</Code>

    </Text>


    {/* deslogar da sessao */}
    {auth.user ? (
      <Button mt={4} onClick={(e) => auth.signout()}>Sign Out</Button>
    ) : (
        <Button mt={4} colorScheme="blue"  variant="outline" size="sm" onClick={(e) => auth.signWithGithub()}>SignIn With Github</Button>
      )}
    {/* logar na sessao */}

  </Flex>
};


export default Home
