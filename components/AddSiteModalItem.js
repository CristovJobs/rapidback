import { useRef } from 'react'
import { useToast, Button, useDisclosure, FormLabel, Input, FormControl, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { addSite } from '@lib/db'

const AddSiteModalItem = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef()
    const toast = useToast()

    const createSite = data =>{
        
        addSite(data);
        onClose();
        toast({ title: "Success.", description: "We've created your site.", status: "success", duration: 9000, isClosable: true, })
    
        }
    return (
        <>
            <Box mt={4}>
                <Button variant="outline" size="md" color="black" mt={4} m={2} onClick={onOpen}>Add Your First Website  <ArrowForwardIcon m={[0, 3]} /> </Button>
                <Button colorScheme="blue" size="md" color="white" mt={4} m={2} onClick={() => toast({ title: "An error occurred.", description: "Sorry plans are not available", status: "error", duration: 9000, isClosable: true, })}>Upgrade Your Plan </Button>
            </Box>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
                    <ModalHeader>Add your Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="My site name" name="site-name" ref={register({ required: true })} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input placeholder="https://www.google.com" name="site-link" ref={register({ required: true })} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>

                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" colorScheme="blue" mr={3} m={3}>Create</Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModalItem 