"use client"
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const theme = extendTheme({
    colors: {
        'text': '#0a0e04',
        'background': '#fcfdfa',
        'primary': '#8fc542',
        'secondary': '#90ddb6',
        'accent': '#72d3c9',
       },
  })

export const UIProvider = ({children}:any) =>{
    return(
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
    )
}