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

import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";

export default function ninedays() {
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
                9Days
              </Heading>
              <List ml={4} my={4}>
                <ListItem>
                  Source Code: &nbsp;{" "}
                  <Link href="https://github.com/munro98/9Days">Github</Link>
                </ListItem>
                <ListItem>
                  Play: &nbsp;{" "}
                  <Link href="https://munro98.github.io/9Days/">9Days</Link>
                </ListItem>
                <ListItem>
                  Built with: &nbsp;{" "}
                  <span>
                    HTML Canvas, JavaScript, Chrome, Krita, Tiled (Sprite based
                    Map editor)
                  </span>
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
                  src="https://raw.githubusercontent.com/munro98/munro98.github.io/master/videos/9days.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </Box>
          </Box>
          <Paragraph>
            A Top Down Zombie Shoot-em-up game/game engine in pure HTML Canvas,
            Javascript and zero Libraries.
          </Paragraph>
          <br></br>
          <Paragraph>
            I built this since I was amused I could write a game in Javascript
            and HTML Canvas and it would be able to run on any device with a web
            browser. I used Krita to create the character/texture sprites and
            the Tiled editor to create the map which loads in a CSV format. I
            implemented the A* path finding algorithm for the zombies and simple
            box collisions so the characters would not stack on top of one
            another and would develop into hordes instead. I also explored the
            use of QuadTrees and BVH(Bounding Volume Hierarchies) to accelerate
            the game physics and increase the framerate of the game.
          </Paragraph>
          <br></br>
          <Paragraph>
            In a fork of this project, I implemented a multiplayer server with
            NodeJS and WebSockets and coded some basic net code to handle
            network latency.
          </Paragraph>
        </Section>

        <Image
          w="full"
          src="https://raw.githubusercontent.com/munro98/9days/master/screenshot.jpg"
          alt="2D Top down shoot-em-up game"
          mb={4}
        />
      </Box>
    </Container>
  );
}
