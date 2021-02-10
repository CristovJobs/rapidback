import React from 'react'
import { useAuth } from "@lib/auth";
import DashboardItem from '@components/DashboardItem'
import {Code, Heading, Box, Text, Button } from '@chakra-ui/react'

const FreePlanStatesItem = () => {

    const auth = useAuth();

    return <DashboardItem>
        <Box width="100%" backgroundColor="white" borderRadius="8px" p={16} justify="center" direction="column" align="center">
            <Heading mb={1} color="black" size="md" fontFamily="">Get news feedback on your sites</Heading>
            <Text mb={1} color="blackAlpha.800" fontFamily="">  Start now <Code>{auth.user ? (auth.user.name) : ('not have any...')}</Code> and views all feedback 😎</Text>
            <Button variant="solid" size="md" color="black" nb={4} mt={2}>
                Upgrade To Starter
          </Button>
        </Box>

    </DashboardItem>


}

export default FreePlanStatesItem