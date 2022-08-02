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

export default function whalemusic() {
  return (
    <Container>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <br></br>
        <Link href="/works">Back</Link>
        <Section>
          <Heading as="h3" variant="section-title">
          Whale Music
          </Heading>

          <List ml={4} my={4}>
            <ListItem>
              Code: &nbsp;{" "}
              <Link href="https://github.com/munro98/flutter_music_streaming">
                Github
              </Link>
            </ListItem>
            <ListItem>
              Built with: &nbsp; <span>Flutter, Dart 2, NodeJS, Expressjs, MongdoDB, Docker, JavaScript</span>
            </ListItem>
          </List>
          <Paragraph>
          A Multi-platform music streaming App built with Flutter App Framework
          </Paragraph>

          <Paragraph>
          The goal of the project was to create a music streaming app for my FLAC library that would 
          work on all platforms Android, IOS, PC, macOS and Linux.
          I got sick of songs disappearing from my library on streaming platforms and I wanted a music 
          player with a dense and compact user interface.
          </Paragraph>
          <Paragraph>
          The Flutter app connects to a NodeJS server with a MongoDB database and downloads the 
          music library data to a local SQLite database. Various dependencies are used depending 
          on the current platform used to play the audio files VLC_Flutter for windows 
          and audio_players for Android/Mac.
          </Paragraph>          
        </Section>
      </Box>
    </Container>
  );
}
