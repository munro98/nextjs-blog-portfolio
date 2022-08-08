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

export default function musicdiscovery() {
  return (
    <Container>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <br></br>
        <Link href="/works">Back</Link>
        <Section>
          <Heading as="h3" variant="section-title">
            Music Discovery
          </Heading>

          <List ml={4} my={4}>
            <ListItem>
              Code: &nbsp;{" "}
              <Link href="https://github.com/munro98/music-discovery">
                Github
              </Link>
            </ListItem>
            <ListItem>
              Built with: &nbsp;{" "}
              <span>
                NodeJS, Expressjs, Reactjs, MongdoDB, Bootstrap, JavaScript
              </span>
            </ListItem>
            <ListItem>
              Services: &nbsp; <span>AWS, Mongdb Atlas</span>
            </ListItem>
            <ListItem>
              Apis: &nbsp; <span>LastFM, Youtube</span>
            </ListItem>
          </List>
          <Paragraph>
            A Full-stack Web App for finding new music based on your familiar
            artists.

            The app lets you search for an artist in the top search box which auto-fills your text.
            Once you pick an artist the app will query the LastFM API to retrieve that artist&apos;s top songs 
            that you can click on to play. If you are logged in you can Heart the song and add it to your profile.

            I got the app working on an AWS EC2 instance but it ended up costing too much in AWS fees so I 
            decided to deploy to Heroku instead.

          </Paragraph>
        </Section>

        <Image
          w="full"
          src="/images/music-discovery.jpg"
          alt="screenshot of the website"
          mb={4}
        />
      </Box>
    </Container>
  );
}
