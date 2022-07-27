import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '@components/Footer'

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
        <Footer />
        </Box>
    )
}
export default Main;

/*
<NextLink href="https://github.com/munro98/nextjs-blog-portfolio" passHref>
                            <MenuItem as={Link}>View source code</MenuItem>
                        </NextLink>
*/