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

export default function redditonflutter() {
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
              <Link href="https://github.com/munro98/RedditOnFlutter">
                Github
              </Link>
            </ListItem>
            <ListItem>
              Built with: &nbsp; <span>Flutter, Dart 2, Android Studio</span>
            </ListItem>
          </List>
          <Paragraph>
            Browse Reddit on mobile on an App created with the multiplatform
            Flutter framework. Throughout this project, I learned how to make
            API calls to reddit.com through HTTP and display them through a
            Mobile App style interface.
          </Paragraph>
        </Section>

        <Image
          w="full"
          src="https://raw.githubusercontent.com/munro98/RedditOnFlutter/master/redditAppScreenshot.png"
          alt="screenshot of the app"
          mb={4}
        />
      </Box>
    </Container>
  );
}
