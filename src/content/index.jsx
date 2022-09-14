import React from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css'
import AddJob from '../components/AddJob';
import Frame, { FrameContextConsumer }from 'react-frame-component';



import { ChakraProvider, Box, SimpleGrid, HStack, VStack, GridItem, Grid, Container, Heading, Text, Flex, Button, Stack } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'



const body = document.querySelector('body')

const app = document.createElement('div')

app.id = 'react-root'

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
if (body) {
  body.prepend(app)
}

const container = document.getElementById('react-root');
const root = createRoot(container);



root.render(

  <ChakraProvider>

  <Box  bg='tomato' w='100%' p={10} m={ 40} color='white'>
  This is the Box
  </Box>
    </ChakraProvider>

)


