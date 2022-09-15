import { useRef } from 'react'

import { Button, ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import AddJob from './AddJob';
import { addJob } from '../Api';

function ContentView(props) {

    let box_pos = {
        border: "1px",
        height: "90px",
        width: "250px",
        position: "fixed",
        bottom: "0",
        right: "0",
        marginLeft: "100px",
        marginRight: "3px",
        marginBottom: "17px"
    }  

    return (
        <ChakraProvider >
                <Box 
                    {...box_pos}
                
                > Job Seeker add job
                    <AddJob  addJob={addJob} > Add Job </AddJob>
                </Box>
        </ChakraProvider>
    )
}

export default ContentView