import Logo from './Logo'
import NextLink from 'next/link'

import { Container,
            Box,
            Link,
            Stack,
            Heading,
            Flex,
            Menu,
            MenuItem,
            MenuList, 
            MenuButton,
            IconButton,
            useColorModeValue
        } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleDarkMode from './ToggleDarkMode'

const LinkItem = ({href, path, children}) => {
    const active = path === href
    return (
    <NextLink href={href}>
        <Link p={2} 
        bg={active ? useColorModeValue('#3182ce', '#FBD38D') : undefined}
        color={active ? '#202023' : useColorModeValue('gray200', 'whiteAlpha.900')}
        >{children}</Link>
    </NextLink>)
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
        position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#ffffff40', '20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
        <Container display="flex" 
        p={2} 
        maxW="conainter.md" 
        wrap="wrap" 
        align="center"
        justify="space-between"
        >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
            </Heading>
        </Flex>
        <Stack
        direction={{base: "column", md: "row"}}
        display={{base: 'none', md: 'flex'}}
            width={{base: "full", md:'auto'}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
        <LinkItem href="/" path={path}>Home</LinkItem>
        <LinkItem href="/works" path={path}>Works</LinkItem>
        <LinkItem href="/blog_posts" path={path}>Blog</LinkItem>
        </Stack>
        
        <Box flex={1} align="right">
            <ToggleDarkMode></ToggleDarkMode>
            <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                <Menu isLazy id="navbar-menu">
                    <MenuButton as={IconButton} 
                    icon={<HamburgerIcon></HamburgerIcon>} 
                    variant="outline" 
                    aria-label="Options">
                    </MenuButton>
                    <MenuList>
                        <NextLink href="/" passHref>
                            <MenuItem as={Link}>Home</MenuItem>
                        </NextLink>
                        <NextLink href="/blog_posts" passHref>
                            <MenuItem as={Link}>Blog</MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
        </Container>
        </Box>
    )
}

export default Navbar