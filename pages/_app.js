import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main"
import theme from '../lib/theme'
import Fonts from '../lib/fonts'

function Application({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
            <Component {...pageProps}  key={router.route}></Component>
        </Layout>
    </ChakraProvider>
  )
}

export default Application
