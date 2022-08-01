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
  SimpleGrid,
} from "@chakra-ui/react";

import { sortByDate } from "../../utils";

import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";

export default function minigolf() {
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
                Minigolf
              </Heading>
              <List ml={4} my={4}>
                <ListItem>
                  Built with: &nbsp; <span>C#, Unity3D, Blender3D </span>
                </ListItem>
              </List>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <video
                muted
                autoPlay
                loop
                width="200px"
                style={{ display: "inline-block", marginRight: "0" }}
              >
                <source
                  src="https://raw.githubusercontent.com/munro98/munro98.github.io/master/videos/golf.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </Box>
          </Box>

          <Paragraph>
            This project was an exercise in learning about game development. I
            coded the gameplay tweaked the physics of how the golf balls
            interacted and 3D modelled the golf courses and the environment.
            Syncing the game state across all the multiplayer clients and
            getting all the gameplay systems to work together were very
            significant challenges in this project.
          </Paragraph>
          <Image
            w="full"
            src="https://raw.githubusercontent.com/munro98/munro98.github.io/master/images/golf.jpg"
            alt="Screenshot of 3d minigolf game"
            mb={4}
          />
        </Section>
      </Box>
    </Container>
  );
}
