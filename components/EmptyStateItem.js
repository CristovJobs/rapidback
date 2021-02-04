import React from 'react'
import { useAuth } from "@lib/auth";
import DashboardItem from '@components/DashboardItem'
import { Code, Heading, Flex, Text } from '@chakra-ui/react'
import AddSiteModalItem from '@components/AddSiteModalItem';

const EmptyStateItem = () => {

  const auth = useAuth();

  return <DashboardItem>
          <Flex width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
            <Heading color="black" size="lg" mb={2} fontFamily="">You haven't added any sites</Heading>
            <Text mb={2} mt={1} color="blackAlpha.800" fontFamily="">Welcome 💪 <Code>{auth.user ? (auth.user.name) : ('not have any...')}</Code> and start coming up with feedback </Text>
          <AddSiteModalItem/>   
     </Flex>

  </DashboardItem>


}

export default EmptyStateItem