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

export default function materialbakery() {
  return (
    <Container>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <br></br>
        <Link href="/works">Back</Link>
        <Section>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h3" variant="section-title">
                Material Bakery
              </Heading>

              <List ml={4} my={4}>
                <ListItem>
                  Source Code: &nbsp;{" "}
                  <Link href="https://github.com/munro98/MaterialBakery">
                    Github
                  </Link>
                </ListItem>
                <ListItem>
                  Built with: &nbsp; <span>Python, Blender3D</span>
                </ListItem>
              </List>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Image
                width="200px"
                src="https://raw.githubusercontent.com/munro98/MaterialBakery/master/example1.jpg"
                alt=""
                mb={4}
              />
            </Box>
          </Box>
          <Paragraph>
            An extension for the Blender 3D modeling software for baking
            material node shader graphs.
          </Paragraph>
          <Paragraph>
            3D software is often very complicated and artists getted bogged down by unintuitive 
            user interfaces that constrain artists capabilities. 
            To aid this many 3D softwares like Blender 3D have a very healthy addon ecosystem 
            to improve artist productivity.
          </Paragraph>
          <Paragraph>
            This addon lets artist define their own materials through the
            visually oriented node graph system and then later flatten them down
            for exporting into other 3D applications, game engines 
            to speedup thier workflow.
          </Paragraph>
        </Section>
        <Image
          w="full"
          src="https://raw.githubusercontent.com/munro98/MaterialBakery/master/example2.jpg"
          alt=""
          mb={4}
        />
      </Box>
    </Container>
  );
}
