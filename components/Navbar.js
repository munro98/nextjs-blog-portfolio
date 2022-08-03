import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  Container,
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
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import ToggleDarkMode from "./ToggleDarkMode";
import Logo from "./Logo";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const bgColor = useColorModeValue("#3182ce", "#FBD38D");
  const color = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? bgColor : undefined}
        color={active ? "#202023" : color}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#06060680")}
      style={{ backdropFilter: "blur(4px)" }}
      zIndex={99}
      {...props}
    >
      <Container
        display="flex"
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

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block" }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              display={{ base: "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
              justifyContent="right"
              mt={{ base: 4, nmd: 0 }}
              mr={6}
            >
              <LinkItem href="/" path={path}>
                Home
              </LinkItem>
              <LinkItem href="/works" path={path}>
                Works
              </LinkItem>
              <LinkItem href="/blog_posts" path={path}>
                Blog
              </LinkItem>
            </Stack>
          </Box>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                style={{ top: "-2px" }}
                mr={6}
                as={IconButton}
                icon={<HamburgerIcon></HamburgerIcon>}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList
                bg={useColorModeValue("#ffffffff", "#202023ff")}
                style={{ backdropFilter: "blur(4px)" }}
                mt={2}
              >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/blog_posts" passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              style={{ display: "inline-block" }}
              key={useColorModeValue("light", "dark")}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <ToggleDarkMode></ToggleDarkMode>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
