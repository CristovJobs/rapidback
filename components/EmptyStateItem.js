import React from 'react'
import { useAuth } from "@lib/auth";
import DashboardItem from '@components/DashboardItem'
import { Code, Heading, Flex, Text, Button } from '@chakra-ui/react'

const EmptyStateItem = () => {

  const auth = useAuth();

  return <DashboardItem>
          <Flex width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
            <Heading color="black" size="md" mb={1} fontFamily="">You haven't added any sites to your list yet</Heading>
            <Text mb={1} color="blackAlpha.800" fontFamily="">Welcome 💪 <Code>{auth.user ? (auth.user.name) : ('not have any...')}</Code> and start coming up with feedback </Text>
           <Button variant="solid" size="md" color="black" nb={4} mt={2}>
          Add Your First Website
        </Button>
     </Flex>

  </DashboardItem>


}

export default EmptyStateItem