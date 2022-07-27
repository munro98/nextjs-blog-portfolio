import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device=width, initial-scale=1" />
            <title> Nigels HomePage</title>
        </Head>

        <Navbar path={router.asPath}></Navbar>

        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
        </Box>
    )
}
export default Main;