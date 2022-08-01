import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";

import { sortByDate } from "../../utils";

import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";

export default function simplecraft() {
  return (
    <Container>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <br></br>
        <Link href="/works">Back</Link>
        <Section>
          <Heading as="h3" variant="section-title">
            Simple Craft
          </Heading>

          <List ml={4} my={4}>
            <ListItem>
              Source Code: &nbsp;{" "}
              <Link href="https://github.com/munro98/SimpleCraftCpp">
                Github
              </Link>
            </ListItem>
            <ListItem>
              Built with: &nbsp; <span>C++ OpenGL SDL2 Visual Studio 2015</span>
            </ListItem>
          </List>
          <Paragraph>
            I used to be an avid Minecraft when I was younger and as I got more
            into programming, I thought I might try to make a clone to see the
            technical challenges that needed to be solved. During this project I
            learned how the OpenGL graphics API worked and improved my C++
            skills.
          </Paragraph>
        </Section>

        <Image
          w="full"
          src="http://i.imgur.com/sGc1QOb.png"
          alt="Procedurally generated 3D blocky world"
          mb={4}
        />
      </Box>
    </Container>
  );
}
