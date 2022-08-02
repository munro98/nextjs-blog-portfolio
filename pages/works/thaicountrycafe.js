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

export default function thaicountrycafe() {
  return (
    <Container>
      <Box display={{ md: "flex" }}></Box>
      <Box flexGrow={1}>
        <br></br>
        <Link href="/works">Back</Link>
        <Section>
          <Heading as="h3" variant="section-title">
            Thai Country Cafe Website
          </Heading>

          <List ml={4} my={4}>
            <ListItem>
              Website: &nbsp;{" "}
              <Link href="http://www.thaicountrycafe.co.nz/">
                www.thaicountrycafe.co.nz
              </Link>
            </ListItem>
            <ListItem>
              Built with: &nbsp; <span>Jekyll, HTML, CSS</span>
            </ListItem>
          </List>
          <Paragraph>
            I overhauled the website for the restaurant I worked at since the
            old website looked like it came from the year 1999. I used Jekyll to
            create the site since I was familiar with it at the time. I utilized
            Jekyll&apos;s data loading feature so menu prices could be loaded
            from CSV files for easy updates in the future.
          </Paragraph>
        </Section>

        <Image
          w="full"
          src="/images/thai-country-cafe-screenshot.jpg"
          alt="screenshot of the website"
          mb={4}
        />
      </Box>
    </Container>
  );
}
